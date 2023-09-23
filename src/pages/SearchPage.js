import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchInput } from '../components/searchInput/SearchInput';
import { useComicsServices } from '../services/ComicsService';
import { Spinner } from '../components/spinner/Spinner';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';
import { Comics } from '../components/сomics/Comics';

export function SearchPage() {
  const [comicsList, setComicsList] = useState([]);

  const [searchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') || '';

  const { loading, error, getComicsByName } = useComicsServices();

  useEffect(() => {
    setComicsList([]);
    getComicsByName(nameQuery).then(setComicsList);
  }, [nameQuery]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <SearchInput />
      <div className='comics__list'>
        {spinner}
        {errorMessage}
        <Comics data={comicsList} />
      </div>
    </>
  );
}

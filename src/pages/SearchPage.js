import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchInput } from '../components/searchInput/SearchInput';
import { useComicsServices } from '../services/ComicsService';
import { Spinner } from '../components/spinner/Spinner';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';
import { RenderComics } from '../components/renderComics/RenderComics';

export function SearchPage() {
  const [comicsList, setComicsList] = useState([]);

  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';

  const { loading, error, getComicsByName } = useComicsServices();

  useEffect(() => {
    setComicsList([]);
    getComicsByName(postQuery).then(setComicsList);
  }, [postQuery]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <SearchInput />
      <div className='comics__list'>
        {spinner}
        {errorMessage}
        <RenderComics data={comicsList} />
      </div>
    </>
  );
}

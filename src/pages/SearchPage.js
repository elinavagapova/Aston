import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { comicsCleaned, fetchComics } from '../store/comicsListSlice';

import { SearchInput } from '../components/searchInput/SearchInput';
import { Spinner } from '../components/spinner/Spinner';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';
import { Comics } from '../components/сomics/Comics';
import { ButtonLoadMore } from '../components/buttonLoadMore/ButtonLoadMore';

export function SearchPage() {
  const [offset, setOffset] = useState(1);
  const { isLoading, isError, comicsList, comicsEnded, newItemLoading } = useSelector(
    state => state.allComics
  );
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') || '';

  const onRequest = (offsetId, nameQ) => {
    dispatch(fetchComics({ offset: offsetId, name: nameQ }));
    setOffset(offset + 12);
  };

  useEffect(() => {
    onRequest(offset, nameQuery);
    return () => {
      dispatch(comicsCleaned());
    };
  }, [nameQuery]);

  const errorMessage = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const notRes =
    comicsList.length === 0 ? (
      <p style={{ textAlign: 'center' }}>По запросу ничего не найдено</p>
    ) : null;

  return (
    <>
      <SearchInput />
      <div className='comics__list'>
        {spinner}
        {errorMessage}
        {!isLoading && !isError && notRes}
        <Comics data={comicsList} />
        <ButtonLoadMore
          newItemLoading={newItemLoading}
          offset={offset}
          comicsEnded={comicsEnded}
          onRequest={onRequest}
          nameQuery={nameQuery}
        />
      </div>
    </>
  );
}

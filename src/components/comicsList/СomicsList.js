import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { comicsCleaned, fetchComics } from '../../store/comicsListSlice';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { Comics } from '../сomics/Comics';
import { ButtonLoadMore } from '../buttonLoadMore/ButtonLoadMore';

import './comicsList.scss';

export function ComicsList() {
  const [offset, setOffset] = useState(265);
  const { isLoading, isError, comicsList, comicsEnded, newItemLoading } = useSelector(
    state => state.allComics
  );
  const dispatch = useDispatch();

  const onRequest = offsetId => {
    dispatch(fetchComics({ offset: offsetId }));
    setOffset(offset + 12);
  };

  useEffect(() => {
    onRequest(offset);
    return () => {
      dispatch(comicsCleaned());
    };
  }, []);

  const errorMessage = isError ? <ErrorMessage /> : null;
  const spinner = isLoading && newItemLoading ? <Spinner /> : null;

  return (
    <div className='comics__list'>
      {spinner}
      {errorMessage}
      <Comics data={comicsList} />
      <ButtonLoadMore
        newItemLoading={newItemLoading}
        offset={offset}
        comicsEnded={comicsEnded}
        onRequest={onRequest}
      />
    </div>
  );
}

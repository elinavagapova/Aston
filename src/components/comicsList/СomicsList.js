import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { comicsCleaned, fetchComics } from '../../store/comicsListSlice';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { Comics } from '../сomics/Comics';
import { ButtonLoadMore } from '../buttonLoadMore/ButtonLoadMore';

import './comicsList.scss';

export function ComicsList() {
  const [offset, setOffset] = useState(360);

  const getIsLoading = state => state.allComics.isLoading;
  const isLoading = useSelector(getIsLoading);
  const getIsError = state => state.allComics.isError;
  const isError = useSelector(getIsError);
  const getComicsList = state => state.allComics.comicsList;
  const comicsList = useSelector(getComicsList);
  const getComicsEnded = state => state.allComics.comicsEnded;
  const comicsEnded = useSelector(getComicsEnded);
  const getNewItemLoading = state => state.allComics.newItemLoading;
  const newItemLoading = useSelector(getNewItemLoading);

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
  }, []); // eslint-disable-line

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

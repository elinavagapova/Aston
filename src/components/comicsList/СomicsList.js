import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { comicsCleaned, fetchComics } from '../../store/comicsListSlice';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { Comics } from '../сomics/Comics';

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
      <button
        type='button'
        className='button button__main button__long'
        disabled={newItemLoading}
        onClick={() => onRequest(offset)}
        style={comicsEnded ? { display: 'none' } : { display: 'block' }}
      >
        <div className='inner'>Загрузить еще</div>
      </button>
    </div>
  );
}

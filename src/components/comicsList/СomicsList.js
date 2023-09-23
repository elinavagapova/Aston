import { useState, useEffect } from 'react';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { useComicsServices } from '../../services/ComicsService';
import { Comics } from '../сomics/Comics';

import './comicsList.scss';

export function ComicsList() {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(230);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useComicsServices();

  const onCharListLoaded = newComicsList => {
    let ended = false;
    if (newComicsList.length < 12) {
      ended = true;
    }

    setComicsList([...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset(offset + 12);
    setComicsEnded(ended);
  };

  const onRequest = (offseId, initial) => {
    if (initial) {
      setNewItemLoading(false);
    } else {
      setNewItemLoading(true);
    }

    getAllComics(offseId).then(onCharListLoaded);
  };

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className='comics__list'>
      {spinner}
      {errorMessage}
      <Comics data={comicsList} />
      <button
        type='button'
        className='button button__main button__long'
        disabled={newItemLoading}
        onClick={() => onRequest(offset, false)}
        style={comicsEnded ? { display: 'none' } : { display: 'block' }}
      >
        <div className='inner'>Загрузить еще</div>
      </button>
    </div>
  );
}

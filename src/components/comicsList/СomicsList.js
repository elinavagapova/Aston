import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { useComicsServices } from '../../services/ComicsService';

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

  const renderItems = arr => {
    const items = arr.map(({ title, thumbnail, price, id }) => (
      <li className='comics__item' key={id}>
        <Link to='/'>
          <img src={thumbnail} alt={title} className='comics__item-img' />
          <div className='comics__item-name'>{title}</div>
          <div className='comics__item-price'>{price}</div>
        </Link>
      </li>
    ));
    return <ul className='comics__grid'>{items}</ul>;
  };

  const items = renderItems(comicsList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className='comics__list'>
      {spinner}
      {errorMessage}
      {items}
      <button
        type='button'
        className='button button__main button__long'
        disabled={newItemLoading}
        onClick={() => onRequest(offset, false)}
        style={comicsEnded ? { display: 'none' } : { display: 'block' }}
      >
        <div className='inner'>load more</div>
      </button>
    </div>
  );
}

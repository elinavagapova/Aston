import { useNavigate, useParams } from 'react-router-dom';

import { useGetComicQuery } from '../../api/apiSlice';
import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

import './singleComic.scss';

export function SingleComic() {
  const { comicId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetComicQuery(comicId);

  const goBack = () => navigate(-1);

  const errorMessage = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || isError || !data) && (
    <div className='single-comic'>
      <img src={data.thumbnail} alt={data.title} className='single-comic__img' />
      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{data.title}</h2>
        <p className='single-comic__descr'>{data.description}</p>
        <p className='single-comic__descr'>{data.page}</p>
        <div className='single-comic__price'>{data.price}</div>
      </div>
      <button type='button' className='single-comic__back' onClick={goBack}>
        Вернуться назад
      </button>
    </div>
  );

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
}

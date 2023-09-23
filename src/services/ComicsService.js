import { useHttp } from '../hooks/http.hook';

export function useComicsServices() {
  const { loading, error, request } = useHttp();

  const apiBase = 'https://gateway.marvel.com:443/v1/public/comics';
  const apiKey = process.env.REACT_APP_MARVEL_KEY;

  const transformComics = comics => ({
    id: comics.id,
    title: comics.title,
    description: comics.description || 'Нет описания',
    thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
    page: comics.pageCount ? `${comics.pageCount} стр.` : 'Нет информации о количестве страниц',
    price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'нет данных',
  });

  const getAllComics = async offset => {
    const res = await request(`${apiBase}?orderBy=issueNumber&limit=12&offset=${offset}&${apiKey}`);
    return res.data.results.map(transformComics);
  };

  const getComic = async id => {
    const res = await request(`${apiBase}/${id}?${apiKey}`);
    return transformComics(res.data.results[0]);
  };

  const getComicsByName = async name => {
    const res = await request(`${apiBase}?titleStartsWith=${name}&${apiKey}`);
    return res.data.results.map(transformComics);
  };

  return { loading, error, getAllComics, getComic, getComicsByName };
}

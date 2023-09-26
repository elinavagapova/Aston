export const transformComics = comics => ({
  id: comics.id,
  title: comics.title,
  description: comics.description || 'Нет описания',
  thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
  page: comics.pageCount ? `${comics.pageCount} стр.` : 'Нет информации о количестве страниц',
  price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'нет данных',
});

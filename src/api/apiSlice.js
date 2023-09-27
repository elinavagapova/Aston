import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformComics } from '../transformComics/transformComics';

const apiKey = process.env.REACT_APP_MARVEL_KEY;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gateway.marvel.com:443/v1/public/comics' }),
  endpoints: builder => ({
    getComic: builder.query({
      query: id => `/${id}?${apiKey}`,
      transformResponse: response => transformComics(response.data.results[0]),
    }),
    getSuggest: builder.query({
      query: value => `?titleStartsWith=${value}&limit=5&${apiKey}`,
      transformResponse: response =>
        response.data.results.map(item => ({ id: item.id, title: item.title })),
    }),
  }),
});

export const { useGetComicQuery, useGetSuggestQuery } = apiSlice;

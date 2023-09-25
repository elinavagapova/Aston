import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';

const transformComics = comics => ({
  id: comics.id,
  title: comics.title,
  description: comics.description || 'Нет описания',
  thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
  page: comics.pageCount ? `${comics.pageCount} стр.` : 'Нет информации о количестве страниц',
  price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'нет данных',
});

export const fetchComic = createAsyncThunk('comic/fetchComic', async id => {
  const { request } = useHttp();
  const response = await request(
    `https://gateway.marvel.com:443/v1/public/comics/${id}?${process.env.REACT_APP_MARVEL_KEY}`
  );
  return response;
});

/* eslint-disable no-param-reassign */

const singleComicSlice = createSlice({
  name: 'comic',
  initialState: {
    comic: {},
    isLoading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchComic.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchComic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comic = transformComics(action.payload.data.results[0]);
      })
      .addCase(fetchComic.rejected, state => {
        state.isError = true;
      })
      .addDefaultCase(() => {});
  },
});

export default singleComicSlice.reducer;

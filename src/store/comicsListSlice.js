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

export const fetchComics = createAsyncThunk('comics/fetchComics', async ({ offset, name }) => {
  const apiBase = `https://gateway.marvel.com:443/v1/public/comics?`;
  const apiKey = process.env.REACT_APP_MARVEL_KEY;
  const { request } = useHttp();
  let response;

  if (name) {
    response = await request(
      `${apiBase}titleStartsWith=${name}&limit=12&offset=${offset}&${apiKey}`
    );
  } else {
    response = await request(`${apiBase}limit=12&offset=${offset}&${apiKey}`);
  }
  return response;
});

/* eslint-disable no-param-reassign */

const comicsListSlice = createSlice({
  name: 'comics',
  initialState: {
    comicsList: [],
    isLoading: false,
    isError: false,
    comicsEnded: false,
    newItemLoading: false,
  },
  reducers: {
    comicsCleaned: state => {
      state.comicsList = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchComics.pending, state => {
        state.isLoading = true;
        state.newItemLoading = true;
      })
      .addCase(fetchComics.fulfilled, (state, action) => {
        const newComicsList = action.payload.data.results.map(transformComics);
        state.isLoading = false;
        state.comicsList = [...state.comicsList, ...newComicsList];
        state.newItemLoading = false;
        if (newComicsList.length < 12) {
          state.comicsEnded = true;
        }
      })
      .addCase(fetchComics.rejected, state => {
        state.isError = true;
      })
      .addDefaultCase(() => {});
  },
});

export default comicsListSlice.reducer;
export const { comicsCleaned } = comicsListSlice.actions;

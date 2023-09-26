import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';
import { transformComics } from '../transformComics/transformComics';

export const fetchComic = createAsyncThunk('comic/fetchComic', async id => {
  const { request } = useHttp();
  const response = await request(
    `https://gateway.marvel.com:443/v1/public/comics/${id}?${process.env.REACT_APP_MARVEL_KEY}`
  );
  return response;
});

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

import { configureStore } from '@reduxjs/toolkit';

import allComics from './comicsListSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: { allComics, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(apiSlice.middleware),
});

import { configureStore } from '@reduxjs/toolkit';

import allComics from './comicsListSlice';
import user from './userSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: { allComics, user, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(apiSlice.middleware),
});

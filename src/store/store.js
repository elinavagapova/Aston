import { configureStore } from '@reduxjs/toolkit';

import allComics from './comicsListSlice';
import singleComic from './singleComicSlice';

export const store = configureStore({
  reducer: { allComics, singleComic },
});

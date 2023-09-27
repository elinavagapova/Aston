import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Home, SearchPage, SignIn, SignUp } from './pages';
import { AppHeader } from './components/appHeader/AppHeader';
import { Spinner } from './components/spinner/Spinner';

const Page404 = lazy(() => import('./pages/404'));
const ComicPage = lazy(() => import('./pages/ComicPage'));

export function App() {
  return (
    <div className='app'>
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/comic/:comicId' element={<ComicPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

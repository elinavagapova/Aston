import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AppHeader } from './components/appHeader/AppHeader';

export function App() {
  return (
    <div className='app'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

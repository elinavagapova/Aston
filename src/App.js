import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import './App.css';

function App() {
  return (
    <div className='app'>
      <header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer />
    </div>
  );
}

export default App;

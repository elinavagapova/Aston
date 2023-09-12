import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
          <header/>
          <main>
              <Routes>
                  <Route path='/' element={<Home/>}/>
              </Routes>
          </main>
          <footer/>
      </div>
    </Router>
  );
}

export default App;

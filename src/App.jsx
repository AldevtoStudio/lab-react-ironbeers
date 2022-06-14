import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import CreateBeerPage from './pages/CreateBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<SingleBeerPage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<CreateBeerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

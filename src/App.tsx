import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Items, Pokemon, Pokemons } from './pages';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pokemons/:name' element={<Pokemon />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/items' element={<Items />} />
        <Route path='/' element={<Pokemons />} />
      </Routes>
    </Router>
  );
}

export default App;

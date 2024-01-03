// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Admin />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

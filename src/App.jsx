// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/homePage/Home'
import Checkout from './pages/checkoutPage/Checkout'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        {/* <Route exact path='/' element={<Admin />} /> */}
        {/* <Route exact path='/' element={<Home/>}/> */}
        <Route exact path='/' element={<Checkout />} />
        <Route exact path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

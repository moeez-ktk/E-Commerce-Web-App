// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Admin />} />
        <Route exact path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Menu from './Components/Menu/Menu';
import Chefs from './Components/Chefs/Chefs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='menu' element={<Menu />} />
          <Route path='chefs' element={<Chefs/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

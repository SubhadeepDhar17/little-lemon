import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Menu from './Components/Menu/Menu';
import Chefs from './Components/Chefs/Chefs';
import Body from './Components/Body/Body';
import Details from './Components/Reservations/details';
import Reservations from './Components/Reservations/reservations';

function App() {
  const getData = (data) => {
    console.log("coming from", data)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Body />} />
          <Route path='menu' element={<Menu />} />
          <Route path='chefs' element={<Chefs/>} />
          <Route path='details' element={<Details onSubmit={getData}/>}/>
          <Route path='reservations' element={<Reservations/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

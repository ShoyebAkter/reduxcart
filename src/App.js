import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards></Cards>}/>
      <Route path='/details' element={<CardsDetails></CardsDetails >}/>
    </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Components/Card';
import CardsDetails from './Components/CardsDetails';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Card></Card>}/>
      <Route path='/details' element={<CardsDetails></CardsDetails>}/>
    </Routes>
    </>
  );
}

export default App;

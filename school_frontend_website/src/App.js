import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Addmission from './components/addmission/Addmission';
import Social from './components/social_commitment/Social';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/Addmission' Component={Addmission}></Route>
      <Route path='/Social' Component={Social}></Route>
    </Routes>
    </>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Success } from './pages/Success';

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Success' element={<Success />} />
      </Routes>
    </div>
  );
}

export default App

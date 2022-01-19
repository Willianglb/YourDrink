import React, {Fragment} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Pedidos from './pages/Pedidos';

function App() {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/pedidos' element={<Pedidos/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
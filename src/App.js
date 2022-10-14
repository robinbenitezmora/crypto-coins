import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Crypto from './components/Crypto';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:cryptoId" element={<Crypto />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

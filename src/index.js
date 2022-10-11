import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Crypto from './components/Crypto';
import store from './redux/configureStore';
import './index.css';
// import App from './App';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:cryptoId" element={<Crypto />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

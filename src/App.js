import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

const App = () => (
  <div className="app">
    <nav className="navbar" />
    <div className="main" />
    <div className="footer" />
  </div>
);

export default App;

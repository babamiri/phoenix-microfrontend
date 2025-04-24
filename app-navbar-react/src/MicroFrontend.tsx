import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

const MicroFrontend: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MicroFrontend;
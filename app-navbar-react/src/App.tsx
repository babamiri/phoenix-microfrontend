import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

const HomePage: React.FC = () => <h2>Home Page</h2>;
const ProductsPage: React.FC = () => <h2>Products Page</h2>;
const HelpPage: React.FC = () => <h2>Help Page</h2>;
const AboutPage: React.FC = () => <h2>About Page</h2>;

const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/help">Help</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;

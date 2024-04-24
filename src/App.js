import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/ProductPage';
import Empty from './components/Empty';
import ProductForm from './components/ProductForm';
import Temp from './components/Item';
import Wishlist from './components/Wishlist';

import React from 'react';
import Navbar from './components/Navbar2';

function App() {
  return (
      <Router>
        <Routes>
          {/* Redirect from '/' to '/home' */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Define other routes */}
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/empty' element={<Empty />} />
          <Route path='/post' element={<ProductForm />} />
          <Route path='/item' element={<Temp />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      </Router>
  );
}

export default App;
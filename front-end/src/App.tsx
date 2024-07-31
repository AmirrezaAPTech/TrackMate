import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/LandingPages/Footer';
import { Provider } from 'react-redux';
import store from './features/store';
import Cart from './components/CartPages/Cart';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className='w-screen'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Cart />
        <Footer />
      </div>
    </Router></Provider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPages/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './features/store';
import Register from './components/Auth/Register';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className='w-screen min-h-screen'>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </div>
    </Router></Provider>
  );
}

export default App;

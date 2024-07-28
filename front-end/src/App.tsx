import './App.css'
import Header from './components/Header'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/LandingPages/Footer'
// import Header from './components/Header'
// import HomePage from './components/HomePage'

function App() {

  return (
    <div>
        <div className='w-screen'>
          <Header />
          {/* 
          <HomePage /> */}
          <ProductPage />
          {/* <Footer/> */}
        </div>

    </div>
  )
}

export default App

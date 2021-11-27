import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Home from './components/Home'
import Product from './components/product/Product'
import Contact from './components/Contact'
import Footer from './components/common/Footer'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />} exact />
          <Route path='/product' element={<Product />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
      </Router>
      <Footer />
    </>
    // <Router>
    //   <div className='App'>
    //     <Header />
    //     <Routes>
    //       <Route path='/home' exact element={<Home />} />
    //       <Route path='/product' exact element={<Product />} />
    //       <Route path='/contact' exact element={<Contact />} />
    //     </Routes>
    //     <h1>We are Learning Routing</h1>
    //   </div>
    // </Router>
  )
}

export default App

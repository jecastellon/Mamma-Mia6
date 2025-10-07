import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './assets/pages/Pizza'
import Home from './assets/pages/Home'
import Cart from './assets/pages/Cart'
import Register from './assets/pages/Register'
import LoginPage from './assets/pages/LoginPage'
import Profile from './assets/pages/Profile'
import NotFound from './assets/pages/NotFound'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="contenedor">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Footer />
    </div>
  )
}

export default App

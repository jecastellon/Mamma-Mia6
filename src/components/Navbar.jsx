import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from './CartContext'
import { formatNumber } from '../assets/pages/Cart'

export default function Navbar() {
  const { total } = useCart();
  const [token, setToken] = useState(false)
    return (
        <>
        <div className='menu'>
            <div className='menu-left'>
            <p>Pizzería Mamma Mia!</p>
      <Link to="/">
        <Button variant="dark">🍕Home</Button>
      </Link>
      {token ? (
          <>
      <Link to="/profile">
        <Button variant="dark">🔓Profile</Button>
      </Link>
      <Link to="/login">
        <Button variant="dark">🔒Logout</Button>
      </Link>
        <Button variant="dark" onClick={()=>setToken(!token)}>🔄Cambiar token ({token? "true":"false"})</Button>

        </>
      ) : (
          <>
      <Link to="/login">
        <Button variant="dark">🔐Login</Button>
      </Link>
      <Link to="/register">
        <Button variant="dark">🔐Register</Button>
      </Link>
        <Button variant="dark" onClick={()=>setToken(!token)}>🔄Cambiar token ({token? "true":"false"})</Button>
        </>
      )}
        </div>
        <div>
      <Link to="/cart">
        <Button variant="dark">🛒Total: ${formatNumber(total)}</Button>
      </Link>
      </div>
      </div>
    </>
  )
}

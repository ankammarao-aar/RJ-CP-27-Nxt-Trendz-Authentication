// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-img"
    />

    <ul className="nav-list-container">
      <Link to="/" className="nav-link">
        <li className="nav-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="icons"
          />
          Home
        </li>
      </Link>
      <li className="nav-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
          alt="nav products"
          className="icons"
        />
        Products
      </li>
      <li className="nav-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="icons"
        />
        Cart
      </li>
      <button type="button" className="logout-button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header

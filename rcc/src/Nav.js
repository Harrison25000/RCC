import './css/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3 className="Logo"><i>RCC</i></h3>
      <ul className='nav-links'>
        <Link to="/" ><li>Home</li></Link>
        <Link to="/account" ><li>Account</li></Link>
        <Link to="/products" ><li>Products</li></Link>
        <Link to="/about" ><li>About</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;

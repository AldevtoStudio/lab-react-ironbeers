import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <Link to='/'>
      <p className='navbar'>⌂</p>
    </Link>
  );
};

export default Navbar;

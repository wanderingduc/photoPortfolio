import './Nav.css';

function Nav() {
  return (
    <div className='container'>
    <a className='nav-logo' href='localhost:3000'><h1>David</h1></a>
    <ul className='nav-cont'>
    <a href='localhost:3000' className='nav-link-internal'><li className='nav-item'>Home</li></a>
    <a href='localhost:3000' className='nav-link-internal'><li className='nav-item'>About</li></a>
    <a href='localhost:3000' className='nav-link-internal'><li className='nav-item'>Exit</li></a>
    </ul>
    </div>
  );
}

export default Nav;

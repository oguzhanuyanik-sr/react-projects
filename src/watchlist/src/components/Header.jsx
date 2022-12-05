import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to={'/'}>Watch list</Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to={'/watched'}>Watched</Link>
            </li>
            <li>
              <Link className='btn' to={'/add'}>
                <BsPlusLg />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

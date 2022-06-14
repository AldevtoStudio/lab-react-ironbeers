import { Link } from 'react-router-dom';
import beers from './../../assets/beers.png';
import randomBeer from './../../assets/random-beer.png';
import newBeer from './../../assets/new-beer.png';
import './homePage.scss';

const HomePage = () => {
  return (
    <>
      <Link to='/beers'>
        <img src={beers} alt='' />
        <div className='description'>
          <h2>All Beers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipi elit. Repudiandae, corporis odit provident
            nemo dolorem impedit.
          </p>
        </div>
      </Link>
      <Link to='/random-beer'>
        <img src={randomBeer} alt='' />
        <div className='description'>
          <h2>Random beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipi elit. Repudiandae, corporis odit provident
            nemo dolorem impedit.
          </p>
        </div>
      </Link>
      <Link to='/new-beer'>
        <img src={newBeer} alt='' />
        <div className='description'>
          <h2>Create beer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipi elit. Repudiandae, corporis odit provident
            nemo dolorem impedit.
          </p>
        </div>
      </Link>
    </>
  );
};

export default HomePage;

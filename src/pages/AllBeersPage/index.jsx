import React from 'react';
import Navbar from './../../components/Navbar';
import { getBeers, searchBeer } from '../../services/beers';
import { useEffect, useState } from 'react';
import Beer from './../../components/Beer';
import './allBeers.scss';
import { Link } from 'react-router-dom';
import BeerSearch from '../../components/BeerSearch';

const AllBeersPage = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    getBeers().then((beersList) => {
      setBeers(beersList);
    });
  }, []);

  const handleSearchBeer = (searchText) => {
    searchBeer(searchText).then((beers) => {
      setBeers(beers);
    });
  };

  const mapBeers = (list) =>
    list.map((beer) => (
      <Link to={`/${beer._id}`} key={beer._id}>
        <Beer data={{ ...beer, showFull: false }} />
      </Link>
    ));

  return (
    <>
      <Navbar />
      <BeerSearch onSearch={handleSearchBeer} />
      {(beers && <div className='beersList'>{mapBeers(beers)}</div>) || <div>Loading data...</div>}
    </>
  );
};

export default AllBeersPage;

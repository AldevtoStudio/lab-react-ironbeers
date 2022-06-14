import { useEffect } from 'react';
import { getRandomBeer } from '../../services/beers';
import { useNavigate } from 'react-router-dom';

const RandomBeerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getRandomBeer().then((beerData) => {
      navigate(`/${beerData._id}`);
      console.log('Request');
    });
  }, [navigate]);

  return <div></div>;
};

export default RandomBeerPage;

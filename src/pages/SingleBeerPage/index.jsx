import Navbar from './../../components/Navbar';
import { useEffect, useState } from 'react';
import { getBeer } from '../../services/beers';
import { useParams } from 'react-router-dom';
import Beer from '../../components/Beer';

const SingleBeerPage = (props) => {
  const { beerInfo } = props;

  const [beer, setBeer] = useState((beerInfo && beerInfo) || null);
  let { id } = useParams();

  useEffect(() => {
    getBeer(id).then((beerData) => {
      setBeer(beerData);
    });
  }, [id]);

  return (
    <div>
      <Navbar />

      {(beer && <Beer key={beer._id} data={{ ...beer, showFull: true }} />) || (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default SingleBeerPage;

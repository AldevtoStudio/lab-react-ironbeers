import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { createBeer } from '../../services/beers';
import './createBeer.scss';

const CreateBeerPage = () => {
  const [beer, setBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const navigate = useNavigate();

  const handlePublication = (event) => {
    event.preventDefault();

    createBeer(beer).then((data) => {
      navigate('/');
    });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handlePublication}>
        <div>
          <label className='first' htmlFor='name-input'>
            Name
          </label>
          <input
            id='name-input'
            value={beer.name}
            onChange={(event) => setBeer({ ...beer, name: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='tagline-input'>Tagline</label>
          <input
            id='tagline-input'
            value={beer.tagline}
            onChange={(event) => setBeer({ ...beer, tagline: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='description-input'>Description</label>
          <textarea
            rows='6'
            id='description-input'
            value={beer.description}
            onChange={(event) => setBeer({ ...beer, description: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='first-brewed-input'>First Brewed</label>
          <input
            id='first-brewed-input'
            value={beer.first_brewed}
            onChange={(event) => setBeer({ ...beer, first_brewed: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='brewers-tips-input'>Brewers Tips</label>
          <input
            id='brewers-tips-input'
            value={beer.brewers_tips}
            onChange={(event) => setBeer({ ...beer, brewers_tips: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='attenuation-level-input'>Attenuation Level</label>
          <input
            type='number'
            id='attenuation-level-input'
            value={beer.attenuation_level}
            onChange={(event) => setBeer({ ...beer, attenuation_level: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor='contributed-by-input'>Contributed By</label>
          <input
            id='contributed-by-input'
            value={beer.contributed_by}
            onChange={(event) => setBeer({ ...beer, contributed_by: event.target.value })}
          />
        </div>

        <button>ADD NEW</button>
      </form>
    </>
  );
};

export default CreateBeerPage;

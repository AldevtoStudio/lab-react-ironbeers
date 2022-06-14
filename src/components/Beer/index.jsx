import './beer.scss';

const Beer = (props) => {
  const {
    image_url,
    name,
    tagline,
    contributed_by,
    first_brewed,
    attenuation_level,
    description,
    showFull
  } = props.data;

  const removeUserTag = () => {
    return contributed_by
      .split(' ')
      .filter((word) => !word.includes('>'))
      .join(' ');
  };

  if (showFull)
    return (
      <>
        <div className='fullBeer'>
          <img src={image_url} alt={name} loading='lazy' />
          <div>
            <div className='beerInfo'>
              <div className='header'>
                <div className='top'>
                  <h2>{name}</h2>
                  <b>{attenuation_level}</b>
                </div>
                <div className='bottom'>
                  <h3>{tagline}</h3>
                  <b>{first_brewed}</b>
                </div>
              </div>
            </div>
            <p>{description}</p>
            {contributed_by && <b>{contributed_by}</b>}
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className='beer'>
        <img src={image_url} alt={name} loading='lazy' />
        <div>
          <div className='beerInfo'>
            <div className='header'>
              <h2>{name}</h2>
              <h3>{tagline}</h3>
            </div>
          </div>
          {contributed_by && (
            <p>
              <b>Created by:</b> {removeUserTag()}
            </p>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Beer;

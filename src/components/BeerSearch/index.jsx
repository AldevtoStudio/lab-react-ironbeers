import { useState } from 'react';
import './beerSearch.scss';

const BeerSearch = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input name='search' placeholder='Search' value={search} onChange={handleSearch} />
    </div>
  );
};

export default BeerSearch;

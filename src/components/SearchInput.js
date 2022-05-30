import { useDispatch } from 'react-redux';
import { setQuery } from '../features/filterSlice';

function SearchInput() {
  const dispatch = useDispatch();
  const handleSearch = (e) => dispatch(setQuery(e.target.value));

  return (
    <div className="search ui small icon input">
      <input type="text" placeholder="Search Game" onChange={handleSearch} />
      <i className="search icon"></i>
    </div>
  );
}

export default SearchInput;

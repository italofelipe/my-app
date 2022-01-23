import P from 'prop-types';
import './styles.css';
import Search from '../../assets/img/search.png';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <div className="text-input">
      <input onChange={handleChange} value={searchValue} type="search" />
        <img className="search-image" src={Search} alt="" />
    </div>
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};

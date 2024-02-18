import { setFilterValue } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';

import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterContact = ({ target }) =>
    dispatch(setFilterValue(target.value));

  return (
    <div className="filter_container">
      <p className="filter_name">Find contact by name:</p>
      <input
        className="filter_input"
        type="text"
        name="filter"
        onChange={e => handleFilterContact(e)}
      />
    </div>
  );
};

export default Filter;

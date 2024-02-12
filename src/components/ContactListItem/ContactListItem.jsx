import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = () => dispatch(deleteContact(id));

  return (
    <li>
      {name}: {number}
      <button className="delete-btn" onClick={handleRemoveContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import { TiUserDelete } from 'react-icons/ti';
import { IconContext } from 'react-icons';

import './ContactListItem.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleRemoveContact = () => dispatch(deleteContact(id));

  return (
    <li className="contact_list-item">
      <div className="contact_list-user">
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <IconContext.Provider value={{ size: '1.5em' }}>
        <button className="delete-btn" onClick={handleRemoveContact}>
          <TiUserDelete />
        </button>
      </IconContext.Provider>
    </li>
  );
};

export default ContactListItem;

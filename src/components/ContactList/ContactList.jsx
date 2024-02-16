import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

import './ContactList.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ol>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ol>
  );
};

export default ContactList;

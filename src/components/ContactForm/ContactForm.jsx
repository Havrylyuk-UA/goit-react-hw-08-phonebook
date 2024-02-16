import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from '../../redux/contacts/selectors';

import { addContact, fetchContacts } from '../../redux/contacts/operations';

import './ContactForm.css';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlePushForm = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }

    dispatch(addContact({ name, number }));
    resetForm(form);
  };

  const resetForm = form => {
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  return (
    <>
      <form onSubmit={handlePushForm}>
        <label>
          <legend>Name</legend>
          <input type="text" name="name" required />
        </label>
        <label>
          <legend>Number</legend>
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
      {contacts.length === 0 ? (
        ''
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default ContactForm;

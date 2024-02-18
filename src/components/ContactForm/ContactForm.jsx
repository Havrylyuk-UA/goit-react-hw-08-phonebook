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
    <div className="contacts_page-container">
      <form onSubmit={handlePushForm} className="contact_form">
        <label className="contact_form-label">
          <legend className="contact_form-legend">Name: </legend>
          <input
            className="contact_form-inp"
            type="text"
            name="name"
            required
          />
        </label>
        <label className="contact_form-label">
          <legend className="contact_form-legend">Number: </legend>
          <input
            className="contact_form-inp"
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit" className="contact_form-btn">
          Add contact
        </button>
      </form>
      {contacts.length === 0 ? (
        ''
      ) : (
        <div className="contacts_page-contacts-con">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default ContactForm;

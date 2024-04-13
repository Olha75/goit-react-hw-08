import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number') {
      const numericValue = value.replace(/\D/g, '');
      setNumber(numericValue);
    } else {
      setName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) {
      alert('Введіть ім’я або номер');
      return;
    }

    const normalizedName = name.trim().toLowerCase();
    const normalizedNumber = number.trim();

    // Перевірка на дублікати
    if (contacts.some(contact => contact.name.toLowerCase() === normalizedName || contact.number === normalizedNumber)) {
      alert('Цей контакт вже існує!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.forma} onSubmit={handleSubmit}>
      <div>
        <label className={css.labelForm} htmlFor="name">
          Name
        </label>
        <input
          className={css.inpForm}
          value={name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          required
          placeholder="Введіть ім'я"
        />
        <label className={css.labelForm} htmlFor="number">
          Number
        </label>
        <input
          className={css.inpForm}
          value={number}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          required
          placeholder="Введіть номер"
        />
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;


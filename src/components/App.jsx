import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { selectError, selectFilteredContacts, selectLoading, selectContacts } from '../redux/contactsSlice';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { fetchContacts, addContact, deleteContact } from '../redux/contactsOps';

const App = () => {
  const contacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isDuplicate = ({ name, number }) => {
    const normalizedName = name.trim().toLowerCase();
    const normalizedNumber = number.trim();
    return allContacts.some(
      contact => 
        contact.name.trim().toLowerCase() === normalizedName ||
        contact.number.trim() === normalizedNumber
    );
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      alert('Цей контакт вже існує!');
      return;
    }
    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="blockPhonebook">
      <h1 className="titlePhonebook">Phonebook</h1>
      <div>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <h2 className="titleContacts">Contacts</h2>
      <div className="formContacts">
        <SearchBox />
        {error && <ErrorMessage>Error message</ErrorMessage>}
        {isLoading && <Loader>Loading message</Loader>}
        {contacts.length > 0 ? (
          <ContactList items={contacts} deleteContact={onDeleteContact} />
        ) : (
          <p className="message">У Вас ще немає збережених контактів</p>
        )}
      </div>
    </div>
  );
};

export default App;


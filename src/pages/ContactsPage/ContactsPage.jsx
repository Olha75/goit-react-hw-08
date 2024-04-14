import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PageTitle from "../components/PageTitle/PageTitle";
import ContactList from '../../components/ContactList/ContactList';
// import ContactsEditor from "../components/ContactsEditor/ContactsEditor";
import { selectContacts, selectError, selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import {  addContact, deleteContact } from '../redux/contacts/operations';


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const error = useSelector(selectError); 



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
    <>
      {/* <PageTitle>Контакти</PageTitle>
      <ContactsEditor />
      <div>{isLoading && "Request in progress..."}</div> */}
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
    </>
  );
}


// import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {  selectFilteredContacts } from '../../redux/contactsSlice';
// import { deleteContact } from '../../redux/contactsOps';
import css from './contactList.module.css';



const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

//   return (
//     <ol className={css.allContact}>
//       {contacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ol>
//   );
// };

return (
  <ol className={css.allContact}>
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} />
    ))}
  </ol>
);
};

export default ContactList;


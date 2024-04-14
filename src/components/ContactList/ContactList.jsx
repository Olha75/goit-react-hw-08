// import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';


import css from './contactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
// import { deleteContact } from '../../redux/contacts/operations';



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


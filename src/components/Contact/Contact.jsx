import { useDispatch } from 'react-redux';
import css from './contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact; 

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactsItem}>
      {name} {number}
      <button className={css.btnItem} onClick={handleDelete} type="button">
        X
      </button>
    </li>
  );
};

export default Contact;







// import { useDispatch } from 'react-redux';
// import css from './contact.module.css';
// import { deleteContact } from '../../redux/contactsOps';

// const Contact = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <li className={css.contactsItem}>
//       {name} {number}
//       <button className={css.btnItem} onClick={handleDelete} type="button">
//         X
//       </button>
//     </li>
//   );
// };

// export default Contact;

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

// import { lazy, Suspense, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Layout from "./Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";

// const HomePage = lazy(() => import("../pages/Home"));
// const RegisterPage = lazy(() => import("../pages/Register"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const TasksPage = lazy(() => import("../pages/Tasks"));

// export default function App() {
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <Layout>
//       {isRefreshing ? (
//         <b>Refreshing user, please wait...</b>
//       ) : (
//         <Suspense fallback={null}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route
//               path="/register"
//               element={
//                 <RestrictedRoute
//                   component={<RegisterPage />}
//                   redirectTo="/tasks"
//                 />
//               }
//             />
//             <Route
//               path="/login"
//               element={
//                 <RestrictedRoute
//                   component={<LoginPage />}
//                   redirectTo="/tasks"
//                 />
//               }
//             />
//             <Route
//               path="/tasks"
//               element={
//                 <PrivateRoute component={<TasksPage />} redirectTo="/login" />
//               }
//             />
//           </Routes>
//         </Suspense>
//       )}
//       <Toaster />
//     </Layout>
//   );
// }
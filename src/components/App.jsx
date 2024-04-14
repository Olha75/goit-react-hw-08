import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
// import { selectContacts, selectError, selectFilteredContacts, selectLoading } from '../redux/contacts/selectors';
import Loader from './Loader/Loader';
// import ErrorMessage from './ErrorMessage/ErrorMessage';
// import {  addContact, deleteContact } from '../redux/contacts/operations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));


const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  // const contacts = useSelector(selectFilteredContacts);
  // const allContacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError); 
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  // const isDuplicate = ({ name, number }) => {
  //   const normalizedName = name.trim().toLowerCase();
  //   const normalizedNumber = number.trim();
  //   return allContacts.some(
  //     contact => 
  //       contact.name.trim().toLowerCase() === normalizedName ||
  //       contact.number.trim() === normalizedNumber
  //   );
  // };

  // const onAddContact = data => {
  //   if (isDuplicate(data)) {
  //     alert('Цей контакт вже існує!');
  //     return;
  //   }
  //   const action = addContact(data);
  //   dispatch(action);
  // };

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <Layout>
    {isRefreshing ? (
      <Loader/>
    ) : (
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    )}
    <Toaster />
  </Layout>
  );
};

export default App;

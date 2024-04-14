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

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));


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
              redirectTo="/contacts"
                component={<RegisterPage />}
             
              />
            }
          />
          
          <Route
            path="/login"
            element={
              <RestrictedRoute
                
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />}  />
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




// import { lazy, Suspense, useEffect } from 'react';
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Layout from "./Layout/Layout";
// import { useSelector, useDispatch } from 'react-redux';
// import { refreshUser } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";
// import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import Loader from './Loader/Loader';
// import NotFound from '../pages/NotFoundPage'; // Import NotFoundPage directly

// const HomePage = lazy(() => import('../pages/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));

// const App = () => {
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <Layout>
//       {isRefreshing ? (
//         <Loader/>
//       ) : (
//         <Suspense fallback={null}>
          // <Routes>
          //   <Route path="/" element={<HomePage />} />
          //   <Route path="/register">
          //     <RestrictedRoute redirectTo="/contacts">
          //       <RegisterPage />
          //     </RestrictedRoute>
          //   </Route>
          //   <Route path="/login">
          //     <RestrictedRoute redirectTo="/contacts">
          //       <LoginPage />
          //     </RestrictedRoute>
          //   </Route>
          //   <Route path="/contacts">
          //     <PrivateRoute redirectTo="/login">
          //       <ContactsPage />
          //     </PrivateRoute>
          //   </Route>
          //   <Route path="*" element={<NotFound />} />
          // </Routes>
//         </Suspense>
//       )}
//       <Toaster />
//     </Layout>
//   );
// };

// export default App;



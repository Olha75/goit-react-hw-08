import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";



export const PrivateRoute = ({component: Component, redirectTo = '/',}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};


// import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

// export const PrivateRoute = ({ component: Component, redirectTo = "/", }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Redirect to={redirectTo} /> : <Component />;
// };





// export const PrivateRoute = ({
//   component: Component,
//   redirectTo = "/",
// }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);

//   return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
// };







// const PrivateRoute = ({
//   component: Component,
//   redirectTo = "/login",
// }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   return !isLoggedIn && !isRefreshing ? (
//     <Navigate to={redirectTo} />
//   ) : (
//     Component
//   );
// };

// export default PrivateRoute;
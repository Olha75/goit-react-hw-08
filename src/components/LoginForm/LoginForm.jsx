import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast from 'react-hot-toast';

export default function LoginForm() {
  const dispatch = useDispatch();

  // const handleSubmit = (values, actions) => {
  //   dispatch(logIn(values));
  //   actions.resetForm();
  // };

  const successLoggedIn = ({ user }) => {
    toast.success(`${user.name} your account successfully LoggedIn!`);
  };



  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(successLoggedIn)
      .catch(toast.error('Помилка, спробуйте ще'));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={css.button}  type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
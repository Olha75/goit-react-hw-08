// import { Link } from "react-router-dom";
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
// import css from '../components/StylePages/LoginPage.module.css';

export default function Login() {
  return (
    <div>
      <PageTitle>Авторизуйтесь</PageTitle>
      <LoginForm />

      {/* <p>
        or <Link to="/register">Регістрація</Link>
      </p> */}
    </div>
  );
}
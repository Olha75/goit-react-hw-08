import { Link } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';

export default function Login() {
  return (
    <div>
      <PageTitle>Домашня сторінка</PageTitle>
      <LoginForm />

      <p>
        or <Link to="/register">Регістрація</Link>
      </p>
    </div>
  );
}
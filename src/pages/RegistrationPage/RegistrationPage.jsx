import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css'

export default function Register() {
  return (
    <div className={css.registration}>
      <PageTitle>Регістрація нового аккаунту</PageTitle>
      <RegistrationForm />
    </div>
  );
}
import PageTitle from '../components/PageTitle/PageTitle';
import css from '../components/StylePages/HomePage.module.css';


export default function Home() {
  return (
    <div className={css.homepage}>
      <PageTitle>
        Книга контактів Phonebook{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p className={css.instruc}>Для користування книгою контактів - зареєструйтесь.</p>
      <p className={css.instruc}>Як що ви вже зареєстровані - авторизуйтесь.</p>
    </div>
  );
}

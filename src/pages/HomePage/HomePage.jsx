import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';


export default function Home() {
  return (
    <div className={css.homepage}>
      <PageTitle>
        Книга контактів Phonebook{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>Поки що, цей текст для перевірки</p>
      <p>Тимчасовий текст</p>
    </div>
  );
}

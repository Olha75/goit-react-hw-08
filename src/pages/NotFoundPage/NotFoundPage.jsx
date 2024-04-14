import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
return(
   <div className={css.notfound}>
        <p> Вибачте, такої сторінки не їснує</p>
        <Link className={css.returnhome} to="/">
            <p>Повернутись до головної сторінки</p>
        </Link>
   </div>
)


}
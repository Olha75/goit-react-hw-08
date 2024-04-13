import css from '../ErrorMessage/errorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      Сталася помилка. Будь ласка, перезавантажте сторінку!
    </p>
  );
}


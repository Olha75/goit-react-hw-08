import { useDispatch } from "react-redux";
import css from "./ContactEditor.module.css";
import { addContact } from "../../redux/contacts/operations";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const contact = form.elements.text.value;
    if (contact !== "") {
      dispatch(addContact(contact));
      form.reset();
      return;
    }
    alert("Введіть дані!");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
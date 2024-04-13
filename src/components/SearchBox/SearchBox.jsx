// import { useId } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import css from './searchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
// import { nanoid } from '@reduxjs/toolkit';

export default function SearchBar() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const searchId = nanoid();

  return (
    <div className={css.conteinerFiltr}>
      <label className={css.labelForm} htmlFor="filter">
        Find contacts by name
        <input
          className={css.inpFiltr}
          onChange={e => dispatch(changeFilter(e.target.value))}
          value={value}
          name="filter"
          id={searchId}
          placeholder="Введіть ім'я або номер"
        />
      </label>
    </div>
  );
}



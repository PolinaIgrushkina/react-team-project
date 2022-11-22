import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ModalNav.module.scss';

export default function ModalNav() {
  return (
    <nav className={css.navigation}>
      <div className={css.navigation}>
        <NavLink to="/dairy" className={css.first}>
          Diary
        </NavLink>
        <NavLink to="/calculator" className={css.second}>
          Calculator
        </NavLink>
      </div>
    </nav>
  );
}

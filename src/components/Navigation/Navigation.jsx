import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getToken } from 'redux/Auth/auth-selectors';
import css from './Navigation.module.scss';

export default function Navigation() {
  const token = useSelector(getToken);
  return (
    <>
      {token ? (
        <nav className={css.navigationBackColor}>
          <div className={css.navigation}>
            <NavLink
              to="/dairy"
              className={({ isActive }) =>
                `${css.first} ${isActive ? css.active : ''}`
              }
            >
              Diary
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                `${css.second} ${isActive ? css.active : ''}`
              }
            >
              Calculator
            </NavLink>
          </div>
        </nav>
      ) : (
        <nav className={css.navigation}>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `${css.first} ${isActive ? css.active : ''}`
            }
          >
            Sign in
          </NavLink>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              `${css.second} ${isActive ? css.active : ''}`
            }
          >
            Registration
          </NavLink>
        </nav>
      )}
    </>
  );
}

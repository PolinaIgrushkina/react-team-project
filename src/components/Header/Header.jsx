import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import styles from './Header.module.scss';
import ModalNav from 'components/ModalNav/ModalNav';

export default function Header() {
  const token = useSelector(getToken);
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      {token && <UserInfo clickBurgerMenu={() => setVisibleNav(true)} />}
    </header>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import {selectAuthIsLoggedIn} from '../../redux/auth/authSlice.selectors';
import  Navigation  from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './layout.module.css'


export const Layout = ({ children }) => {

    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
 
  return (
    <div>
      <header className={css.header}>
      <Navigation />
        {isLoggedIn && <UserMenu />} 
      </header>

      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
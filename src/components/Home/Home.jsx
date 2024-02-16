import React from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css'

const HomePagePart = () => {
    return (
        <div className={css.container}>
            <p className={css.title}>Welcome!</p>
            <p className={css.subtitle}>Do you have an account? <Link className={css.link} to="/login">Log in</Link></p>
            <p className={css.subtitle}>Don't have an account? <Link className={css.link} to="/register">Log up</Link></p>
        </div>
    );
};

export default HomePagePart;
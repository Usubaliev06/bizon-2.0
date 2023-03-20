import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.JPG'


const Header = () => {
  return (
    <div className={css.headerWrapper}>

      <header>

        <img src={logo} alt="logo" className={css.logo} />

        <NavLink to='/'>BIZON</NavLink>

        <div className={css.links}>
          <NavLink to='/abouteUs'>O нас</NavLink>
          <NavLink to='/products'>Продукция</NavLink>
          <button>Заказать</button>
          <a href='#footerWrapper'>Контакты</a>
        </div>

      </header>

    </div>
  );
}

export default Header;

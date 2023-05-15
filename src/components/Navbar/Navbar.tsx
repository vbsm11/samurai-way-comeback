import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {SidebarType} from '../../redux/state';

type NavbarPropsType = {
    navbarState: SidebarType
}

export const Navbar: React.FC<NavbarPropsType> = ({navbarState}) => {

    const friendsBar = navbarState.firstFriends.map(f =>
        <div className={s.friend}>
            <div><img src={f.imgUrl}/></div>
            <div>{f.name}</div>
        </div>
    )

  return (
      <nav className={s.nav}>
          <div className={s.item}>
              <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/news' activeClassName={s.active}>News</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
          </div>
          <div className={s.item + ' ' + s.settings}>
              <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
          </div>
          <div className={s.item + ' ' + s.friends}>
              <NavLink to='/settings' activeClassName={s.active}>Friends</NavLink>
              <div>{friendsBar}</div>
          </div>
      </nav>
  )
}
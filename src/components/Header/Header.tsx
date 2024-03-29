import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {UserDataType} from '../../redux/auth-reducer';

type HeaderPropsType = {
    userData: UserDataType,
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://sun1.userapi.com/sun1-13/s/v1/if2/NbJL93ZxY5d6qtEaynW_ba2A3lshp2pfx7pOAOehLmutJsX27QSVMidbHeMz07bC35ir1oCKsaBVb8QogfsY_BE1.jpg?size=1080x1080&quality=95&type=album"
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    props.userData.login
                    : <NavLink to="/login">
                        Login
                    </NavLink>
                }

            </div>
        </header>
    )
}
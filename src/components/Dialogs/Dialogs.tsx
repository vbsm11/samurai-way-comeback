import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Georgiy</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/2'>Quincy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Roman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Alexandr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Ruslan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Goodbye</div>
            </div>
        </div>
    )
}
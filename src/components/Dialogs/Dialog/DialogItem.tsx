import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <div className={s.dialog}>
            <NavLink
                to={`/dialogs/${id}`}
                activeClassName={s.active}
            >
                {name}
            </NavLink>
        </div>
    )
}

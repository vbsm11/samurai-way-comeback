import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
    imgUrl: string
}

export const DialogItem: React.FC<DialogItemPropsType> = ({name, id, imgUrl}) => {
    return (
        <div className={s.dialog}>
            <img src={imgUrl}/>
            <NavLink
                to={`/dialogs/${id}`}
                activeClassName={s.active}
            >
                {name}
            </NavLink>
        </div>
    )
}

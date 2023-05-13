import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.cover}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg"
                     alt="cover"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

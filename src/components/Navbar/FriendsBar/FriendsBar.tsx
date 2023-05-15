import React from 'react';
import s from './FriendsBar.module.css'
import {FriendsType} from '../../../redux/state';


type NavbarPropsType = {
    firstFriends: FriendsType[]
}

export const FriendsBar: React.FC<NavbarPropsType> = ({firstFriends}) => {

    const friendsBar = firstFriends.map(f =>
        <div className={s.friend}>
            <div><img src={f.imgUrl}/></div>
            <div>{f.name}</div>
        </div>
    )

    return (
        <div>{friendsBar}</div>
    )
}
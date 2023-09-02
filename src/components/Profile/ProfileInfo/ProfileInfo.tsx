import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.cover}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg"
                     alt="cover"/>
            </div>
            <div className={s.description}>
                {props.profile?.photos.large && <img src={props.profile?.photos.large} alt="ava"/>}
                ava + description
            </div>
        </div>
    )
}

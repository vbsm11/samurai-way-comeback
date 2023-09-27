import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user_photo.png';
import {ProfileStatus} from './ProfileStatus';
import {ProfilePropsType} from '../Profile';


export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.cover}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Spartak_Cup_of_Russia_2022_%282%29.jpg"
                     alt="cover"/>
            </div>
            <div className={s.description}>
                {profile?.photos.large
                    ? <img src={profile?.photos.large} alt="ava"/>
                    : <img src={userPhoto} alt="basic ava"/>
                }
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

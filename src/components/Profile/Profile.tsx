import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
}

export const Profile:React.FC<ProfilePropsType> = ({profileState}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts}/>
        </div>
    )
}
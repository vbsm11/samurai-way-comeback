import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
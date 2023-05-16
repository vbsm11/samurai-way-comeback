import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: (postMessage: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({profileState}, addPost) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts} addPost={addPost}/>
        </div>
    )
}
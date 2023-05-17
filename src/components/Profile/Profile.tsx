import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile:React.FC<ProfilePropsType> = ({profileState, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profileState.posts} newPostText={profileState.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}
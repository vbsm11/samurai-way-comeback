import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType} from '../../redux/redux-store';
import {ProfilePageType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile:React.FC<ProfilePropsType> = ({profileState, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={profileState.posts}
                newPostText={profileState.newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}
import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    store: StoreType
}

export const Profile:React.FC<ProfilePropsType> = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
            />
        </div>
    )
}
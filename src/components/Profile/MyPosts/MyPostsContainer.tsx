import React from 'react';
import {StoreType} from '../../../redux/redux-store';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {

    const state = store.getState()


    const updateNewPostText = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    return <MyPosts
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
    />
}
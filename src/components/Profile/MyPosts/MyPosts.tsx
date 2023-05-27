import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, PostsType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    const addPost = () => {
        dispatch(addPostAC())
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        placeholder="Whats new?"
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
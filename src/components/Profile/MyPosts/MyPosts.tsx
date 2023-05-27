import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, dispatch}) => {

    const postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostTextAC(newPostElement.current.value))
        }
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
                        ref={newPostElement}
                        value={newPostText}
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
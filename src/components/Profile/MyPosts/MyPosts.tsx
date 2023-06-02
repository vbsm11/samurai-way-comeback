import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, updateNewPostText, addPost}) => {

    const postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
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
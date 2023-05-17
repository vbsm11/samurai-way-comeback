import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {

    const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = () => {
        if (newPostElement.current) {
            updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
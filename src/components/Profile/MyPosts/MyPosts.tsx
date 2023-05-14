import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const postsData: PostsDataType[] = [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: 'It is my first post', likesCount: 20}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}
import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Guillermo_Abascal.jpg/640px-Guillermo_Abascal.jpg"
                alt="avatar"/>
            {message}
            <div>
                <span>{likesCount} likes</span>
            </div>
        </div>

    )
}
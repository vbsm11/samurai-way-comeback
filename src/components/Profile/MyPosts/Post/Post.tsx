import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Guillermo_Abascal.jpg/640px-Guillermo_Abascal.jpg"
                alt="avatar"/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>

    )
}
import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

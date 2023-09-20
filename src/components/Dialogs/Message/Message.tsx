import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    message: string
    isMy: boolean
}

export const Message: React.FC<MessagePropsType> = ({message, isMy}) => {

    const img = isMy ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Guillermo_Abascal.jpg/640px-Guillermo_Abascal.jpg' : 'https://photobooth.cdn.sports.ru/preset/tags/3/0f/30307db7744fab81b692c9d06c5c2.png'

    return isMy ?
        <div className={`${s.message} ${s.outgoing}`}>
            {message}
            <img src={img}/>
        </div>
        : <div className={`${s.message} ${s.incoming}`}>
            <img src={img}/>
            {message}
        </div>
}

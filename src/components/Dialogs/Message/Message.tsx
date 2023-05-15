import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    message: string
    isMy: boolean
}

export const Message: React.FC<MessagePropsType> = ({message, isMy}) => {

    const img = isMy ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Guillermo_Abascal.jpg/640px-Guillermo_Abascal.jpg' : 'https://pictures.sports.ru/NkyqqQSzzxQxqdz2ZOkG_Xw2tvjqW58GyH-E9nM_f00/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9nZW9yZ2lfZHpoaWtpeWEucG5n.png'

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

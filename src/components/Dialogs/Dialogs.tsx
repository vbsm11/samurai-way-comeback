import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../index';

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

type DialogsDataType = {
    id: string
    name: string
}

type MessagesDataType = {
    id: string
    message: string
}



export const Dialogs = () => {

    const dialogs: DialogsDataType[] = [
        {id: '1', name: 'Georgiy'},
        {id: '2', name: 'Quincy'},
        {id: '3', name: 'Roman'},
        {id: '4', name: 'Alexandr'},
        {id: '5', name: 'Ruslan'},
    ]

    const messages: MessagesDataType[] = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Goodbye'},
    ]

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
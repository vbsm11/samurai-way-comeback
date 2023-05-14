import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Dialog/DialogItem';
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

    const dialogsData: DialogsDataType[] = [
        {id: '1', name: 'Georgiy'},
        {id: '2', name: 'Quincy'},
        {id: '3', name: 'Roman'},
        {id: '4', name: 'Alexandr'},
        {id: '5', name: 'Ruslan'},
    ]

    const messagesData: MessagesDataType[] = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Goodbye'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}
import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Dialog/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Georgiy" id="1"/>
                <DialogItem name="Quincy" id="2"/>
                <DialogItem name="Roman" id="3"/>
                <DialogItem name="Alexandr" id="4"/>
                <DialogItem name="Ruslan" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Goodbye'/>
            </div>
        </div>
    )
}
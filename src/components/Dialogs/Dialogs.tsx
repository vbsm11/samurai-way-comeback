import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs, messages, newMessageText,updateNewMessageText, sendMessage}) => {

    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} imgUrl={d.imgUrl}/>)

    const messagesElements = messages.map(m => <Message key={m.id} message={m.message} isMy={m.isMy}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea
                        value={newMessageText}
                        placeholder="Enter your message"
                        onChange={onChangeHandler}
                    />
                    <button onClick={sendMessage}>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}
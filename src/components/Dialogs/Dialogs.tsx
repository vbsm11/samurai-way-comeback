import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsState: DialogsPageType
    sentMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsState, sentMessage, updateNewMessageText}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)

    const messagesElements = dialogsState.messages.map(m => <Message message={m.message} isMy={m.isMy}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        if (newMessageElement.current) {
            updateNewMessageText(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <textarea ref={newMessageElement} value={dialogsState.newMessageText} onChange={onChangeHandler}/>
                    <button onClick={sentMessage}>Sent message</button>
                </div>
            </div>

        </div>
    )
}
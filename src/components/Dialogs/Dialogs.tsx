import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionType, DialogsPageType} from '../../redux/store';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsState, dispatch}) => {

    const dialogsElements = dialogsState.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                      imgUrl={d.imgUrl}/>)

    const messagesElements = dialogsState.messages.map(m => <Message key={m.id} message={m.message} isMy={m.isMy}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const sendMessage = () => {
        dispatch(sendMessageAC())
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
                        value={dialogsState.newMessageText}
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
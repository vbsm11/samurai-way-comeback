import React from 'react';
import {StoreType} from '../../redux/redux-store';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

    const state = store.getState().dialogsPage

    const updateNewMessageText = (text: string) => {
        store.dispatch(updateNewMessageTextAC(text))
    }

    const sendMessage = () => {
        store.dispatch(sendMessageAC())
    }

    return <Dialogs
        dialogs={state.dialogs}
        messages={state.messages}
        newMessageText={state.newMessageText}
        updateNewMessageText={updateNewMessageText}
        sendMessage={sendMessage}
    />
}
import React from 'react';
import {RootStateType} from '../../redux/redux-store';
import {DialogsType, MessagesType, sendMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
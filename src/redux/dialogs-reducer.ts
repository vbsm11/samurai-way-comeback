import {ActionType, DialogsPageType, MessagesType} from './store';

type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

type SentMessageAT = {
    type: 'SEND MESSAGE'
}

export type DialogsActionType = UpdateNewMessageTextAT | SentMessageAT

export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state
        case 'SEND MESSAGE':
            const newMessage: MessagesType = {id: '8', message: state.newMessageText, isMy: true}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextAT => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText
})

export const sendMessageAC = (): SentMessageAT => ({
    type: 'SEND MESSAGE'
})
import {ActionType, DialogsPageType, MessagesType} from './state';

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
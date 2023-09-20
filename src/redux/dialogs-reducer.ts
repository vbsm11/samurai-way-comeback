import {ActionType} from './redux-store';

export type DialogsType = {
    id: string
    name: string
    imgUrl: string
}

export type MessagesType = {
    id: string
    message: string
    isMy: boolean
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

type SentMessageAT = {
    type: 'SEND MESSAGE'
}

export type DialogsActionType = UpdateNewMessageTextAT | SentMessageAT

const initialState: DialogsPageType = {
    dialogs: [
        {
            id: '1',
            name: 'Georgiy',
            imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/3/0f/30307db7744fab81b692c9d06c5c2.png'
        },
        {
            id: '2',
            name: 'Quincy',
            imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/e/bc/ccdcf399f4b07bb1f82f57c70ae3d.png'
        },
        {
            id: '3',
            name: 'Roman',
            imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/c/75/dc582a330418694ed5f5a1e0fe1fe.png'
        },
        {
            id: '4',
            name: 'Alexandr',
            imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/b/24/9bd2e95c945279d3428cbf6171f00.png'
        },
        {
            id: '5',
            name: 'Ruslan',
            imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/f/d0/047ca6a904eb1b021d6067c7ce27d.png'
        },
    ],
    messages: [
        {id: '1', message: 'Hi', isMy: true},
        {id: '2', message: 'Hello', isMy: false},
        {id: '4', message: 'How are you?', isMy: true},
        {id: '5', message: 'Good', isMy: false},
        {id: '6', message: 'And you?', isMy: false},
        {id: '7', message: 'I am nice', isMy: true},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newText}
        case 'SEND MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: '8', message: state.newMessageText, isMy: true}
                ],
                newMessageText: ''
            }
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
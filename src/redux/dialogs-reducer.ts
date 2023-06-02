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
            imgUrl: 'https://pictures.sports.ru/NkyqqQSzzxQxqdz2ZOkG_Xw2tvjqW58GyH-E9nM_f00/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9nZW9yZ2lfZHpoaWtpeWEucG5n.png'
        },
        {
            id: '2',
            name: 'Quincy',
            imgUrl: 'https://pictures.sports.ru/nqCrRC97O7ntFiQu0HuWC68cr2GPLkndIvflv8vwIXU/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9xdWluY3lfcHJvbWVzLnBuZw.png'
        },
        {
            id: '3',
            name: 'Roman',
            imgUrl: 'https://pictures.sports.ru/PJnwDEG50OgJKHtHle2aSqObd02fXZD-OuvtP_uzsfo/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9yb21hbl96b2JuaW4ucG5n.png'
        },
        {
            id: '4',
            name: 'Alexandr',
            imgUrl: 'https://pictures.sports.ru/7ZW3zTTA9MLECjntiQ9Uyth_aqt7qYImP0n3v6PJdWQ/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9hbGVrc2FuZHJfc29ib2xldi5wbmc.png'
        },
        {
            id: '5',
            name: 'Ruslan',
            imgUrl: 'https://pictures.sports.ru/WRxHjaP5D-ETlZvO6ucbHDjpcnYYZz70eb2sXbo7lm4/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9ydXNsYW5fbGl0dmlub3ZfMjAwMTA4MTgucG5n.png'
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
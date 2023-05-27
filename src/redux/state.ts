export type DialogsType = {
    id: string
    name: string
    imgUrl: string
}

export type FriendsType = {
    id: string
    name: string
    imgUrl: string
}

export type MessagesType = {
    id: string
    message: string
    isMy: boolean
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type SidebarType = {
    firstFriends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type AddPostAT = {
    type: 'ADD-POST'
}

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type SentMessageAT = {
    type: 'SENT MESSAGE'
}

type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

export type ActionType = AddPostAT | UpdateNewPostTextAT | SentMessageAT | UpdateNewMessageTextAT

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: 15},
                {id: '2', message: 'It is my first post', likesCount: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            firstFriends: [
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
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostsType = {id: '3', message: this._state.profilePage.newPostText, likesCount: 0}
                this._state.profilePage.posts.unshift(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break
            case 'SENT MESSAGE':
                const newMessage: MessagesType = {id: '8', message: this._state.dialogsPage.newMessageText, isMy: true}
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()
                break
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newText
                this._callSubscriber()
                break
        }
    }
}

export const addPostAC = (): AddPostAT => ({
    type: 'ADD-POST',
})

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextAT => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
})

export const sentMessageAC = (): SentMessageAT => ({
    type: 'SENT MESSAGE'
})

export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextAT => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText
})
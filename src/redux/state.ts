export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type SidebarType = {

}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 15},
            {id: '2', message: 'It is my first post', likesCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Georgiy'},
            {id: '2', name: 'Quincy'},
            {id: '3', name: 'Roman'},
            {id: '4', name: 'Alexandr'},
            {id: '5', name: 'Ruslan'},
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Goodbye'},
        ]
    },
    sidebar: {}
}
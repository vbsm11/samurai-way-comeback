import {ActionType} from './redux-store';

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddPostAT = {
    type: 'ADD-POST'
}

export type ProfileActionType = UpdateNewPostTextAT | AddPostAT

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: 'It is my first post', likesCount: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        case 'ADD-POST':
            const newPost: PostsType = {id: '3', message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextAT => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
})

export const addPostAC = (): AddPostAT => ({
    type: 'ADD-POST',
})
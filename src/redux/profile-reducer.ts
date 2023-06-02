import {ActionType, PostsType, ProfilePageType} from './store';

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddPostAT = {
    type: 'ADD-POST'
}

export type ProfileActionType = UpdateNewPostTextAT | AddPostAT

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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
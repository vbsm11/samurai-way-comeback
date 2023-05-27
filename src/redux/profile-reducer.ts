import {ActionType, PostsType, ProfilePageType} from './state';

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
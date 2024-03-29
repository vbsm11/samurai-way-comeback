import {ActionType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null,
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
    status: string
}

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddPostAT = {
    type: 'ADD-POST'
}

type SetUserProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

type SetStatusAT = {
    type: 'SET-STATUS',
    status: string
}

export type ProfileActionType = UpdateNewPostTextAT | AddPostAT | SetUserProfileAT | SetStatusAT

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likesCount: 15},
        {id: '2', message: 'It is my first post', likesCount: 20}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'ADD-POST':
            return {
                ...state,
                posts: [
                    {id: '3', message: state.newPostText, likesCount: 0},
                    ...state.posts
                ],
                newPostText: ''
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
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

export const setUserProfileAC = (profile: ProfileType): SetUserProfileAT => ({
    type: 'SET-USER-PROFILE',
    profile
})

const setStatusAC = (status: string): SetStatusAT => ({
    type: 'SET-STATUS',
    status
})


export const setUserProfile = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(id)
            .then(data => dispatch(setUserProfileAC(data)))
    }
}

export const setStatus = (id: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(id)
            .then(data => dispatch(setStatusAC(data)))
    }
}

export const updateStatus = (newStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(newStatus)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(newStatus))
                }
            })
    }
}
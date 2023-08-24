import {ActionType} from './redux-store';

export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": string
    "photos": {
        "small": string | null
        "large": string | null
    },
    "status": string | null
    "followed": boolean
}

export type UsersStateType = {
    users: UserType[]
}

type FollowAT = {
    type: 'FOLLOW'
    userId: number
}

type UnfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}

type SetUsersAT = {
    type: 'SET-USERS'
    users: UserType[]
}

export type UsersActionType = FollowAT | UnfollowAT | SetUsersAT

const initialState: UsersStateType = {
    users: []
}

export const usersReducer = (state:UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: true}: u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: false}: u)}
        case 'SET-USERS':
            return {...state, users: [...state.users,...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number): FollowAT => ({
    type: 'FOLLOW',
    userId
})

export const unfollowAC = (userId: number): UnfollowAT => ({
    type: 'UNFOLLOW',
    userId
})

export const setUsersAc = (users: UserType[]): SetUsersAT => ({
    type: 'SET-USERS',
    users
})
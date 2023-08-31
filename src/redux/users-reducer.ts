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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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

type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

type SetTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}

type ToggleIsFetchingAT = {
    type: 'TOGGLE-IS-FETCHING'
    newIsFetching: boolean
}

export type UsersActionType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state:UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: true}: u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId? {...u, followed: false}: u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.newIsFetching}
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

export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
})

export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountAT => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount
})

export const toggleIsFetchingAC= (newIsFetching: boolean): ToggleIsFetchingAT => ({
    type: 'TOGGLE-IS-FETCHING',
    newIsFetching
})
import {ActionType} from './redux-store';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type UserType = {
    'name': string
    'id': number
    'uniqueUrlName': string
    'photos': {
        'small': string | null
        'large': string | null
    },
    'status': string | null
    'followed': boolean
}

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
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

type ToggleIsFollowingProgressAT = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    newIsFollowingInProgress: boolean,
    userId: number
}

export type UsersActionType =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | ToggleIsFollowingProgressAT

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.newIsFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                isFollowingInProgress: action.newIsFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number): FollowAT => ({
    type: 'FOLLOW',
    userId
})

export const unfollowSuccess = (userId: number): UnfollowAT => ({
    type: 'UNFOLLOW',
    userId
})

export const setUsers = (users: UserType[]): SetUsersAT => ({
    type: 'SET-USERS',
    users
})

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
})

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountAT => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount
})

export const toggleIsFetching = (newIsFetching: boolean): ToggleIsFetchingAT => ({
    type: 'TOGGLE-IS-FETCHING',
    newIsFetching
})

export const toggleIsFollowingProgress = (newIsFollowingInProgress: boolean, userId: number): ToggleIsFollowingProgressAT => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    newIsFollowingInProgress,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.followRequest(id)
            .then(data => {
                if (data.resultCode) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleIsFollowingProgress(false, id));
            })
    }
}

export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.unfollowRequest(id)
            .then(data => {
                if (data.resultCode) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleIsFollowingProgress(false, id));
            })
    }
}
import {ActionType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
}

type AuthStateType = {
    userData: UserDataType
    isAuth: boolean
    isFetching: boolean
}

type SetUserDataAT = {
    type: 'SET-USER-DATA'
    userData: UserDataType
    isAuth: boolean
}



export type AuthActionType = SetUserDataAT

const initialState: AuthStateType = {
    userData: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
    isFetching: false
}

export const authReducer = (state:AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setUserData = (userData: UserDataType): SetUserDataAT => ({
    type: 'SET-USER-DATA',
    userData,
    isAuth: true
})

export const auth = () => {
    return (dispatch: Dispatch) => {
        authAPI.auth()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(data.data))
                }
            })
    }
}


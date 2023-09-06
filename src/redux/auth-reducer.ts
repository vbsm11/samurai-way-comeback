import {ActionType} from './redux-store';

type UserDataType = {
    userId: number | null
    email: string | null
    login: string | null
}

export type AuthStateType = {
    userData: UserDataType
    isFetching: boolean
}

type SetUserDataAT = {
    type: 'SET-USER-DATA'
    userData: UserDataType
}



export type AuthActionType = SetUserDataAT

const initialState: AuthStateType = {
    userData: {
        userId: null,
        email: null,
        login: null,
    },
    isFetching: false
}

export const authReducer = (state:AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}

export const setUserData = (userData: UserDataType): SetUserDataAT => ({
    type: 'SET-USER-DATA',
    userData
})


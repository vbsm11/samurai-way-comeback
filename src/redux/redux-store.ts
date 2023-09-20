import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {SidebarActionType, sidebarReducer} from './sidebar-reducer';
import {UsersActionType, usersReducer} from './users-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'

export type ActionType = ProfileActionType | DialogsActionType | SidebarActionType | UsersActionType | AuthActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store

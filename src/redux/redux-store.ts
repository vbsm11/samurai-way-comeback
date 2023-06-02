import {combineReducers, createStore} from 'redux';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {SidebarActionType, sidebarReducer} from './sidebar-reducer-reducer';

export type ActionType = ProfileActionType | DialogsActionType | SidebarActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

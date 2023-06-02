import {combineReducers, createStore} from 'redux';
import {ProfileActionType, ProfilePageType, profileReducer} from './profile-reducer';
import {DialogsActionType, DialogsPageType, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer, SidebarType} from './sidebar-reducer-reducer';

export type ActionType = ProfileActionType | DialogsActionType

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)
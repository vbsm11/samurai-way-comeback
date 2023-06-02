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

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void

    getState: () => RootStateType
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionType) => void
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store: StoreType = createStore(reducers)
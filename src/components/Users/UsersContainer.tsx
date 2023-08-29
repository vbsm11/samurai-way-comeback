import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {followAC, setUsersAc, unfollowAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAc(users))
        }
    }
}

export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
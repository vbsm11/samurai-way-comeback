import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


export class UsersApiComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null
                }
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    IsFollowingInProgress={this.props.isFollowingInProgress}

                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />

            </>)

    }
}

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (newIsFetching: boolean) => void
    toggleIsFollowingProgress: (newIsFollowingInProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress
})


export type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(
    mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsers: getUsersThunkCreator
    })(UsersApiComponent)
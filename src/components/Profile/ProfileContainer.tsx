import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setStatus, setUserProfile, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 25925
        }
        this.props.setUserProfile(userId)
        this.props.setStatus(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}
type MapDispatchToPropsType = {
    setUserProfile: (id: number) => void
    setStatus: (id: number) => void
    updateStatus: (newStatus: string) => void
}

type PathParamsType = {
    userId: string
}

type MapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapToPropsType


let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, setStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
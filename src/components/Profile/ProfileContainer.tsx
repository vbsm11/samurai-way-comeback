import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';

class ProfileApiComponent extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId= +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (id: number) => void
}

type PathParamsType = {
    userId: string
}

type MapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapToPropsType


let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const ProfileWithUrlData = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWithUrlData)
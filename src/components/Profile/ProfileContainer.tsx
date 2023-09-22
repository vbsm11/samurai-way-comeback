import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileApiComponent extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId= +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
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
})

const ProfileWithUrlData = withRouter(ProfileApiComponent)

export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {setUserProfile})(ProfileWithUrlData))
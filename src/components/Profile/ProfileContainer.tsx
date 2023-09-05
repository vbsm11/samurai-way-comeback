import React from 'react';
import {Profile} from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from '../../redux/redux-store';

class ProfileApiComponent extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.default('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

type MapToPropsType = MapDispatchToPropsType & MapStateToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapToPropsType


let mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const ProfileWithUrlData = withRouter(ProfileApiComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWithUrlData)
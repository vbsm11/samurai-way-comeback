import React from 'react';
import {Profile} from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {ProfilePageType, ProfileType, setUserProfile} from '../../redux/profile-reducer';

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
type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

let mapStateToProps = (state: ProfilePageType): MapStateToPropsType => ({
    profile: state.profile
})

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiComponent)
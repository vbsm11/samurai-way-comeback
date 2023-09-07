import React from 'react';
import {Header} from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {setUserData, UserDataType} from '../../redux/auth-reducer';

class HeaderApiComponent extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.default('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                    console.log(this.props)
                }
            })
    }

    render() {
      return (
          <Header userData={this.props.userData} isAuth={this.props.isAuth}/>
      )
  }
}

type MapStateToPropsType = {
    userData: UserDataType
    isAuth: boolean
    isFetching: boolean
}

type HeaderContainerPropsType = MapStateToPropsType & {
    setUserData: (userData: UserDataType) => void
}


const mapStateToProps = (state: RootStateType) => ({
    userData: state.auth.userData,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching
})

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderApiComponent)
import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {auth, UserDataType} from '../../redux/auth-reducer';

class HeaderApiComponent extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.auth()
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
    auth: () => void
}


const mapStateToProps = (state: RootStateType) => ({
    userData: state.auth.userData,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching
})

export const HeaderContainer = connect(mapStateToProps, {auth})(HeaderApiComponent)
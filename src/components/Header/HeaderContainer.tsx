import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {setUserData, UserDataType} from '../../redux/auth-reducer';
import {auth} from '../../api/api';

class HeaderApiComponent extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        auth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
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
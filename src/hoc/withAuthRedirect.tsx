import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootStateType} from '../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
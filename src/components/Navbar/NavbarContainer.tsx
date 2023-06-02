import React from 'react';
import {SidebarType} from '../../redux/sidebar-reducer';
import {RootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Navbar} from './Navbar';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    navbarState: SidebarType
}

type MapDispatchToPropsType = {

}

export type NavbarPropsType = MapStateToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        navbarState: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

    }
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
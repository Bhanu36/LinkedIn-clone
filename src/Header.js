import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';


function Header() {

    const dispatch = useDispatch()

    const logOutApp = () => {
        console.log("logout-clicked")
        dispatch(logout())
        auth.signOut()
    };
    
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-c1d00.appspot.com/o/linkedIn.png?alt=media&token=c1e290a2-334b-43aa-b5f5-963f66c27fe0"
                    alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption
                    onclick={logOutApp}
                    avatar="https://firebasestorage.googleapis.com/v0/b/linkedinclone-c1d00.appspot.com/o/JNV.png?alt=media&token=ada41d3d-4a07-42ad-8359-4cd54fa4eab1"
                    title="me"
                />

            </div>
        </div>
    )
}

export default Header

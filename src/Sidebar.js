import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser)


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-c1d00.appspot.com/o/Backgrounds_in_CSS.jpg?alt=media&token=5bc6bf5d-3550-4516-b091-ab9854194976" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"> 
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,345</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,999</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('software developer')}
                {recentItem('design')}
                {recentItem('problem solving')}
                {recentItem('AmanVerma')}
                {recentItem('ManishMalik')}
                {recentItem('Bhanu')}
                {recentItem('Jobs')}
                {recentItem('deveoper')}
                {recentItem('opportunities')}

            </div>
        </div>
    )
}

export default Sidebar

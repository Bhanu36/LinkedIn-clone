import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import './HeaderOption.css'
import { logout, selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title,onclick }) {
    const user = useSelector(selectUser)

    return (
        (<div onClick ={onclick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar &&
                <Avatar className='headerOption__icon' src={user ?.photoUrl}> 
                {user ?. email[0]}
                </Avatar>
            }
            <h3 className='headerOption__title'>{title}</h3>
        </div>)
    )
}

export default HeaderOption

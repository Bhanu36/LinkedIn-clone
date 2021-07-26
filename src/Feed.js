import React, { useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';


function Feed() {

    const [posts, setPosts] = useState([])

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" text="" />
                        <button type='submit'>
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon}
                        title='photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon}
                        title='photo' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon}
                        title='photo' color="#C0cBCD" />
                    <InputOption Icon={CalendarViewDayIcon}
                        title='photo' color="#7FC15E" />
                </div>
            </div>
            {/* postsLIst */}
            {
                posts.map(post => <Post />)
            }
            <Post name="Bhanu" description='this is a test'
                message="react APP" />
        </div>
    )
}

export default Feed

import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';


function Feed() {

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timeStamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                ))
                )
            })
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Bhanu',
            description: 'test description',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} placeholder='write your feed here' type="text" text="" />
                        <button onClick={sendPost} type='submit'>
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
                posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
            }
        </div>
    )
}

export default Feed

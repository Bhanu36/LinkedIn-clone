import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import "./Login.css"


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch()
    
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                console.log("userAuth-login", userAuth)
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            }).catch((err) => alert(err.message))
    }

    const register = () => {
        if (!name) {
            return alert("please enter fullName")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    }).then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic
                            }))
                    })
            }).catch(err => {
                alert(err.message)
            })
    }

    return (
        <div className="login">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-c1d00.appspot.com/o/720096_company_identity_linkedin_logo_icon.svg?alt=media&token=41915827-3ee0-4f27-bd47-4982970b3b1e" alt="" />

            <form action="">
                <input type="text" value={name} onChange={e => setName(e.target.value)} name="" placeholder="fullName" />
                <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="proPicUrl (optional)" name="" />
                <input type="text" name="" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" placeholder='password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member
                <span className='login__register' onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login

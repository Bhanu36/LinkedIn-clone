import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is loggedIN
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //loggedOUt
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* AppBody */}
      {!user ? (<Login />) : (<div className="app__body">
        <Sidebar />

        <Feed />
        {/* widgets */}
      </div>
      )}
    </div>
  );
}

export default App;

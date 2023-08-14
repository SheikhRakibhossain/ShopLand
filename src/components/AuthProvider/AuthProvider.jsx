import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)

    }

    //observer creation with return observation function
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("Current user login", currentUser);
            setUser(currentUser);
            setLoading(false);
        
        })
        return () =>{
            unsubscribe()
        }
    }, [])

    const logOut =()=>{
        return signOut(auth)
    }
    const authInfo = {
        loading,
        user,
        createUser,
        logIn,
        googleLogin,
        logOut
    }

    return (
       
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;
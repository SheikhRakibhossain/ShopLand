import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //observer creation with return observation function
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("Current user login", currentUser);
            setUser(currentUser);
        
        })
        return () =>{
            unsubscribe()
        }
    }, [])

    const logOut =()=>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut
    }

    return (
       
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] =useState({})
    const [loader , setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email , password);
    }
    
    const loginUser=(email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email , password);
    }

    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =() =>{
        setLoader(true)
        return signOut(auth)
       
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(LoggedInUser) =>{
            console.log( 'LOgin user observer',LoggedInUser)
            setUser(LoggedInUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])





    const authInfo = { 
        user,
        loader,
        createUser,
        loginUser,
        googleSignIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import axios from "axios";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const auth = getAuth(app);


// eslint-disable-next-line no-unused-vars, react/prop-types
const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(loading, user)

    const gooleProvider = new GoogleAuthProvider();


    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gooleLoagin = () => {
        setLoading(true)
        return signInWithPopup(auth, gooleProvider);
    };


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        gooleLoagin,
        loading,
        updateUserProfile
    }


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            console.log("state captured", currentUser?.email)
            if(currentUser?.email){
                const user = { email: currentUser.email};
                axios.post("https://assignment-11-larning-language-server.vercel.app/jwt",user,{withCredentials:true})
                .then((res) => {
                    console.log("login token",res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post("https://assignment-11-larning-language-server.vercel.app/logout",{},{
                    withCredentials:true
                })
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false)
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [user])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { Button, TextField } from '@mui/material'
import { FcGoogle } from "react-icons/fc"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './Firebase';
// import React from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("Google login success:", user);
                navigate("/home")
            })
            .catch((error) => {
                console.error("Google login error:", error);
            });
    };


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <span style={{fontWeight:"bold", fontSize:32}}>
                    Login With Google Account!
                </span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <Button style={{ width: "100%" }} variant="contained">Login</Button>
                </div>
                <span>Or Login With?</span>
                <div style={{
                    cursor: 'pointer'
                }} onClick={handleGoogleLogin}
                >
                    <FcGoogle size={30} />
                </div>
            </div>
        </>
    )
}

export default Login

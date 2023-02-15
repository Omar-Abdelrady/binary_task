"use client"
import {Box} from "@mui/system";
import {Alert, TextField} from "@mui/material";
import ButtonComponent from "../shared/ButtonComponent"
import axios from "axios";
import {Router} from "next/router";
import {NextResponse} from "next/server";
import {router} from "next/client";
import {redirect} from "next/navigation";
export default function loginForm(){
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payloadData = {
            email: event.target.email?.value,
            password: event.target.password?.value
        }
        axios({
                url: "api/login",
                method: "POST",
                data: payloadData
            }).then(response => {
            localStorage.setItem("token",response.data.accessToken)
            window.location.href = '/'
        }).catch(error => {
            if (error.response.status==403) window.location.href = '/verify-email'
            window.alert(error.response.data.message)
        })
    }
    ;
    return (
        <>
            <form action="post" onSubmit={handleSubmit} className="" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box style={{ width: '100%'}}>
                    <TextField margin="normal" required name="email" style={{ width: '100%'}} label="Email Address" variant="outlined" />
                    <TextField
                        margin="normal"
                        required
                        type="password"
                        name="password"
                        style={{ width: '100%'}}
                        label="Password"
                        variant="outlined" />
                    <ButtonComponent bg={'#eb5b2d'} type={'submit'} title={'submit'} />
                </Box>
            </form>
        </>
    )
}

function checkToken() {
    throw new Error("Function not implemented.");
}

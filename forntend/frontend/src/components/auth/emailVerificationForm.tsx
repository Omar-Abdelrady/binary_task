"use client"
import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import ButtonComponent from "../shared/ButtonComponent"
import axios from "axios";
import {useState} from "react";

interface EmailVerificationCode {
    verificationCode: number;
}
export default function EmailVerificationForm(){
    const [emailVerificationCode, setEmailVerificationCode] = useState<EmailVerificationCode>()

    const handleField = (e: any) => {
        setEmailVerificationCode({
            verificationCode: e.target.value
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios({
            url: "api/verifyEmail",
            method: "POST",
            data: emailVerificationCode
        }).then(response => {
            window.location.href = '/'
        }).catch(error => {
            window.alert(error.response.data.message)
        })
    }

    return (
        <>
            <form action="" onSubmit={handleFormSubmit}  className="" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box style={{ width: '100%'}}>
                    <TextField margin="normal" type="number" onChange={handleField} required name="verificationCode" style={{ width: '100%'}} label="Verification code" variant="outlined" />
                    <ButtonComponent bg={'#eb5b2d'} type={'submit'} title={'Verify'} />
                </Box>
            </form>
        </>
    )
}

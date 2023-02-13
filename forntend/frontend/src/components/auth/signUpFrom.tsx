"use client"
import {Box} from "@mui/system";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton, Input,
    InputAdornment,
    InputLabel,
    TextField
} from "@mui/material";
import ButtonComponent from "@/components/shared/ButtonComponent";
import Link from "next/link";
import axios from "axios";
import {router} from "next/client";
import React from "react";

export default function SignUpForm() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payloadData = {
            first_name: event.target.first_name?.value,
            last_name: event.target.last_name?.value,
            email: event.target.email?.value,
            password: event.target.password?.value
        }
        axios({
            url: "api/signup",
            method: "POST",
            data: payloadData,
            "headers":{
                "Content-Type": "application/json"
            }
        }).then(response => {
            window.alert(response.data.message)
            window.location.href = '/login'
        }).catch(error => {
            window.alert(error.response.data.message)
        })
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Box style={{width: '100%'}}>
                    <TextField name="first_name" margin="normal" required style={{width: '100%'}} label="First name" variant="outlined"/>
                    <TextField name="last_name" margin="normal" required style={{width: '100%'}} label="Last name" variant="outlined"/>
                    <TextField name="email" margin="normal" type="email" required style={{width: '100%'}} label="Email Address" variant="outlined"/>
                    <TextField
                        name="password"
                        margin="normal"
                        type="password"
                        style={{width: '100%'}}
                        label="Password"
                        required
                        variant="outlined"/>
                    <FormGroup style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <FormControlLabel style={{marginRight: '5px', color: 'rgb(101, 116, 139)'}} control={<Checkbox required />} label={ "I have read the " }/>
                        <Link className={'link'} href={'/'}> Terms and Conditions </Link>
                    </FormGroup>
                    <ButtonComponent bg={'#eb5b2d'} type={'submit'} title={'submit'}/>
                </Box>
            </form>
        </>
    )
}
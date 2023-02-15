import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import ButtonComponent from "@/components/shared/ButtonComponent";
import {useState} from "react";
import axios from "axios";

export default function ResetPasswordFrom(){

    const [password, setPassword] = useState(String)
    const [newPassword, setNewPassword] = useState(String)


    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        axios({
            url: "api/resetPassword",
            method: "POST",
            data: {
                password,
                newPassword
            },
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => {
            window.location.href = '/'
        }).catch(error => {
            window.alert(error.response.data.message)
        })
    }

    return (
        <>
            <form action="post" onSubmit={handleFormSubmit} className="" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box style={{ width: '100%'}}>
                    <TextField margin="normal" onChange={ e => setPassword(e.target.value)  } type="text" required name="password" style={{ width: '100%'}} label="old password" variant="outlined" />
                    <TextField
                        type="text"
                        onChange={ e => setNewPassword(e.target.value)  }
                        margin="normal"
                        required
                        name="newPassword"
                        style={{ width: '100%'}}
                        label="new password"
                        variant="outlined" />
                    <ButtonComponent bg={'#eb5b2d'} type={'submit'} title={'submit'} />
                </Box>
            </form>
        </>
    )

}
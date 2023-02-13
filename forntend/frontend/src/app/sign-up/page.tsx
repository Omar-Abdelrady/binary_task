"use client"
import {Box} from "@mui/system";
import {Card, Container, Divider, Typography} from "@mui/material";
import Link from "next/link";
import LogoComponent from "@/components/shared/media/logo";
import SignUpForm from "@/components/auth/signUpFrom";
import "../../../public/assets/signup/css/signup.css"
import {motion} from "framer-motion";

export default function SignUp() {
    function checkToken ()
    {
        if (localStorage.hasOwnProperty('token'))
        {
            window.location.href = '/'
        }
    }
    checkToken()
    return (
        <>
            <motion.section
                initial={
                    {
                        x: 1500,
                    }
                }
                animate={
                    {
                        x: 0,
                    }
                }

                transition={
                    {
                        type: "spring",
                        damping: 8,
                        stiffness: 50,
                        restDelta: 0.001,
                        delay: 0.2
                    }
                }
                >
                <Box component="main" sx={{
                    p: 2,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    width: '30%',
                    margin: 'auto'
                }}>
                    <Container>
                        <Card sx={{padding: "20px", display: 'flex', alignItems: 'center', flexDirection: 'column'}}
                              style={{boxShadow: 'rgb(100 116 139 / 12%) 0px 10px 15px'}}>
                            <LogoComponent/>
                            <Typography variant="h4" fontWeight="bold">
                                Login
                            </Typography>
                            <Typography mb={4} variant="caption">
                                Create a new Binery account
                            </Typography>
                            <Box width="100%">
                                <SignUpForm/>
                            </Box>
                            <Divider style={{margin: "20px 0", width: '100%'}} variant="middle"/>
                            <Box style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                <Box>
                                    <Link className={'link'} href="/login">I have an account</Link>
                                </Box>
                            </Box>
                        </Card>
                    </Container>
                </Box>

            </motion.section>
        </>
    )
}
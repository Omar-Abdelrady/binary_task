"use client";
import {Box} from "@mui/system";
import {Card, Container, Divider, Typography} from "@mui/material";
import Link from "next/link";
import LogoComponent from "@/components/shared/media/logo";
import EmailVerificationForm from "@/components/auth/emailVerificationForm";
import "../../../public/assets/signup/css/signup.css"
import {motion} from "framer-motion";
import axios from "axios";
import {useEffect} from "react";

export default function VerifyEmail() {

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
                                Email Verification
                            </Typography>
                            <Typography mb={4} variant="caption">
                                verify your email
                            </Typography>
                            <Box width="100%">
                                <EmailVerificationForm />
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
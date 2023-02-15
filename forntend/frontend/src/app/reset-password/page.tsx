"use client"
import {motion} from "framer-motion";
import {Box} from "@mui/system";
import {Card, Container, Divider, Typography} from "@mui/material";
import LogoComponent from "@/components/shared/media/logo";
import Link from "next/link";
import ResetPasswordFrom from "@/components/auth/resetPasswordFrom";

export default function ResetPassword() {
    return (
        <>
            <motion.section
                initial={
                    {
                        x: -1500,
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

                className="login-section">
                <Box component="main" sx={{ p: 2, height: '100vh', display: 'flex', alignItems: 'center', width: '30%', margin: 'auto' }}>
                    <Container>
                        <Card sx={{ padding: "20px", display: 'flex', alignItems: 'center', flexDirection: 'column' }} style={{ boxShadow: 'rgb(100 116 139 / 12%) 0px 10px 15px'}}>
                            <LogoComponent />
                            <Typography variant="h4" fontWeight="bold">
                                Reset Password
                            </Typography>
                            <Typography mb={4} variant="caption">
                                Reset your password
                            </Typography>
                            <Box width="100%">
                            <ResetPasswordFrom />
                            </Box>
                            <Divider style={{ margin: "20px 0", width: '100%' }} variant="middle" />
                            <Box style={ { display: 'flex', justifyContent: 'space-between', width: '100%' } }>
                                <Box>
                                    <Link className={'link'} href="/">Back Home</Link>
                                </Box>
                                <Box>
                                    <Link className={'link'} href="/sign-up">Create a new account</Link>
                                </Box>
                            </Box>
                        </Card>
                    </Container>
                </Box>
            </motion.section>
        </>
    )
}
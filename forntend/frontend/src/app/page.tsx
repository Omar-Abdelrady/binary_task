"use client"
import { Inter } from '@next/font/google'
import {Container, Typography} from "@mui/material";
import {redirect} from "next/navigation";
import {Box} from "@mui/system";
import {useEffect} from "react";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    useEffect( () => {
        async function validateToken(){
            await axios({
                url: "api/user",
                method: "POST",
                data: {
                    token: localStorage.getItem('token')
                }
            }).then(response => {

            })
                .catch(error => {
                    localStorage.removeItem('token')
                    window.alert(error.response.data.message)
                    window.location.href = "/login"
                })
        }
        validateToken()
    })
  return (
    <main>
      <Container>
          <Box display={'flex'} style={{ justifyContent: 'center' }} >
              <Link href='/reset-password' > Reset Password </Link>
              <Typography variant="h1" >
                  Hello World
              </Typography>
          </Box>

      </Container>
    </main>
  )
}

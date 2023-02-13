"use client"
import { Inter } from '@next/font/google'
import {Container, Typography} from "@mui/material";
import {redirect} from "next/navigation";
import {Box} from "@mui/system";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const checkToken = () =>{
        if (!localStorage.hasOwnProperty('token'))
        {
            redirect('/login')
        }
    }
    checkToken()
  return (
    <main>
      <Container>
          <Box display={'flex'} style={{ justifyContent: 'center' }} >
              <Typography variant="h1" >
                  Hello World
              </Typography>
          </Box>

      </Container>
    </main>
  )
}

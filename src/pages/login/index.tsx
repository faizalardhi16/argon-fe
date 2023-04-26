import Button from '@/components/Button'
import { accessTokenKey } from '@/constant/accessTokenKey'
import axios from 'axios'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import React from 'react'

const Login = () => {

    const router = useRouter();

    const handleLogin = async () => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const response = await axios.post("http://localhost:4545/api/v1/auth", JSON.stringify({
                email: "ali@gmail.com",
                password: "123123123"
            }),
                config
            )

            setCookie(null, "token", response.data.data.accessToken, {
                maxAge: 86400,
                path: "/*"
            });


            localStorage.setItem(accessTokenKey, response.data.data.accessToken);


            window.location.href = "/dashboard";

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Button onClick={handleLogin}>
                Login
            </Button>
        </div>
    )
}

export default Login

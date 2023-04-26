import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Text from '@/components/Text'
import { accessTokenKey } from '@/constant/accessTokenKey'
import { IFormLogin } from '@/interface/IFormLogin'
import axios from 'axios'
import { setCookie } from 'nookies'
import React, { SyntheticEvent, useState } from 'react'

const Login = () => {

    const [form, setForm] = useState<IFormLogin>({
        email: "",
        password: ""
    })

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
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
        <div className="w-full h-[100vh] bg-rose-600 flex items-center justify-center">
            <div className="max-w-screen-xl flex bg-white w-1/3 h-[68vh] flex-col items-center justify-start mx-auto p-4">
                <Text className="text-xl font-bold">Login Area</Text>
                <Form className="w-full items-center flex justify-center h-[45vh] flex-col" onSubmit={handleLogin} method="POST">
                    <div className="w-11/12 mt-4">
                        <Input placeholder='Email' label="Email" type="email" name="email" onChange={(e) => {
                            setForm({ ...form, [e.target.name]: e.target.value })
                        }} />
                    </div>

                    <div className="w-11/12 mt-4">
                        <Input placeholder='Password' label="Password" type="password" name="password" onChange={(e) => {
                            setForm({ ...form, [e.target.name]: e.target.value })
                        }} />
                    </div>

                    <div className="w-11/12 mt-6">
                        <Button color="success" className="w-full" type="submit">
                            Login
                        </Button>
                    </div>


                </Form>
            </div>
        </div>
    )
}

export default Login

import React, { SyntheticEvent, useEffect, useState } from 'react'
import Text from "@/components/Text"
import Form from '@/components/Form'
import Input from '@/components/Input'
import { IFormAbsence } from '@/interface/IFormAbsence'
import Button from '@/components/Button'
import { setHours } from '@/function/setHour'
import axios from 'axios'
import { absenceURL } from '@/constant/url'
import { useLogin } from '@/store/loginStore'
import useCreateAbsence from '@/api/useCreateAbsence'

const CreateAbsence = () => {
    const user = useLogin();
    const [form, setForm] = useState<IFormAbsence>({
        clockIn: "",
        clockOut: ""
    });

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = useCreateAbsence(form);

            console.log(response)


        } catch (error) {
            console.log(error, "ERRO")
        }
    }

    useEffect(() => {
        console.log(form)
    }, [form])




    return (
        <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4">
            <Text className="text-xl font-bold">
                Form Absensi Karyawan
            </Text>

            <Form className="w-8/12 mt-4" onSubmit={(e) => handleSubmit(e)} method="POST">
                <div className="flex-row flex justify-between items-center w-full">
                    <div className="w-1/2 mt-2">
                        <Input label="Waktu Masuk"
                            placeholder="Waktu Masuk"
                            className="w-3/4" type="datetime-local"
                            onChange={(e) => {
                                setForm({ ...form, clockIn: setHours(e.target.value) })
                            }}
                        />
                    </div>

                    <div className="w-1/2 mt-2">
                        <Input label="Waktu Pulang"
                            placeholder="Waktu Masuk"
                            className="w-3/4"
                            type="datetime-local"
                            onChange={(e) => {
                                setForm({ ...form, clockOut: setHours(e.target.value) })
                            }}
                        />
                    </div>
                </div>

                <div className="w-full">
                    <Button type="submit" color="success" className="w-full mt-8">
                        Buat Data
                    </Button>
                </div>


            </Form>



        </div>
    )
}

export default CreateAbsence

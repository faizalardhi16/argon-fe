import Form from '@/components/Form';
import Text from '@/components/Text';
import Input from '@/components/Input';
import { GetServerSideProps, NextPage } from 'next';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import Button from '@/components/Button';
import useGetAbsenceDetail from '@/api/useGetAbsenceDetail';
import { IFormAbsence } from '@/interface/IFormAbsence';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours } from '@/function/setHour';
import renderDateValue from '@/function/renderDateValue';
import useUpdateAbsence from '@/api/useUpdateAbsence';
import Swal from 'sweetalert2';
import withAuth from '@/components/PrivateRoute';
import renderDate from '@/function/renderDate';

export interface IEditAbsence {
    id: string;
}

const EditAbsence: NextPage<IEditAbsence> = ({ id }) => {
    const dateRef = useRef<IFormAbsence>({
        clockIn: new Date().toISOString(),
        clockOut: new Date().toISOString()
    })

    const [form, setForm] = useState<IFormAbsence>({
        clockIn: new Date().toISOString(),
        clockOut: new Date().toISOString()
    })

    useEffect(() => {
        async function fetchData() {
            const response = await useGetAbsenceDetail(id);

            dateRef.current = {
                clockIn: setHours(response.data.clockIn),
                clockOut: setHours(response.data.clockOut)
            }

            setForm({
                clockIn: renderDateValue(setHours(response.data.clockIn)),
                clockOut: renderDateValue(setHours(response.data.clockOut))
            })
        }

        fetchData();
    }, [])

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {

            const response = await useUpdateAbsence(id, dateRef.current)

            Swal.fire(
                'Success Edit Data!',
                `${response.meta.message}`,
                'success'
            )

        } catch (error: any) {
            Swal.fire(
                'Failed to Edit Data!',
                `${error.response.data.meta.message}`,
                'error'
            )
        }
    }


    console.log(form, "FORM")
    return (
        <div className="w-full h-[100vh] bg-rose-600 flex items-center justify-center">
            <div className="max-w-screen-xl flex bg-white w-1/3 h-[68vh] flex-col items-center justify-start mx-auto p-4">
                <Text className="text-xl font-bold">Edit Absence</Text>
                <Form className="w-full items-center flex justify-center h-[65vh] flex-col" method="POST" onSubmit={handleUpdate}>
                    <div className="w-11/12 mt-4">
                        <Input label="Waktu Masuk"
                            placeholder="Waktu Masuk"
                            className="w-full" type="datetime-local"
                            value={form.clockIn}
                            name="clockIn"
                            onChange={(e) => {
                                dateRef.current = { ...dateRef.current, clockIn: setHours(e.target.value) }
                                setForm({ ...form, clockIn: renderDateValue(setHours(e.target.value)) })
                            }}
                        />
                    </div>

                    <div className="w-11/12 mt-4">
                        <Input label="Waktu Pulang"
                            placeholder="Waktu Pulang"
                            className="w-full" type="datetime-local"
                            value={form.clockOut}
                            name="clockOut"
                            onChange={(e) => {
                                dateRef.current = { ...dateRef.current, clockOut: setHours(e.target.value) }
                                setForm({ ...form, clockOut: renderDateValue(setHours(e.target.value)) })
                            }}
                        />
                    </div>

                    <div className="w-11/12 mt-6">
                        <Button color="success" className="w-full" type="submit">
                            Edit Data
                        </Button>
                    </div>


                </Form>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params ? context.params.id : null;

    return {
        props: {
            id
        }
    }
}

export default withAuth(EditAbsence);

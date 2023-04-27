
import Button from '@/components/Button';
import { NextPage } from 'next'
import Input from '@/components/Input';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import withAuth from '@/components/PrivateRoute';
import useGetDetailUser from '@/api/useGetDetailUser';
import { IDetailProfile } from '@/interface/IDetailProfile';
import Form from '@/components/Form';
import useUpdateProfile from '@/api/useUpdateProfile';
import Swal from 'sweetalert2';

import apiConfig from '@/config/apiConfig';
import { uploadAvatar } from '@/constant/url';


export interface IProfile {

}

const Profile: NextPage<IProfile> = () => {
    const [detail, setDetail] = useState<IDetailProfile>({
        firstName: "",
        lastName: "",
        address: "",
        role: "",
        phoneNumber: "",
        url: ""
    })
    const [file, setFile] = useState<any>(null)


    useEffect(() => {
        async function fetch() {
            const response = await useGetDetailUser();

            setDetail({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                address: response.data.address,
                role: response.data.role,
                phoneNumber: response.data.phone,
                url: response.data.url
            })
        }

        fetch()
    }, [])


    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {

            if (file) {
                const dataForm = new FormData();

                dataForm.append("image", file)

                const client = await apiConfig()
                await client.post(uploadAvatar, dataForm);
            }

            const response = await useUpdateProfile({ ...detail, url: undefined });

            setDetail({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                address: response.data.address,
                role: response.data.role,
                phoneNumber: response.data.phone,
                url: response.data.url
            })

            Swal.fire(
                'Success Edit Data!',
                `${response.meta.message}`,
                'success'
            )
        } catch (error: any) {
            Swal.fire(
                'Failed Edit Data!',
                `${error.response.data.meta.message}`,
                'error'
            )
        }
    }

    return (
        <div className="relative max-w-screen-xl flex flex-col items-center justify-center mx-auto p-4">
            <Form className="bg-rose-600 w-8/12 rounded-md min-h-[90vh] p-4 mt-4" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-start items-center">
                    <img src={detail.url} alt="photo" height={100} width={100} />
                    <div className="flex flex-row justify-start items-center">
                        <Input type="file" onChange={(e) => {
                            if (e.target.files) {
                                setFile(e.target.files[0])
                            }
                        }} />
                    </div>
                </div>

                <div className="mt-4">
                    <Input value={detail.firstName} label="First Name" placeholder="First Name" name="firstName"
                        onChange={(e) => { setDetail({ ...detail, [e.target.name]: e.target.value }) }}
                    />
                </div>

                <div className="mt-4">
                    <Input value={detail.lastName} label="Last Name" placeholder="Last Name" name="lastName"
                        onChange={(e) => { setDetail({ ...detail, [e.target.name]: e.target.value }) }} />
                </div>

                <div className="mt-4">
                    <Input value={detail.phoneNumber} label="Phone Number" placeholder="Phone Number" name="phoneNumber"
                        onChange={(e) => { setDetail({ ...detail, [e.target.name]: e.target.value }) }} />
                </div>

                <div className="mt-4">
                    <Input value={detail.address} label="Alamat" placeholder="Alamat" name="address"
                        onChange={(e) => { setDetail({ ...detail, [e.target.name]: e.target.value }) }} />
                </div>


                <div className="w-full mt-16">
                    <Button className="w-full" color="success" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}







export default withAuth(Profile)

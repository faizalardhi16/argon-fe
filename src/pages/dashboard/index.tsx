import withAuth from '@/components/PrivateRoute'
import TableAbsence from '@/components/TableAbsence'
import { IDataAbsence, IDataAbsenceResponse } from '@/interface/IDataAbsence'
import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { parseCookies, setCookie } from "nookies";
import useGetAllAbsence from '@/api/useGetAllAbsence'
import renderDate from '@/function/renderDate'
import { render } from 'react-dom'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { setHours } from '@/function/setHour'


export interface IDashboard {

}


const data: IDataAbsence[] = [
    { id: 1, clockIn: "2023-01-01", clockOut: "2023-01-01", name: "Faizal" }
]


const Dashboard: NextPage<IDashboard> = () => {

    const [dataAbsence, setDataAbsence] = useState<IDataAbsence[]>([])

    useEffect(() => {
        async function fetch() {
            const res = await useGetAllAbsence()
            const modifyData = res.data.map((item: IDataAbsenceResponse, index: number) => {
                return {
                    ...item,
                    clockIn: renderDate(setHours(item.clockIn)),
                    clockOut: renderDate(setHours(item.clockOut)),
                    name: item.firstName + " " + item.lastName,
                    id: item.id
                }
            })
            setDataAbsence(modifyData)


        }

        fetch()
    }, []);



    return (
        <div className="max-w-screen-xl bg-rose-600 flex flex-col items-center justify-center mx-auto p-4">
            <div className="w-full mb-2">
                <Link href={"/dashboard/create"}>
                    <Button color="success" className="hover:opacity-90">
                        Buat Absensi
                    </Button>
                </Link>
            </div>
            <TableAbsence
                title={[
                    "Masuk", "Pulang", "Name"
                ]}
                data={
                    dataAbsence
                }
            />
        </div>
    )
}


export default withAuth(Dashboard)
function moment(myDate: any) {
    throw new Error('Function not implemented.')
}


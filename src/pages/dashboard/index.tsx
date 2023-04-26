import withAuth from '@/components/PrivateRoute'
import TableAbsence from '@/components/TableAbsence'
import { IDataAbsence } from '@/interface/IDataAbsence'
import { NextPage } from 'next'
import React from 'react'

export interface IDashboard {

}


const data: IDataAbsence[] = [
    { id: 1, clockIn: "2023-01-01", clockOut: "2023-01-01", name: "Faizal" }
]


const Dashboard: NextPage<IDashboard> = () => {
    return (
        <div className="max-w-screen-xl bg-rose-600 flex items-center justify-center mx-auto p-4">
            <TableAbsence
                title={[
                    "Clock In", "Clock Out", "Name"
                ]}
                data={
                    data
                }
            />
        </div>
    )
}

export default withAuth(Dashboard)

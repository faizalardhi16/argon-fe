import withAuth from '@/components/PrivateRoute'
import TableAbsence from '@/components/TableAbsence'
import { IDataAbsence } from '@/interface/IDataAbsence'
import { NextPage } from 'next'
import React, { useEffect } from 'react'

export interface IProfile {

}

const data: IDataAbsence[] = [
    { id: 1, clockIn: "2023-01-01", clockOut: "2023-01-01", name: "Faizal" }
]

const Profile: NextPage<IProfile> = () => {

    return (
        <div>
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







export default Profile;

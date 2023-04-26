import { ParamsId } from '@/types/ParamsId';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react'

export interface IProfileDetail {
    id: string;
}

const ProfileDetail: NextPage<IProfileDetail> = ({ id }) => {
    return (
        <div>
            {id}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id: ParamsId = context.params ? context.params.id : "";

    return {
        props: {
            id
        }
    }
}

export default ProfileDetail

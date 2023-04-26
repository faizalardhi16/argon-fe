import { IDataAbsence } from '@/interface/IDataAbsence'
import React from 'react'
import Button from './Button'
import Link from 'next/link'



type TableAbsenceProps = {
    title: string[],
    data: IDataAbsence[]
}

const TableAbsence: React.FC<TableAbsenceProps> = (props) => {


    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {[...props.title, "Action"].map((item, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item: IDataAbsence, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <td className="px-6 py-4">
                                {item.clockIn}
                            </td>
                            <td className="px-6 py-4">
                                {item.clockOut}
                            </td>
                            <td className="px-6 py-4">
                                {item.name}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/dashboard/edit/${item.id}`}>
                                    <Button color="danger">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableAbsence

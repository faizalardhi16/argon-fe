import { IDataAbsence } from '@/interface/IDataAbsence'
import React from 'react'
import Button from './Button'



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
                        {[...props.title, "Action"].map((item) => (
                            <th scope="col" className="px-6 py-3">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item: IDataAbsence, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.clockIn}
                            </th>
                            <td className="px-6 py-4">
                                {item.clockOut}
                            </td>
                            <td className="px-6 py-4">
                                {item.name}
                            </td>
                            <td className="px-6 py-4">
                                <Button color="danger">
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableAbsence

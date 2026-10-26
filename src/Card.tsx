import React from 'react'

type productProps = {
    id: string,
    ism: string,
    narx: number
}

function Card({ id, ism, narx }: productProps) {
    return (
        <tr
            key={id}
            className="transition-colors duration-200 hover:bg-purple-50"
        >
            <td className="px-6 py-4 font-medium text-gray-500">
                {id}
            </td>

            <td className="px-6 py-4 font-semibold text-gray-800">
                {ism}
            </td>

            <td className="px-6 py-4 font-bold text-purple-700">
                {narx.toLocaleString("uz-UZ")} so'm
            </td>
        </tr>
    )
}

export default Card
import React from "react"
import { useUpdateProd } from "./services/ProductApi"
import type { Product } from "./shared/ProductType"

type InfoProps = {
    choosenItem: Product
    setChoosenItem: React.Dispatch<React.SetStateAction<Product | undefined>>
    setIsOpen: (open: boolean) => void
}

function EditForm({ setChoosenItem, choosenItem, setIsOpen }: InfoProps) {
    const editProduct = useUpdateProd()

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        editProduct.mutate(choosenItem, {
            onSuccess: () => {
                setIsOpen(false)
                setChoosenItem(undefined)
            },
        })
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2">
            <input name="ism" type="text" value={choosenItem.ism} onChange={(e) => setChoosenItem(prev => prev ? { ...prev, ism: e.target.value } : undefined     ) } placeholder="Maxsulot nomi" className="w-70 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500" />

            <input name="narxi" type="number" value={choosenItem.narx} onChange={(e) => setChoosenItem(prev => prev ? { ...prev, narx: Number(e.target.value) } : undefined     ) } placeholder="Maxsulot narxi" className="w-70 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500"
            />

            <button type="submit" disabled={editProduct.isPending} className="w-full cursor-pointer rounded-xl bg-blue-500 p-3 text-white disabled:opacity-50" >
                {editProduct.isPending ? "Updating..." : "EDIT"}
            </button>
        </form>
    )
}

export default EditForm
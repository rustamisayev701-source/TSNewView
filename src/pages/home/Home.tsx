
import { useTranslation } from "react-i18next";
import { useGetProduct } from "../../services/ProductApi";
import { data } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";

function Home() {
    const { t, i18n } = useTranslation();
    const { data, isLoading, isError } = useGetProduct(1, 10);

    const language = ["uz", "ru", "en"].includes(i18n.language)
        ? i18n.language as "uz" | "ru" | "en"
        : "uz";

    if (isLoading) {
        return <p className="p-6">Loading...</p>;
    }

    if (isError) {
        return <p className="p-6 text-red-500">Error loading products</p>;
    }
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [valu,setValu] = useState<string>("")
    
    // const value = (event:any) => {

    //     const values = (event.currentTarget.value)
    //     setIsOpen(true)
    //     setValu(values)
    //     console.log(values)
    // }

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data?.products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-xl bg-white p-5 shadow-sm"
                    >
                        <h2 className="text-xl font-semibold">
                            {product.title[language]}
                        </h2>

                        <p className="mt-2 text-lg text-indigo-600">
                            {product.price.toLocaleString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US")} UZS
                        </p>
                    </div>
                ))}
            </div>
            {/* <div className="flex justify-between w-100">
                <button className="border" value={"Hot-dog"} onClick={value}>Xot-dog</button>
                <button className="border" value={"Lavash"} onClick={value}>Lavash</button>
                <button className="border" value={"Burger"} onClick={value}>Burger</button>
                <button className="border" value={"Ali"} onClick={value}>Ali</button>
            </div>
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                    <h1>{valu}</h1>
            </Modal>} */}
        </div>
    );
}

export default Home;

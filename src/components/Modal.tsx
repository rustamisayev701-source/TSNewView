import type { ReactNode } from "react"

type Close = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    children: ReactNode
    
}

function Modal({ isOpen, setIsOpen, children }: Close) {

    return (
        <div className="">
            <div className="relative  w-100 rounded-2xl bg-white p-6 shadow-2xl">
                <button
                    type="button"
                    className="absolute right-5 cursor-pointer text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    X
                </button>
                {children}
                
            </div>
        </div>
    )
}

export default Modal
import { useEffect, useState, type ChangeEvent } from "react"
import { useTranslation } from "react-i18next"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from "react-router-dom"

interface IsDarkMode {
    isdark: boolean
    setisdark: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ isdark, setisdark }: IsDarkMode) {
    const { t, i18n } = useTranslation()

    const [til, setTil] = useState(
        () => localStorage.getItem("til") || "uz"
    )

    useEffect(() => {
        i18n.changeLanguage(til)
    }, [til, i18n])

    const changelanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const language = event.currentTarget.value

        setTil(language)
        localStorage.setItem("til", language)
    }

    const changeTheme = () => {
        setisdark(prev => {
            const newTheme = !prev
            localStorage.setItem("isdark", String(newTheme))
            return newTheme
        })
    }

    return (
        <header className="bg-gray-400 px-10 py-5 sticky top-0 dark:bg-gray-900">
            <nav className="flex items-center justify-around gap-8 dark:text-white">

                <Link to="/" className="text-black dark:text-white">
                    {t("header.asosiy")}
                </Link>

                <Link to="/about" className="text-black dark:text-white">
                    {t("header.malumot")}
                </Link>

                <Link to="/list" className="text-black dark:text-white">
                    {t("header.list")}
                </Link>

                <Link to="/profile" className="text-black dark:text-white">
                    {t("header.Sen")}
                </Link>

                <button
                    onClick={changeTheme}
                    className="cursor-pointer"
                >
                    {isdark ? <FaSun /> : <FaMoon />}
                </button>

                <select value={til} onChange={changelanguage} className="ml-10 w-20 rounded-lg border border-white bg-slate-900 py-2 pl-3 text-white outline-none">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>

            </nav>
        </header>
    )
}

export default Header
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { House, Lightbulb, Wallet, CircleDollarSign, Settings, LogOut } from "lucide-react"


const Sidebar = () => {
    const { t } = useTranslation(["translation"])
    return (
        <nav className="absolute top-0 left-0 w-1/12 h-full p-2 border-2 border-transparent border-r-gray-200">
            <div className="flex flex-col gap-4 w-full p-2">
                <div className="flex w-full">
                    <NavLink className={({ isActive }) => isActive ? "flex flex-row gap-2 font-bold text-blue-500 bg-blue-200 rounded-md w-full p-2" : "flex flex-row gap-2 w-full p-2"} to="/userhome"><House /><span>{t("home")}</span></NavLink>
                </div>
                <div className="flex w-full">
                    <NavLink className={({ isActive }) => isActive ? "flex flex-row gap-2 font-bold text-blue-500 bg-blue-200 rounded-md w-full p-2" : "flex flex-row gap-2 w-full p-2"} to="/initiatives"><Lightbulb />{t("initiatives")}</NavLink>
                </div>
                <div className="flex w-full">
                    <NavLink className={({ isActive }) => isActive ? "flex flex-row gap-2 font-bold text-blue-500 bg-blue-200 rounded-md w-full p-2" : "flex flex-row gap-2 w-full p-2"} to="/wallet"><Wallet />{t("wallet")}</NavLink>
                </div>
                <div className="flex w-full">
                    <NavLink className={({ isActive }) => isActive ? "flex flex-row gap-2 font-bold text-blue-500 bg-blue-200 rounded-md w-full p-2" : "flex flex-row gap-2 w-full p-2"} to="/market"><CircleDollarSign />{t("market")}</NavLink>
                </div>
                <div className="flex w-full">
                    <NavLink className={({ isActive }) => isActive ? "flex flex-row gap-2 font-bold text-blue-500 bg-blue-200 rounded-md w-full p-2" : "flex flex-row gap-2 w-full p-2"} to="/settings"><Settings />{t("settings")}</NavLink>
                </div>
            </div>
            <div className="p-2 mt-56">
                <div className="flex w-full">
                    <Link className="flex flex-row gap-2 w-full p-2" to="/"><LogOut />{t("logout")}</Link>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
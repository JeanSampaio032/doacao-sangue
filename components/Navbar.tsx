import { Bell } from 'lucide-react'
import React from 'react'
import Logo from '../icons/logo'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-rose-200 px-6 sm:px-10 py-4 bg-white shadow-sm">
            <div className="flex items-center gap-3 text-rose-900">
                <span className="material-icons text-rose-600 text-2xl mr-2">
                    <Logo width={40} height={40} />
                </span>
                <h1 className="text-xl font-bold leading-tight tracking-tight">VidaSangue</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
                <a className="text-rose-700 hover:text-rose-900 text-sm font-medium leading-normal" href="#">Início</a>
                <a className="text-rose-700 hover:text-rose-900 text-sm font-medium leading-normal" href="#">Campanhas</a>
                <a className="text-rose-700 hover:text-rose-900 text-sm font-medium leading-normal" href="#">Hemocentros</a>
                <a className="text-rose-700 hover:text-rose-900 text-sm font-medium leading-normal" href="#">Sobre</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-full h-10 w-10 bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors">
                    <Bell />
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-rose-200"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAFfPEga9Jz6JfSm3uBMC1uR-y1xd8jTxB2sst-SzcDOR-cZCE36YEJfO8aUfgchF_Z6WFJsLaqDpUDToNctZ3GsQDsW1J5Y3Fgn71jVlUUZGzGfGriNTFY-NA4eK2_RHrhw8w9KLQNr0ccrMEMBqdm7lQsNCd6-Lr3NgI6lp5j91lb1zeqe7P2U24d5iuD8eglEJgyGaTh0SfVzcfUMeFJyvAm0BQ922AlfUyVjr6BFqy7ukVCOvpBOEPmOKxdK8X12mhWszHx4iZ")' }}
                ></div>
                <button className="md:hidden flex items-center justify-center rounded-md h-10 w-10 bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors">
                    <span className="material-icons text-xl">menu</span>
                </button>
            </div>
        </header>
    )
}

export default Navbar
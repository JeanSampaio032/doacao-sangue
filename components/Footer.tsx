'use client'

import { useState } from "react";

type Props = {}

const Footer = (props: Props) => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    return (
        <footer className="text-center py-6 border-t border-rose-200 bg-white mt-12">
            <p className="text-rose-700 text-sm">© {currentYear} VidaSangue. Todos os direitos reservados.</p>
            <p className="text-rose-600 text-xs mt-1">
                Sua doação salva vidas. <a className="font-semibold hover:underline" href="#">Doe sangue!</a>
            </p>
        </footer>
    )
}

export default Footer
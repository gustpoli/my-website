'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import './header.css'

function setCookie(nome: string, valor: string, diasExpiracao: number = 7) {
  const dataExpiracao = new Date()
  dataExpiracao.setTime(
    dataExpiracao.getTime() + diasExpiracao * 24 * 60 * 60 * 1000
  )
  const expira = 'expires=' + dataExpiracao.toUTCString()
  document.cookie = nome + '=' + valor + ';' + expira + ';path=/'
}

// Função para obter o valor de um cookie
function getCookie(nome: string) {
  const nomeEquivalente = nome + '='
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(nomeEquivalente) == 0) {
      return cookie.substring(nomeEquivalente.length, cookie.length)
    }
  }
  return null
}

const toggleTheme = () => {
  const html = document.getElementsByTagName('html')[0]

  const theme = getCookie('theme') ?? 'dark'
  if (theme === 'dark') {
    html.classList.remove('dark')
    html.classList.add('light')
    setCookie('theme', 'light')
  } else {
    html.classList.remove('light')
    html.classList.add('dark')
    setCookie('theme', 'dark')
  }
}

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="pageHeader flex justify-center p-3 w-full text-md border-b">
      <div className="w-full lg:container flex justify-between">
        <div className="logo cursor-pointer	">
          <span className="text">Gustavo</span>
          <span className="dot">.</span>
        </div>
        <div className=" flex gap-4">
          <nav className="hidden md:flex navbar gap-3">
            <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
              Home
            </Link>
            <Link
              className={`${pathname === '/About' ? 'active' : ''}`}
              href="/About"
            >
              About
            </Link>
            <Link
              className={`${pathname === '/Portfolio' ? 'active' : ''}`}
              href="/Portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`${pathname === '/Contacts' ? 'active' : ''}`}
              href="/Contacts"
            >
              Contacts
            </Link>
          </nav>
          <div className=" flex gap-2">
            <span
              id="toggleThemeButton"
              className="material-symbols-outlined cursor-pointer	"
              onClick={toggleTheme}
            >
              dark_mode
            </span>
            <span className="material-symbols-outlined cursor-pointer	">
              globe
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

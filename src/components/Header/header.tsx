'use client'

import Navlink from '@/components/Navlink/navlink'

import './header.css'
import Link from 'next/link'
import { useState } from 'react'

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
  const [open, setOpen] = useState(false)

  return (
    <header
      id="header"
      className="pageHeader flex flex-col justify-center sm:items-center p-3 w-full text-md border-b lg:px-[160px]"
    >
      <div className="w-full lg:container flex justify-between">
        <div className="logo flex items-center cursor-pointer	">
          <Link href="/">
            <span className="text">Gustavo</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="flex gap-3+">
          <div className="hidden sm:flex items-center gap-4">
            <nav className="navbar flex gap-3">
              <Navlink href="/">Home</Navlink>
              <Navlink href="/About">About</Navlink>
              <Navlink href="/Portfolio">Portfolio</Navlink>
              <Navlink href="/Contacts">Contacts</Navlink>
            </nav>
          </div>
          <div className="flex gap-3">
            <div className=" flex items-center gap-2">
              <span
                id="toggleThemeButton"
                className="material-symbols-outlined cursor-pointer	"
                onClick={toggleTheme}
              >
                contrast
              </span>
            </div>
            <button
              className="flex items-center sm:hidden"
              onClick={() => {
                setOpen(!open)
              }}
            >
              <span
                id="toggleMenuButton"
                className="material-symbols-outlined cursor-pointer "
              >
                menu
              </span>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <nav className="navbar sm:hidden flex flex-col gap-2 mt-5">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/About">About</Navlink>
          <Navlink href="/Portfolio">Portfolio</Navlink>
          <Navlink href="/Contacts">Contacts</Navlink>
          <Navlink href="/Curriculum">Curriculum</Navlink>
        </nav>
      )}
    </header>
  )
}

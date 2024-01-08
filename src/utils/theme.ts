import { cookies } from 'next/headers'

const themes = ['dark', 'light']

export const getTheme = () => {
  return cookies().get('theme')?.value ?? 'dark'
}

export const setTheme = (theme: string) => {
  if (!themes.includes(theme)) theme = 'dark'
  cookies().set('theme', theme)
}

export const toggleTheme = () => {
  setTheme(themes[(themes.indexOf(getTheme()) + 1) % themes.length])
}

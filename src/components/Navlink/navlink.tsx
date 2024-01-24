'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LinkProps } from 'next/link'

interface props extends LinkProps {
  children: React.ReactElement | React.ReactElement[] | string
}

export default function Navlink({ children, href, ...rest }: props) {
  const path = usePathname()

  return (
    <Link href={href} className={path == href ? 'active' : ''} {...rest}>
      {children}
    </Link>
  )
}

import React from 'react'

interface ButtonProps {
  type: 'filled' | 'outlined'
  colors: {
    background: string
    color: string
  }
}

interface Props {
  classes: string
  styles: React.CSSProperties
  text: string
  href: string
}

const Button: React.FC<ButtonProps & Props> = ({
  type,
  colors,
  classes,
  styles,
  text,
  href
}) => {
  const componentStyles: React.CSSProperties = {
    border: type === 'outlined' ? `${colors.background} 1px solid` : 'none',
    backgroundColor: type === 'filled' ? colors.background : 'transparent',
    color: colors.color,
    ...styles
  }

  return (
    <a
      className={`py-[1%] px-[2%] rounded-lg fw-medium ${classes}`}
      style={componentStyles}
      href={href}
    >
      {text}
    </a>
  )
}

export default Button

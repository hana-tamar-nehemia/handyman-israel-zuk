import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'whatsapp' | 'phone' | 'outline' | 'lime' | 'outline-light'

interface BaseProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | LinkProps

export function Button({
  variant = 'outline',
  children,
  className = '',
  ...props
}: Props) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  )
}

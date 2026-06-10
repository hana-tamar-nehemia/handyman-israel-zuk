import { useState, type ReactNode } from 'react'
import './Accordion.css'

interface AccordionItemProps {
  id: string
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`accordion__item ${open ? 'accordion__item--open' : ''}`}>
      <button
        type="button"
        className="accordion__trigger"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span className="accordion__icon" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        id={`panel-${id}`}
        className="accordion__panel"
        role="region"
        hidden={!open}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return <div className={`accordion ${className}`.trim()}>{children}</div>
}

import { siteConfig } from '../../data/site'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './Contact.css'

const contactMessage = `שלום ישראל,\nאשמח ליצור קשר לגבי עבודת הנדימן.`

const contactItems = [
  {
    id: 'whatsapp',
    icon: 'whatsapp' as const,
    label: 'WhatsApp',
    value: siteConfig.phone,
    href: whatsappUrl(contactMessage),
    external: true,
    highlight: true,
    action: 'שלח הודעה - מענה מהיר',
  },
  {
    id: 'phone',
    icon: '📞',
    label: 'טלפון',
    value: siteConfig.phone,
    href: phoneUrl(),
    external: false,
    highlight: false,
    action: null,
  },
  {
    id: 'email',
    icon: '✉️',
    label: 'מייל',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    highlight: false,
    action: null,
  },
  {
    id: 'instagram',
    icon: '📸',
    label: 'אינסטגרם',
    value: siteConfig.instagram === '#' ? 'בקרוב' : 'עקבו אחרינו',
    href: siteConfig.instagram,
    external: true,
    highlight: false,
    action: null,
    disabled: siteConfig.instagram === '#',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">צור קשר</h2>
          <p className="section__subtitle">זמינים לשאלות, הצעות מחיר ותיאום עבודות</p>
        </header>

        <div className="contact__list">
          {contactItems.map((item) => {
            const className = `contact__row card ${item.highlight ? 'contact__row--whatsapp' : ''} ${item.disabled ? 'contact__row--disabled' : ''}`
            const inner = (
              <>
                <span className="contact__row-icon" aria-hidden="true">
                  {item.icon === 'whatsapp' ? <WhatsAppIcon size={22} /> : item.icon}
                </span>
                <span className="contact__row-content">
                  <span className="contact__row-label">{item.label}</span>
                  <span className="contact__row-value">{item.value}</span>
                  {item.action && <span className="contact__row-action">{item.action}</span>}
                </span>
                {!item.disabled && <span className="contact__row-arrow" aria-hidden="true">←</span>}
              </>
            )

            if (item.disabled) {
              return (
                <div key={item.id} className={className}>
                  {inner}
                </div>
              )
            }

            return (
              <a
                key={item.id}
                href={item.href}
                className={className}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

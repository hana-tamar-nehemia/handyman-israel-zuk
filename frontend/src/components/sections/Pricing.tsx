import { useState } from 'react'
import {
  pricingBundleNote,
  pricingCtaText,
  pricingGroups,
  pricingQuoteMessage,
  pricingWhatsappLabel,
} from '../../data/pricing'
import { whatsappUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import './Pricing.css'

export function Pricing() {
  const [open, setOpen] = useState(false)

  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">מחירון</h2>
        </header>

        <p className="pricing__bundle-note">{pricingBundleNote}</p>

        <div className="pricing__toggle-wrap">
          <Button
            variant="outline"
            className="pricing__toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="pricing-tables"
          >
            {open ? 'סגור מחירון' : 'פתח מחירון'}
            <span className="pricing__toggle-icon" aria-hidden="true">
              {open ? '−' : '+'}
            </span>
          </Button>
        </div>

        {open && (
          <div id="pricing-tables" className="pricing__grid">
            {pricingGroups.map((group) => (
              <div key={group.title} className="pricing__table-wrap">
                <h3 className="pricing__group-title">{group.title}</h3>
                <table className="pricing__table">
                  <thead>
                    <tr>
                      <th scope="col">שירות</th>
                      <th scope="col">מחיר</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.service}</td>
                        <td className="pricing__price">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        <div className="pricing__cta">
          <p className="pricing__cta-text">{pricingCtaText}</p>
          <Button
            variant="whatsapp"
            href={whatsappUrl(pricingQuoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={22} />
            {pricingWhatsappLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}

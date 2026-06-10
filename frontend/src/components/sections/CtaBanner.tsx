import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './CtaBanner.css'

const message = `שלום ישראל,\nאשמח לקבל הצעת מחיר לעבודת הנדימן.`

export function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="קריאה לפעולה">
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <h2 className="cta-banner__title">בואו נתחיל לתקן</h2>
          <p className="cta-banner__subtitle">
            שלחו הודעה ב-WhatsApp או התקשרו
          </p>
        </div>
        <div className="cta-banner__actions">
          <Button
            variant="lime"
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            WhatsApp
          </Button>
          <Button variant="outline-light" href={phoneUrl()}>
            📞 {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}

import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './Hero.css'

const defaultMessage = `שלום ישראל,\nאשמח לקבל הצעת מחיר לעבודת הנדימן.`

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{siteConfig.location}</p>
          <h1 className="hero__title">
            {siteConfig.businessName}
            <span className="hero__title-sub">{siteConfig.tagline}</span>
          </h1>
          <p className="hero__description">{siteConfig.description}</p>
          <div className="hero__actions">
            <Button
              variant="whatsapp"
              href={whatsappUrl(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </Button>
            <Button variant="outline" href={phoneUrl()} className="hero__phone-btn">
              📞 התקשר עכשיו
            </Button>
          </div>
        </div>

        <div className="hero__image-wrap">
          <img
            src="/images/israel-hero.jpg"
            alt={`${siteConfig.businessName} - הנדימן מקצועי`}
            className="hero__image"
            width={480}
            height={560}
          />
        </div>
      </div>
    </section>
  )
}

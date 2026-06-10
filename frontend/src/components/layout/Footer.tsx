import { siteConfig } from '../../data/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🔧 {siteConfig.businessName}</span>
          <p className="footer__tagline">{siteConfig.slogan}</p>
        </div>

        <div className="footer__hours">
          <h3 className="footer__hours-title">שעות פעילות</h3>
          {siteConfig.businessHours.map((line) => (
            <p key={line} className="footer__hours-line">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year}. כל הזכויות שמורות - tamar nehemia</p>
        </div>
      </div>
    </footer>
  )
}

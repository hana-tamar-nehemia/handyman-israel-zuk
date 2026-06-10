import { serviceCategories, servicesHint, servicesIntro } from '../../data/services'
import { serviceMessage, whatsappUrl } from '../../lib/whatsapp'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">שירותים</h2>
          <p className="section__subtitle">{servicesIntro}</p>
          <p className="services__hint">{servicesHint}</p>
        </header>

        <div className="services__grid">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={whatsappUrl(serviceMessage(category.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="services__card card"
              title={`שלח הודעה ב-WhatsApp: ${category.title}`}
            >
              <span className="services__icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="services__title">{category.title}</h3>
              <p className="services__examples">{category.examples}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

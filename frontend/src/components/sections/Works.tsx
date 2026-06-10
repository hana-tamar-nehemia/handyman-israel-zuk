import { works } from '../../data/works'
import './Works.css'

export function Works() {
  return (
    <section id="works" className="section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">עבודות</h2>
          <p className="section__subtitle">דוגמאות מעבודות שבוצעו ללקוחות בירושלים והסביבה</p>
        </header>

        <div className="works__grid">
          {works.map((work) => (
            <article key={work.id} className="works__card card">
              <div className="works__image-wrap">
                <img
                  src={encodeURI(work.image)}
                  alt={work.title}
                  className="works__image"
                  loading="lazy"
                />
              </div>
              <div className="works__body">
                <p className="works__description">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

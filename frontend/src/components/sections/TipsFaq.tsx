import { faqItems } from '../../data/faq'
import { tips } from '../../data/tips'
import { Accordion, AccordionItem } from '../ui/Accordion'
import './TipsFaq.css'

export function TipsFaq() {
  return (
    <section id="tips-faq" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">טיפים ושאלות נפוצות</h2>
          <p className="section__subtitle">מידע שימושי לפני שמתחילים עבודה</p>
        </header>

        <div className="tips-faq__layout">
          <div className="tips-faq__column">
            <h3 className="tips-faq__heading">טיפים</h3>
            <Accordion>
              {tips.map((tip) => (
                <AccordionItem key={tip.id} id={tip.id} title={tip.title}>
                  <p className="tips-faq__summary">{tip.summary}</p>
                  {tip.content}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="tips-faq__column">
            <h3 className="tips-faq__heading">שאלות נפוצות</h3>
            <Accordion>
              {faqItems.map((item) => (
                <AccordionItem key={item.id} id={item.id} title={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useMemo, useState } from 'react'
import {
  featuredReviews,
  INITIAL_REVIEWS_COUNT,
  reviewCategories,
  reviews,
  type ReviewCategory,
} from '../../data/reviews'
import { Button } from '../ui/Button'
import './Reviews.css'

type FilterValue = 'all' | ReviewCategory

export function Reviews() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [showAll, setShowAll] = useState(false)

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') {
      return showAll ? reviews : featuredReviews
    }
    return reviews.filter((review) => review.categories.includes(activeFilter))
  }, [activeFilter, showAll])

  const handleFilterChange = (filter: FilterValue) => {
    setActiveFilter(filter)
    setShowAll(false)
  }

  return (
    <section id="reviews" className="section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">ביקורות</h2>
          <p className="section__subtitle">עשרות ביקורות מלקוחות מרוצים</p>
        </header>

        <div className="reviews__categories" role="tablist" aria-label="סינון ביקורות לפי נושא">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`reviews__filter ${activeFilter === 'all' ? 'reviews__filter--active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            הכל
          </button>
          {reviewCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`reviews__filter ${activeFilter === cat ? 'reviews__filter--active' : ''}`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredReviews.length > 0 ? (
          <div className="reviews__grid">
            {filteredReviews.map((review) => (
              <blockquote key={review.id} className="reviews__card card">
                <div className="stars" aria-label="5 כוכבים">
                  ★★★★★
                </div>
                <p className="reviews__text">&ldquo;{review.text}&rdquo;</p>
                <footer className="reviews__author">
                  — {review.author}, {review.location}
                </footer>
                {review.categories[0] && (
                  <span className="reviews__tag">{review.categories[0]}</span>
                )}
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="reviews__empty">אין ביקורות בקטגוריה זו כרגע.</p>
        )}

        {activeFilter === 'all' && reviews.length > INITIAL_REVIEWS_COUNT && (
          <div className="reviews__toggle">
            <Button variant="outline" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'הצג פחות' : 'הצג את כל הביקורות'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

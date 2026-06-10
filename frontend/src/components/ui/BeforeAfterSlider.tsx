import { useState, useCallback } from 'react'
import './BeforeAfterSlider.css'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  alt: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'לפני',
  afterLabel = 'אחרי',
  alt,
}: BeforeAfterSliderProps) {
  /** נעול על "לפני" אחרי לחיצה (נייד + מחשב) */
  const [pinned, setPinned] = useState(false)
  /** מציג "לפני" בזמן hover - רק מחשב */
  const [hovering, setHovering] = useState(false)

  const showBefore = pinned || hovering

  const togglePin = useCallback(() => {
    setPinned((prev) => !prev)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      togglePin()
    }
  }

  return (
    <div
      className={`before-after ${showBefore ? 'before-after--before' : 'before-after--after'}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={togglePin}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={showBefore}
      aria-label={`${alt}: ${showBefore ? beforeLabel : afterLabel}. לחצו להחלפה`}
    >
      <img
        src={afterImage}
        alt={`${alt} - ${afterLabel}`}
        className="before-after__img before-after__img--after"
        draggable={false}
      />
      <img
        src={beforeImage}
        alt={`${alt} - ${beforeLabel}`}
        className="before-after__img before-after__img--before"
        draggable={false}
      />

      <span
        className={`before-after__badge before-after__badge--state ${
          showBefore ? 'before-after__badge--before' : 'before-after__badge--after'
        }`}
      >
        {showBefore ? beforeLabel : afterLabel}
      </span>

      <span className="before-after__hint before-after__hint--hover">
        העבירו עכבר לראות {beforeLabel}
      </span>
      <span className="before-after__hint before-after__hint--touch">
        {pinned ? `לחצו שוב לראות ${afterLabel}` : `לחצו לראות ${beforeLabel}`}
      </span>
    </div>
  )
}

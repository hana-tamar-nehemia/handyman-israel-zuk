import { useState, useEffect } from 'react'
import { navItems, siteConfig } from '../../data/site'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : 'header--top'}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-icon" aria-hidden="true">🔧</span>
          <span className="header__logo-text">{siteConfig.headerBrand}</span>
        </a>

        <nav className="header__nav" aria-label="ניווט ראשי">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="ניווט מובייל">
          <ul className="header__mobile-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="header__mobile-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="header__overlay"
          aria-label="סגור תפריט"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioProjects } from '../data/portfolio'
import './PortfolioPage.css'

const categories = [
  'All',
  'Logo Digitizing',
  'Lettering',
  'Cap Designs',
  'Garment Designs',
  'Patch & Applique',
  'Custom Designs',
]

function shuffleProjects(projects) {
  return [...projects].sort(() => Math.random() - 0.5)
}

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const [randomProjects] = useState(() =>
    shuffleProjects(portfolioProjects).slice(0, 3)
  )

  const visibleProjects =
    activeCategory === 'All'
      ? randomProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <main className="portfolio-page">

      {/* Decorative embroidery threads */}
      <div className="portfolio-thread portfolio-thread-left">
        <svg viewBox="0 0 260 500" aria-hidden="true">
          <path
            className="portfolio-thread-line purple"
            d="M30 20 C170 70, 20 150, 150 205 S250 340, 80 470"
          />
          <path
            className="portfolio-thread-line gold"
            d="M70 0 C220 100, 40 170, 190 260 S210 390, 120 500"
          />
          <path
            className="portfolio-thread-line green"
            d="M10 110 C120 40, 190 150, 80 250 S20 390, 170 450"
          />
          <path
            className="portfolio-thread-line pink"
            d="M140 30 C40 130, 230 180, 100 300 S60 420, 220 480"
          />
        </svg>
      </div>

      <div className="portfolio-thread portfolio-thread-right">
        <svg viewBox="0 0 300 520" aria-hidden="true">
          <path
            className="portfolio-thread-line maroon"
            d="M260 20 C100 100, 270 150, 120 230 S30 370, 220 500"
          />
          <path
            className="portfolio-thread-line gold"
            d="M220 0 C70 80, 270 190, 130 280 S90 420, 270 510"
          />
          <path
            className="portfolio-thread-line green"
            d="M280 100 C150 40, 100 180, 220 250 S170 400, 40 480"
          />
          <path
            className="portfolio-thread-line purple"
            d="M40 50 C190 120, 20 220, 170 300 S280 420, 80 500"
          />
        </svg>
      </div>

      {/* Floating stitches */}
      <div className="portfolio-floating-stitches">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className="portfolio-page-hero">
        <span className="portfolio-page-kicker">
          ✦ EMBROIDERY PORTFOLIO
        </span>

        <h1>
          Explore My <span>Embroidery Work</span>
        </h1>

        <div className="portfolio-stitched-divider">
          <i></i>
          <span></span>
          <i></i>
          <span></span>
          <i></i>
        </div>

        <p>
          A growing collection of custom embroidery designs, digitizing,
          lettering, garments, caps, patches, and decorative embroidery.
        </p>
      </section>

      <section className="portfolio-page-content">

        <div className="portfolio-category-bar">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category ? 'active' : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-page-grid">
          {visibleProjects.map((project) => (
            <Link
              to={`/portfolio/${project.id}`}
              className="portfolio-page-card"
              key={project.id}
            >
              <div className="portfolio-page-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="portfolio-page-category">
                  {project.category}
                </span>

                <div className="portfolio-page-view">
                  View Design ↗
                </div>
              </div>

              <div className="portfolio-page-card-content">
                <small>{project.subtitle}</small>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="portfolio-page-meta">
                  <span>{project.embroideryType}</span>
                  <span>{project.stitchTypes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="portfolio-page-empty">
            <span>✦</span>
            <h2>More Designs Coming Soon</h2>
            <p>
              New embroidery work will be added to this category as
              the portfolio grows.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default PortfolioPage
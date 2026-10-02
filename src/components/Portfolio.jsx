import { useState } from 'react'
import { portfolioProjects } from '../data/portfolio'
import './Portfolio.css'

const categories = [
  'All',
  'Logo Digitizing',
  'Lettering',
  'Cap Designs',
  'Garment Designs',
  'Patch & Applique',
  'Custom Designs',
]

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <section className="portfolio-section" id="portfolio-gallery">
      <div className="portfolio-header">
        <div>
          <span className="section-kicker">EMBROIDERY PORTFOLIO</span>

          <h2>
            Explore My <span>Work</span>
          </h2>
        </div>

        <p>
          A growing collection of machine embroidery designs created for
          garments, products, lettering, patches, and custom applications.
        </p>
      </div>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-gallery">
        {filteredProjects.map((project) => (
          <article className="portfolio-item" key={project.id}>
            <div className="portfolio-item-image">
              <img src={project.image} alt={project.title} />

              <span>{project.category}</span>
            </div>

            <div className="portfolio-item-content">
              <small>{project.subtitle}</small>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="portfolio-item-meta">
                <div>
                  <span>TYPE</span>
                  <strong>{project.embroideryType}</strong>
                </div>

                <div>
                  <span>STITCH</span>
                  <strong>{project.stitchTypes}</strong>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="portfolio-empty">
          <span>✦</span>
          <p>More embroidery work will be added here soon.</p>
        </div>
      )}
    </section>
  )
}

export default Portfolio

import { featuredPortfolio } from '../data/portfolio'
import './FeaturedWork.css'

function FeaturedWork() {
  return (
    <section className="featured-work" id="portfolio">
              <div className="featured-thread featured-thread-left" aria-hidden="true">
        <svg viewBox="0 0 180 500">
          <path className="featured-thread-line purple" d="M20 0 C150 70, 20 130, 130 210 S170 360, 40 500" />
          <path className="featured-thread-line gold" d="M70 0 C170 100, 40 180, 150 280 S130 400, 70 500" />
          <path className="featured-thread-line green" d="M120 0 C20 100, 150 180, 50 300 S30 420, 150 500" />
        </svg>
      </div>

      <div className="featured-thread featured-thread-right" aria-hidden="true">
        <svg viewBox="0 0 180 500">
          <path className="featured-thread-line maroon" d="M160 0 C30 80, 170 150, 50 250 S20 390, 150 500" />
          <path className="featured-thread-line pink" d="M100 0 C170 100, 20 180, 130 290 S150 410, 30 500" />
          <path className="featured-thread-line blue" d="M40 0 C160 100, 20 210, 140 320 S120 430, 20 500" />
        </svg>
      </div>
      <div className="featured-header">
        <div>
          <span className="section-kicker">SELECTED EMBROIDERY</span>

          <h2>
            Featured <span>Work</span>
          </h2>
        </div>

        <p>
          A selection of custom embroidery designs created with attention to
          stitch quality, detail, color, and production requirements.
        </p>
      </div>

      <div className="featured-grid">
        {featuredPortfolio.map((project) => (
          <article className="portfolio-card" key={project.id}>
            <div className="portfolio-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />

              <span className="portfolio-category">
                {project.category}
              </span>
            </div>

            <div className="portfolio-content">
              <span className="portfolio-subtitle">
                {project.subtitle}
              </span>

              <h3>{project.title}</h3>

              <p className="portfolio-description">
                {project.description}
              </p>

              <div className="portfolio-details">
                <div>
                  <span>SOFTWARE</span>
                  <strong>{project.software}</strong>
                </div>

                <div>
                  <span>SIZE</span>
                  <strong>{project.size}</strong>
                </div>

                <div>
                  <span>STITCHES</span>
                  <strong>{project.stitches}</strong>
                </div>

                <div>
                  <span>EMBROIDERY</span>
                  <strong>{project.embroideryType}</strong>
                </div>
              </div>

              <div className="portfolio-colors">
                <span>THREAD COLORS</span>

                <div className="color-list">
                  {project.colors.map((color) => (
                    <span className="color-tag" key={color}>
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div className="portfolio-stitch-type">
                <span>STITCH TYPES</span>
                <strong>{project.stitchTypes}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork


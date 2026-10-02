import { Link, useParams } from 'react-router-dom'
import { portfolioProjects } from '../data/portfolio'
import './PortfolioDetailPage.css'

function PortfolioDetailPage() {
  const { id } = useParams()

  const project = portfolioProjects.find(
    (item) => item.id === id
  )

  if (!project) {
    return (
      <main className="portfolio-detail-page">
        <div className="portfolio-detail-not-found">
          <span>✦</span>
          <h1>Design Not Found</h1>
          <p>
            This embroidery design could not be found in the portfolio.
          </p>

          <Link to="/portfolio" className="detail-back-button">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="portfolio-detail-page">
      <section className="portfolio-detail">
        <div className="portfolio-detail-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-detail-image"
          />
        </div>

        <div className="portfolio-detail-content">
          <Link
            to="/portfolio"
            className="portfolio-detail-back"
          >
            ← Back to Portfolio
          </Link>

          <span className="portfolio-detail-category">
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <p className="portfolio-detail-subtitle">
            {project.subtitle}
          </p>

          <div className="portfolio-detail-line"></div>

          <p className="portfolio-detail-description">
            {project.description}
          </p>

          <div className="portfolio-detail-info">
            <div className="detail-info-item">
              <span>EMBROIDERY TYPE</span>
              <strong>{project.embroideryType}</strong>
            </div>

            <div className="detail-info-item">
              <span>STITCH TYPES</span>
              <strong>{project.stitchTypes}</strong>
            </div>

            {project.software && (
              <div className="detail-info-item">
                <span>SOFTWARE</span>
                <strong>{project.software}</strong>
              </div>
            )}

            {project.size && (
              <div className="detail-info-item">
                <span>DESIGN SIZE</span>
                <strong>{project.size}</strong>
              </div>
            )}

            {project.stitches && (
              <div className="detail-info-item">
                <span>STITCH COUNT</span>
                <strong>{project.stitches}</strong>
              </div>
            )}
          </div>

          {project.colors && project.colors.length > 0 && (
            <div className="detail-colors">
              <span>THREAD COLORS</span>

              <div className="detail-color-list">
                {project.colors.map((color) => (
                  <div
                    className="detail-color"
                    key={color}
                  >
                    <i></i>
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/#contact"
            className="detail-project-button"
          >
            Start a Project
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PortfolioDetailPage
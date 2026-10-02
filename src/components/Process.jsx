
import './Process.css'

const processSteps = [
  {
    number: '01',
    title: 'Artwork Preparation',
    text: 'I prepare the artwork for embroidery by checking shapes, details, size, and the final garment application.',
    tags: ['Artwork', 'Size', 'Placement'],
    thread: 'gold',
  },
  {
    number: '02',
    title: 'Digitizing',
    text: 'The artwork is converted into structured embroidery objects with suitable stitch types and stitch directions.',
    tags: ['Wilcom', 'Objects', 'Stitches'],
    thread: 'purple',
  },
  {
    number: '03',
    title: 'Stitch Settings',
    text: 'Density, stitch length, underlay, pull compensation, and other settings are adjusted for clean embroidery.',
    tags: ['Density', 'Underlay', 'Pull'],
    thread: 'green',
  },
  {
    number: '04',
    title: 'Sequencing',
    text: 'Objects are arranged in a practical stitch order with controlled travel, connections, and start and end points.',
    tags: ['Sequence', 'Travel', 'Order'],
    thread: 'pink',
  },
  {
    number: '05',
    title: 'Quality Check',
    text: 'The design is reviewed for stitch balance, unnecessary jumps, details, density, colors, and overall production quality.',
    tags: ['Check', 'Detail', 'Quality'],
    thread: 'blue',
  },
  {
    number: '06',
    title: 'Final Embroidery File',
    text: 'The completed design is prepared in the required machine format, ready for production and further testing.',
    tags: ['DST', 'Machine', 'Ready'],
    thread: 'maroon',
  },
]

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-thread process-thread-left" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="process-thread-line purple"
            d="M25 0 C150 70, 20 145, 135 230 S170 390, 35 560"
          />
          <path
            className="process-thread-line gold"
            d="M75 0 C165 90, 35 185, 150 300 S125 450, 65 560"
          />
        </svg>
      </div>

      <div className="process-thread process-thread-right" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="process-thread-line green"
            d="M155 0 C35 85, 165 165, 45 275 S25 430, 145 560"
          />
          <path
            className="process-thread-line maroon"
            d="M105 0 C165 100, 25 195, 135 315 S145 455, 35 560"
          />
        </svg>
      </div>

      <div className="process-inner">
        <div className="process-header">
          <div>
            <span className="process-kicker">
              <i></i>
              MY EMBROIDERY WORKFLOW
            </span>

            <h2>
              From artwork
              <span>to production.</span>
            </h2>
          </div>

          <p>
            Every design is built with stitch structure, direction, density,
            sequencing, and final production requirements in mind.
          </p>
        </div>

        <div className="process-line" aria-hidden="true"></div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article
              className={`process-card process-card-${step.thread}`}
              key={step.number}
            >
              <div className="process-card-top">
                <span className="process-number">{step.number}</span>

                <span className="process-stitch">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>

              <div className="process-icon" aria-hidden="true">
                <span className="process-icon-ring"></span>
                <span className="process-icon-dot"></span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <div className="process-tags">
                {step.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process


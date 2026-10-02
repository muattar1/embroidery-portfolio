
import './About.css'

const expertise = [
  'Stitch Direction',
  'Density Control',
  'Underlay',
  'Pull Compensation',
  'Sequencing',
  'Travel Optimization',
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about-thread about-thread-left" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="about-thread-line purple"
            d="M20 0 C145 75, 25 150, 135 235 S165 400, 35 560"
          />
          <path
            className="about-thread-line gold"
            d="M70 0 C160 95, 35 190, 150 300 S125 455, 65 560"
          />
        </svg>
      </div>

      <div className="about-thread about-thread-right" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="about-thread-line green"
            d="M155 0 C35 85, 165 170, 45 280 S30 435, 145 560"
          />
          <path
            className="about-thread-line maroon"
            d="M105 0 C165 100, 25 200, 135 315 S145 455, 35 560"
          />
        </svg>
      </div>

      <div className="about-inner">
        <div className="about-header">
          <span className="about-kicker">
            <i></i>
            ABOUT THE DIGITIZER
          </span>

          <h2>
            Turning detail
            <span>into thread.</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-visual">
            <div className="about-hoop">
              <div className="about-hoop-outer"></div>
              <div className="about-hoop-inner"></div>

              <img
                src="/portfolio/featured/floral-mandala-motif.PNG"
                alt="Floral embroidery design"
              />

              <span className="about-stitch about-stitch-one"></span>
              <span className="about-stitch about-stitch-two"></span>
              <span className="about-stitch about-stitch-three"></span>
              <span className="about-stitch about-stitch-four"></span>
            </div>

            <div className="about-needle" aria-hidden="true">
              <span></span>
            </div>

            <div className="about-caption">
              <span>WILCOM</span>
              <strong>EMBROIDERYSTUDIO</strong>
            </div>
          </div>

          <div className="about-content">
            <span className="about-role">
              EMBROIDERY DIGITIZER & CUSTOM DESIGNER
            </span>

            <h3>
              I create embroidery designs that are built for
              <em>real stitching.</em>
            </h3>

            <p>
              I specialize in machine embroidery digitizing and custom
              embroidery design, transforming logos, artwork, lettering, and
              creative ideas into structured embroidery files.
            </p>

            <p>
              My approach focuses on more than visual appearance. I pay
              attention to stitch direction, density, underlay, pull
              compensation, sequencing, travel paths, and the requirements of
              the final garment or product.
            </p>

            <div className="about-expertise">
              {expertise.map((item, index) => (
                <div className="expertise-item" key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="about-tools">
              <span>PRIMARY TOOL</span>

              <div>
                <strong>Wilcom EmbroideryStudio</strong>
                <span>Machine Embroidery Digitizing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

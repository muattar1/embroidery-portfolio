import './App.css'

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-symbol">✦</span>
          Muattar<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Start a Project <b>↗</b>
        </a>
      </header>

      <main>
        <section className="hero" id="home">

          {/* Visible decorative embroidery threads */}
          <div className="thread-art thread-art-left">
            <svg viewBox="0 0 260 500" aria-hidden="true">
              <path className="thread purple" d="M30 20 C170 70, 20 150, 150 205 S250 340, 80 470" />
              <path className="thread gold" d="M70 0 C220 100, 40 170, 190 260 S210 390, 120 500" />
              <path className="thread green" d="M10 110 C120 40, 190 150, 80 250 S20 390, 170 450" />
              <path className="thread pink" d="M140 30 C40 130, 230 180, 100 300 S60 420, 220 480" />
              <path className="thread blue" d="M200 50 C90 120, 230 210, 110 330 S90 430, 30 490" />
            </svg>
          </div>

          <div className="thread-art thread-art-right">
            <svg viewBox="0 0 300 520" aria-hidden="true">
              <path className="thread maroon" d="M260 20 C100 100, 270 150, 120 230 S30 370, 220 500" />
              <path className="thread gold" d="M220 0 C70 80, 270 190, 130 280 S90 420, 270 510" />
              <path className="thread green" d="M280 100 C150 40, 100 180, 220 250 S170 400, 40 480" />
              <path className="thread pink" d="M130 20 C280 100, 80 190, 220 320 S250 420, 100 510" />
              <path className="thread purple" d="M40 50 C190 120, 20 220, 170 300 S280 420, 80 500" />
            </svg>
          </div>

          {/* Small floating thread stitches */}
          <div className="floating-stitches">
            <span className="stitch s1"></span>
            <span className="stitch s2"></span>
            <span className="stitch s3"></span>
            <span className="stitch s4"></span>
            <span className="stitch s5"></span>
            <span className="stitch s6"></span>
            <span className="stitch s7"></span>
            <span className="stitch s8"></span>
            <span className="stitch s9"></span>
            <span className="stitch s10"></span>
          </div>

          <div className="hero-content">
            <div className="hero-kicker">
              <span className="needle-icon">✦</span>
              MACHINE EMBROIDERY DIGITIZING
            </div>

            <h1>
              Where artwork
              <span>becomes thread.</span>
            </h1>

            <div className="stitched-divider">
              <i></i>
              <span></span>
              <i></i>
              <span></span>
              <i></i>
            </div>

            <p className="hero-text">
              Custom embroidery digitizing created with careful stitch
              direction, density, sequencing, detail, and production quality.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="primary-button">
                Explore Embroidery
                <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Start a Project
              </a>
            </div>

            <div className="hero-details">
              <div>
                <span className="detail-icon purple-dot"></span>
                <strong>Wilcom</strong>
                <small>Digitizing</small>
              </div>

              <div>
                <span className="detail-icon gold-dot"></span>
                <strong>Stitch</strong>
                <small>Precision</small>
              </div>

              <div>
                <span className="detail-icon green-dot"></span>
                <strong>Custom</strong>
                <small>Embroidery</small>
              </div>
            </div>
          </div>

          <div className="hero-artwork">

            {/* Embroidery hoop */}
            <div className="hoop">
              <div className="hoop-inner">
                <div className="hoop-stitches"></div>

                <img
                  src="/portfolio/featured/realistic-rose-bouquet.PNG"
                  alt="Realistic rose bouquet embroidery design"
                />

                <div className="image-thread-overlay"></div>
              </div>
            </div>

            {/* Thread spool */}
            <div className="thread-spool">
              <div className="spool-top"></div>
              <div className="spool-body"></div>
              <div className="spool-bottom"></div>
              <div className="spool-thread"></div>
            </div>

            {/* Needle */}
            <div className="needle">
              <span></span>
            </div>

            <div className="artwork-caption">
              <span>FEATURED WORK</span>
              <strong>Realistic Rose Bouquet</strong>
              <small>Realistic Thread Embroidery</small>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default App
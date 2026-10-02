import './Footer.css'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const footerServices = [
  'Logo Digitizing',
  'Custom Embroidery',
  'Lettering & Monograms',
  'Cap & Headwear',
  'Garment Embroidery',
  'Patch & Applique',
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-thread" aria-hidden="true">
        <svg viewBox="0 0 1400 160" preserveAspectRatio="none">
          <path
            className="footer-thread-line purple"
            d="M0 95 C180 10, 330 150, 520 70 S850 15, 1040 85 S1240 150, 1400 55"
          />
          <path
            className="footer-thread-line gold"
            d="M0 125 C190 45, 330 165, 560 95 S820 35, 1060 110 S1240 155, 1400 80"
          />
          <path
            className="footer-thread-line green"
            d="M0 70 C170 150, 340 20, 540 105 S820 155, 1020 65 S1230 20, 1400 105"
          />
        </svg>
      </div>

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">M</span>

              <span className="footer-logo-text">
                <strong>MUATTAR</strong>
                <small>EMBROIDERY DIGITIZER</small>
              </span>
            </a>

            <p>
              Custom machine embroidery digitizing created with careful stitch
              structure, detail, and production quality.
            </p>

            <span className="footer-tool">
              <i></i>
              WILCOM EMBROIDERYSTUDIO
            </span>
          </div>

          <div className="footer-column">
            <span className="footer-heading">NAVIGATION</span>

            <nav className="footer-links">
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-services">
            <span className="footer-heading">SERVICES</span>

            <div className="footer-service-list">
              {footerServices.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

          <div className="footer-column footer-cta">
            <span className="footer-heading">START A PROJECT</span>

            <h3>
              Let's turn your
              <span>artwork into thread.</span>
            </h3>

            <a href="#contact" className="footer-button">
              Contact Me
              <strong>↗</strong>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Muattar — Embroidery Digitizer
          </span>

          <span>
            Machine Embroidery · Custom Digitizing · Wilcom
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
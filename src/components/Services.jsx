
import './Services.css'

const services = [
  {
    number: '01',
    title: 'Logo Digitizing',
    text: 'Clean, production-ready embroidery digitizing from logos and brand artwork with controlled stitch direction, density, and detail.',
    tags: ['Logo', 'Satin', 'Tatami'],
  },
  {
    number: '02',
    title: 'Custom Embroidery',
    text: 'Custom artwork converted into machine embroidery with attention to stitch structure, sequencing, color, and fabric application.',
    tags: ['Custom', 'Artwork', 'Digitizing'],
  },
  {
    number: '03',
    title: 'Lettering & Monograms',
    text: 'Embroidery lettering and monograms designed for clean readability, balanced spacing, and reliable stitching at the required size.',
    tags: ['Text', 'Monogram', 'Lettering'],
  },
  {
    number: '04',
    title: 'Cap & Headwear',
    text: 'Embroidery designs prepared specifically for caps and curved surfaces with appropriate stitch planning and density.',
    tags: ['Caps', 'Headwear', '3D / Flat'],
  },
  {
    number: '05',
    title: 'Garment Embroidery',
    text: 'Embroidery designs for shirts, jackets, dresses, sleeves, fronts, backs, cuffs, and other garment placements.',
    tags: ['Shirts', 'Jackets', 'Dresses'],
  },
  {
    number: '06',
    title: 'Patch & Applique',
    text: 'Patch and applique embroidery prepared with clean borders, suitable stitch coverage, and practical production structure.',
    tags: ['Patch', 'Applique', 'Border'],
  },
  {
    number: '07',
    title: 'Image to Embroidery',
    text: 'Selected artwork and images transformed into embroidery while preserving the important shapes, colors, and visual details.',
    tags: ['Image', 'Thread', 'Detail'],
  },
  {
    number: '08',
    title: 'Resize & Edit',
    text: 'Existing embroidery files adjusted for size, stitch balance, density, sequencing, and production requirements.',
    tags: ['Resize', 'Edit', 'Optimize'],
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-thread services-thread-left" aria-hidden="true">
        <svg viewBox="0 0 160 500">
          <path
            className="service-thread purple"
            d="M20 0 C130 80, 20 140, 120 220 S150 370, 40 500"
          />
          <path
            className="service-thread gold"
            d="M70 0 C150 100, 30 190, 130 290 S120 420, 70 500"
          />
        </svg>
      </div>

      <div className="services-thread services-thread-right" aria-hidden="true">
        <svg viewBox="0 0 160 500">
          <path
            className="service-thread green"
            d="M140 0 C30 90, 150 170, 40 270 S30 410, 130 500"
          />
          <path
            className="service-thread maroon"
            d="M90 0 C150 100, 20 190, 120 300 S130 420, 30 500"
          />
        </svg>
      </div>

      <div className="services-inner">
        <div className="services-header">
          <div>
            <span className="services-kicker">
              <i></i>
              EMBROIDERY SERVICES
            </span>

            <h2>
              From artwork
              <span>to stitch.</span>
            </h2>
          </div>

          <p>
            Professional embroidery digitizing for logos, artwork, lettering,
            garments, caps, patches, and custom embroidery applications.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">{service.number}</span>

                <span className="service-arrow">↗</span>
              </div>

              <div className={`service-icon service-icon-${service.number}`}>
  {service.number === '01' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 18h40v28H12z" />
      <path d="M18 25h28M18 32h20M18 39h25" />
      <circle cx="49" cy="46" r="5" />
    </svg>
  )}

  {service.number === '02' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10C25 20 14 25 14 38c0 9 8 16 18 16s18-7 18-16C50 25 39 20 32 10Z" />
      <path d="M32 19v28M20 34h24M24 25c5 4 11 4 16 0M24 43c5-4 11-4 16 0" />
    </svg>
  )}

  {service.number === '03' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 51 30 13h5l14 38M21 39h25" />
      <path d="M23 25h20" />
      <path d="M13 55h38" />
    </svg>
  )}

  {service.number === '04' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M11 35c7-13 18-20 32-20 7 0 11 4 11 9v12H11Z" />
      <path d="M11 35c10 5 25 5 43 1" />
      <path d="M38 15c1 7 5 12 12 14" />
      <path d="M22 35v7" />
    </svg>
  )}

  {service.number === '05' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="m22 13 10 7 10-7 9 8 6 9-9 5v18H16V35l-9-5 6-9 9-8Z" />
      <path d="M32 20v26M21 31h22" />
      <path d="M25 37h14" />
    </svg>
  )}

  {service.number === '06' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 18h36v28H14z" />
      <path d="M20 18v28M28 18v28M36 18v28M44 18v28" />
      <path d="M14 26h36M14 34h36M14 42h36" />
    </svg>
  )}

  {service.number === '07' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="13" width="44" height="38" rx="3" />
      <circle cx="23" cy="25" r="5" />
      <path d="m14 44 12-11 8 7 6-6 10 10" />
      <path d="M42 8v15M36 17l6 6 6-6" />
    </svg>
  )}

  {service.number === '08' && (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 12h28M18 52h28M12 18v28M52 18v28" />
      <path d="m22 20-7 7 7 7M42 20l7 7-7 7" />
      <path d="M15 27h34M15 37h34" />
    </svg>
  )}
</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
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

export default Services


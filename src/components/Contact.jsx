
import emailjs from '@emailjs/browser'
import './Contact.css'

const contactServices = [
  'Logo Digitizing',
  'Custom Embroidery',
  'Lettering & Monograms',
  'Cap & Headwear',
  'Garment Embroidery',
  'Patch & Applique',
]

const SERVICE_ID = 'service_qsolwhn'
const TEMPLATE_ID = 'template_1024id8'

// EmailJS Public Key yahan add karna hai
const PUBLIC_KEY = '6UeCb29squg27aKW_'

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    const projectType = formData.get('project_type')
    const message = formData.get('message')?.trim()

    if (!name || !email || !projectType || !message) {
      alert('Please complete all project details before sending.')
      return
    }

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      )

      alert('Your project inquiry has been sent successfully.')

      form.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)

      alert(
        'Sorry, your message could not be sent. Please try again.'
      )
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-thread contact-thread-left" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="contact-thread-line purple"
            d="M20 0 C145 75, 25 150, 135 235 S165 400, 35 560"
          />
          <path
            className="contact-thread-line gold"
            d="M70 0 C160 95, 35 190, 150 300 S125 455, 65 560"
          />
        </svg>
      </div>

      <div className="contact-thread contact-thread-right" aria-hidden="true">
        <svg viewBox="0 0 180 560">
          <path
            className="contact-thread-line green"
            d="M155 0 C35 85, 165 170, 45 280 S30 435, 145 560"
          />
          <path
            className="contact-thread-line maroon"
            d="M105 0 C165 100, 25 200, 135 315 S145 455, 35 560"
          />
        </svg>
      </div>

      <div className="contact-inner">
        <div className="contact-header">
          <span className="contact-kicker">
            <i></i>
            START A PROJECT
          </span>

          <h2>
            Have artwork?
            <span>Let's stitch it.</span>
          </h2>

          <p>
            Send your artwork, embroidery requirements, or project details.
            I can review the design and help determine the right digitizing
            approach for your garment or product.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-hoop" aria-hidden="true">
              <div className="contact-hoop-ring"></div>
              <div className="contact-hoop-inner"></div>

              <div className="contact-needle">
                <span></span>
              </div>

              <div className="contact-thread-ball">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="contact-info-content">
              <span className="contact-small-label">
                WHAT I CAN HELP WITH
              </span>

              <div className="contact-service-list">
                {contactServices.map((service, index) => (
                  <div className="contact-service" key={service}>
                    <span>0{index + 1}</span>
                    <strong>{service}</strong>
                  </div>
                ))}
              </div>

              <div className="contact-note">
                <span>PRODUCTION FOCUS</span>
                <strong>
                  Stitch quality · Detail · Structure · Production readiness
                </strong>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-heading">
              <span>PROJECT DETAILS</span>
              <p>
                Tell me what you need and include the important details of
                your embroidery project.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <label>
                  <span>Your Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Project Type</span>
                <select
                  name="project_type"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {contactServices.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Project Details</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your artwork, size, garment/product, and embroidery requirements..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Project Inquiry</span>
                <strong>↗</strong>
              </button>

              <p className="contact-form-note">
                Artwork and project specifications can be discussed before
                starting the digitizing work.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useState } from 'react'
import { ArrowRight, Check, Clock, Leaf, MapPin, Menu, MessageCircle, X } from 'lucide-react'
import './App.css'
import cow1 from './assets/cow1.jpg'
import cow2 from './assets/cow2.jpg'
import cow3 from './assets/cow3.jpg'
import cow4 from './assets/cow4.jpg'
import cow5 from './assets/cow5.jpg'
import cow6 from './assets/cow6.jpg'
import cow7 from './assets/cow7.jpg'
import cow8 from './assets/cow8.jpg'
import cow9 from './assets/cow9.jpg'
import cow10 from './assets/cow10.jpg'
import sheep1 from './assets/r1.jpeg'
import sheep2 from './assets/r2.jpeg'
import sheep3 from './assets/r3.jpg'
import poultry1 from './assets/p1.jpg'
import poultry2 from './assets/p2.jpg'
import poultry3 from './assets/p3.jpg'
import weather from './assets/weather.jpg'

const animals = [
  {
    id: 1,
    name: 'Healthy local cattle',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow1,
    alt: 'Cattle in a pasture at sunset',
    imagePosition: 'center 47%',
    price: '₦ 800,000',
  },
  {
    id: 2,
    name: 'Strong, healthy sheep',
    type: 'Sheep',
    detail: 'Raised with care · Ask us for details',
    image: sheep1,
    alt: 'White sheep with dark markings',
    imagePosition: 'center 52%',
    price: '₦ 150,000',
  },
  {
    id: 3,
    name: 'Farm-raised poultry',
    type: 'Poultry',
    detail: 'Availability varies · Get in touch',
    image: poultry1,
    alt: 'Colorful rooster at the farm',
    imagePosition: 'center 43%',
    price: '₦ 10,000',
  },
  
  {
    id: 5,
    name: 'Highland sheep',
    type: 'Sheep',
    detail: 'Raised with care · Ask us for details',
    image: sheep2,
    alt: 'Brown and white horned sheep',
    imagePosition: 'center 43%',
    price: '₦ 120,000',
  },
  {
    id: 6,
    name: 'Farm-raised chickens',
    type: 'Poultry',
    detail: 'Availability varies · Get in touch',
    image: poultry2,
    alt: 'Brown chickens in a coop',
    imagePosition: 'center 43%',
    price: '₦ 10,000',
  },
  {
    id: 7,
    name: 'Highland cattle',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow6,
    alt: 'Cattle standing in green pasture',
    imagePosition: 'center 43%',
    price: '₦ 950,000'
  },
  {
    id: 8,
    name: 'Sheep from the farm',
    type: 'Sheep',
    detail: 'Raised with care · Ask us for details',
    image: sheep3,
    alt: 'Two sheep standing in a green outdoor area',
    imagePosition: 'center 49%',
    price: '₦ 300,000'
  },
  {
    id: 9,
    name: 'Healthy farm poultry',
    type: 'Poultry',
    detail: 'Availability varies · Get in touch',
    image: poultry3,
    alt: 'Brown chickens in a farm enclosure',
    imagePosition: 'center 43%',
    price: '₦ 8,000'
  },
  
  {
    id: 12,
    name: 'Cattle at the farm',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow2,
    alt: 'Cattle at the farm',
    imagePosition: 'center 49%',
    price: '₦ 750,000'
  },
  {
    id: 13,
    name: 'Cattle in the pasture',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow4,
    alt: 'Cattle in a pasture',
    imagePosition: 'center 49%',
    price: '₦ 800,000'
  },
  {
    id: 14,
    name: 'Cattle at MANJOS',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow5,
    alt: 'Cattle at the farm',
    imagePosition: 'center 49%',
    price: '₦ 900,000'
  },
  {
    id: 15,
    name: 'Cattle in the highlands',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow7,
    alt: 'Cattle in the highlands',
    imagePosition: 'center 49%',
    price: '₦ 1,000,000'
  },
  {
    id: 16,
    name: 'Cattle grazing',
    type: 'Cows',
    detail: 'Well cared for · Inspection by arrangement',
    image: cow8,
    alt: 'Cattle grazing in a pasture',
    imagePosition: 'center 49%',
    price: '₦ 600,000'
  },
]

const filters = ['All animals', 'Cows', 'Sheep', 'Poultry']

function getAnimalWhatsAppUrl(animal) {
  const animalNumber = String(animal.id).padStart(2, '0')
  const photoUrl = new URL(animal.image, window.location.href).href
  const message = `Hello MANJOS, I am interested in Animal #${animalNumber} (${animal.name}, ${animal.type}). Could you please confirm its availability and details? Photo: ${photoUrl}`

  return `https://wa.me/2348130532473?text=${encodeURIComponent(message)}`
}

function BrandMark({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="MANJOS Livestock and Farms home">
      <span className="brand-icon"><Leaf size={23} /></span>
      <span className="brand-name">MANJOS<span>Livestock &amp; Farms</span></span>
    </a>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All animals')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleAnimals = animals.filter((animal) => {
    if (activeFilter === 'All animals') return true
    return animal.type === activeFilter
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        Rooted in the highlands of Cross River State
        <a href="#location">Find us <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <div className="nav-shell">
          <BrandMark />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#animals" onClick={closeMenu}>Our animals</a>
            <a href="#about" onClick={closeMenu}>Our farm</a>
            <a href="#location" onClick={closeMenu}>Location</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span /> Good stock. Highland roots.</div>
            <h1>Raised with care.<br /><em>Rooted in nature.</em></h1>
            <p className="hero-description">
              A closer look at livestock and life at MANJOS Livestock &amp; Farms, nestled in the beautiful highlands of Obudu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#animals">Explore our animals <ArrowRight size={17} /></a>
              <a className="text-link" href="#about">A little about us <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-icon"><MapPin size={18} /></span>
              <span><strong>Obudu Mountain Resort</strong><small>Cross River State, Nigeria</small></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src={cow10} alt="Cattle grazing in a green highland pasture" fetchPriority="high" />
            </div>
            <div className="hero-photo-label">
              <span className="photo-label-icon"><Leaf size={19} /></span>
              <span><strong>From the highlands</strong><small>Obudu, Cross River</small></span>
            </div>
            <span className="hero-image-caption">A place to grow, naturally.</span>
          </div>
          <div className="hero-bottom-line" aria-hidden="true"><span>MANJOS FARM JOURNAL</span><span>06°40' N &nbsp; 09°10' E</span></div>
        </section>

        <section className="trust-strip" aria-label="Our approach">
          <div><span className="trust-number">01</span><span>Local knowledge<strong>Rooted in Obudu</strong></span></div>
          <div><span className="trust-number">02</span><span>Know before you go<strong>Ask before visiting</strong></span></div>
          <div><span className="trust-number">03</span><span>Meet in person<strong>Arrange an inspection</strong></span></div>
          <a href="#animals">See what we do <ArrowRight size={16} /></a>
        </section>

        <section className="animals-section section-shell" id="animals">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> A look around the farm</div>
              <h2>Life on the <em>land.</em></h2>
              <p>Every animal has a story. Here’s a glimpse of the livestock and highland surroundings at MANJOS.</p>
            </div>
            <a className="view-all-link" href="#contact">Ask about availability <ArrowRight size={17} /></a>
          </div>

          <div className="listing-toolbar">
            <div className="filter-tabs" role="group" aria-label="Filter animals">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="example-notice"><span /> Demonstration photos · details to be confirmed</span>
          </div>

          <div className="animal-grid">
            {visibleAnimals.map((animal) => (
              <article className="animal-card" key={animal.id}>
                <a
                  className="animal-image"
                  href={getAnimalWhatsAppUrl(animal)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ask about ${animal.name}, animal number ${animal.id}`}
                >
                  <img
                    src={animal.image}
                    alt={animal.alt}
                    loading="lazy"
                    style={{ objectPosition: animal.imagePosition }}
                  />
                  <span className="example-tag">{animal.type}</span>
                  <span className="card-number">{String(animal.id).padStart(2, '0')}</span>
                </a>
                <div className="animal-info">
                  <div className="animal-type">Example <span>·</span> Availability to confirm</div>
                  <h3>{animal.name}</h3>
                  <h3>{animal.price}</h3>
                  <p>{animal.detail}</p>
                  <div className="animal-card-bottom">
                    <a
                      href={getAnimalWhatsAppUrl(animal)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire about ${animal.name}, animal number ${animal.id} on WhatsApp`}
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="listing-disclaimer"><Clock size={15} /> Photos are examples only, not confirmed sale listings. Please confirm animals, details and prices directly before making plans.</p>
        </section>

        <section className="about-section" id="about">
          <div className="about-image">
            <img src={cow9} alt="Cattle grazing in the rolling green hills of the Obudu highlands" loading="lazy" />
            <div className="about-image-stamp"><span>FARMED</span><span>WITH CARE</span><Leaf size={24} /></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span /> A little about MANJOS</div>
            <h2>Good things grow<br />with <em>good care.</em></h2>
            <p className="about-lede">MANJOS Livestock &amp; Farms is a livestock business in Obudu, Cross River State. We’re making it easier for buyers to get to know the animals before making the journey to see them.</p>
            <p className="about-body">Browse the photos, ask questions about the animal you have in mind, and arrange a visit to see it in person. Clear conversations make for better visits.</p>
            <a className="button button-outline" href="#contact">Let’s have a conversation <ArrowRight size={17} /></a>
            <div className="about-footnote"><Check size={16} /> Buyers are encouraged to inspect animals in person.</div>
          </div>
        </section>

        <section className="visit-section section-shell" id="location">
          <div className="visit-copy">
            <div className="eyebrow"><span /> Come find us</div>
            <h2>Highland air.<br /><em>Open pasture.</em></h2>
            <p>Find MANJOS Livestock &amp; Farms around Obudu Mountain Resort in Cross River State, Nigeria. Get in touch to confirm the location and arrange your visit before setting off.</p>
            <a
              className="button button-primary"
              href="https://maps.app.goo.gl/eVkmUyT8p4NT2xm78"
              target="_blank"
              rel="noreferrer"
            >
              Explore the area <ArrowRight size={17} />
            </a>
          </div>
          <div className="visit-card">
            <img src={cow3} alt="" loading="lazy" />
            <div className="visit-card-overlay" />
            <div className="visit-card-content">
              <span className="visit-pin"><MapPin size={20} /></span>
              <span className="visit-card-label">OUR PART OF THE WORLD</span>
              <strong>Obudu Mountain Resort</strong>
              <span>Cross River State, Nigeria</span>
              <a href="https://maps.app.goo.gl/eVkmUyT8p4NT2xm78" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15} /></a>
            </div>
            <span className="visit-coordinate">06°40' N &nbsp; 09°10' E</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-image">
            <img src={weather} alt="Clouds rolling over the green mountains and winding road near Obudu" loading="lazy" />
            <span className="contact-photo-caption">OUR HOME · CROSS RIVER STATE</span>
          </div>
          <div className="contact-copy">
            <div className="eyebrow eyebrow-light">Come say hello</div>
            <h2>A good farm is worth<br /><em>finding.</em></h2>
            <p>We’re based near Obudu Mountain Resort in Cross River State. Send us a message before setting out and we can talk through what you’re looking for and arrange an inspection.</p>
            <a className="button contact-cta" href="https://wa.me/2348130532473" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Start a conversation
            </a>
            <a className="contact-location" href="https://maps.app.goo.gl/eVkmUyT8p4NT2xm78" target="_blank" rel="noreferrer">
              <MapPin size={19} /> Obudu Mountain Resort, Cross River State, Nigeria
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <BrandMark light />
          <p>Good stock. Highland roots.<br />Obudu, Cross River State, Nigeria.</p>
          <a className="back-to-top" href="#home">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MANJOS Livestock &amp; Farms</span>
          <span>Animals and details should be confirmed before purchase.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/2348130532473"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MANJOS on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={27} aria-hidden="true" />
      </a>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import fallbackImage from './assets/maison-crumb-reference.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#products' },
  { label: 'Cakes', href: '#products' },
  { label: 'Pastries', href: '#products' },
  { label: 'Breads', href: '#products' },
  { label: 'Desserts', href: '#products' },
  { label: 'Gifts', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const features = [
  { title: 'Premium Ingredients', text: 'Only the finest, always fresh.' },
  { title: 'Expertly Crafted', text: 'Made with passion and precision.' },
  { title: 'Bespoke Creations', text: 'Customized for your special moments.' },
  { title: 'Elegant Packaging', text: 'Beautifully packed with care.' },
  { title: 'Timely Delivery', text: 'Right in time, every time.' },
  { title: 'Made With Love', text: 'Every detail truly matters.' },
]

const products = [
  {
    category: 'Cakes',
    name: 'Belgian Chocolate Cake',
    description: 'Moist cocoa sponge layered with silky ganache.',
    price: 'PKR 4,200',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Birthday Cakes',
    name: 'Classic Vanilla Celebration',
    description: 'Elegant vanilla cream cake for special occasions.',
    price: 'PKR 3,800',
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Pastries',
    name: 'Butter Layer Pastries',
    description: 'Flaky, golden pastries with delicate artisanal layers.',
    price: 'PKR 680',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Breads',
    name: 'Artisan Sourdough Loaf',
    description: 'Slow fermented loaf with deep aroma and crisp crust.',
    price: 'PKR 950',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Brownies',
    name: 'Fudgy Brownie Box',
    description: 'Dense chocolate brownies with rich cocoa notes.',
    price: 'PKR 550',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Cupcakes',
    name: 'Chocolate Hazelnut Cupcake',
    description: 'Soft cupcake crowned with smooth praline buttercream.',
    price: 'PKR 450',
    image:
      'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Dessert Boxes',
    name: 'Mini Indulgence Box',
    description: 'Curated collection of signature petit desserts.',
    price: 'PKR 2,750',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Gifts',
    name: 'Maison Gift Collection',
    description: 'Luxury bakery gift assortment with elegant packaging.',
    price: 'PKR 3,600',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
]

const heroImage =
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=2000&q=80'

function BakeryImage({ src, alt, className, loading = 'lazy' }) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setImgSrc(fallbackImage)}
    />
  )
}

function Navbar({ mobileOpen, setMobileOpen, scrolled }) {
  const handleMobileNavigate = () => setMobileOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#d6c3a6] bg-[#fbf3e7]/95 shadow-soft backdrop-blur-xl'
          : 'border-[#e7d8c1] bg-[#fff9f0]/92 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="min-w-0" onClick={handleMobileNavigate}>
          <div className="text-nowrap font-display text-2xl font-semibold tracking-[0.08em] text-espresso sm:text-3xl">
            Maison Bakery
          </div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#9f7c56] sm:text-xs">
            Luxury Patisserie
          </p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-espresso transition hover:text-caramel">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button className="hidden rounded-full bg-espresso px-5 py-2 text-sm font-medium text-cream transition hover:-translate-y-0.5 hover:bg-mocha md:block">
            Order on WhatsApp
          </button>
          <button
            type="button"
            className="rounded-md border border-mocha p-2 text-espresso lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-[#d7c7ae] bg-cream lg:hidden">
          <div className="mx-auto grid w-full max-w-7xl gap-1 px-3 py-4 sm:px-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-full rounded-md px-3 py-2 text-sm font-medium text-espresso hover:bg-latte"
                onClick={handleMobileNavigate}
              >
                {item.label}
              </a>
            ))}
            <button className="mt-3 w-full rounded-full bg-espresso px-5 py-2 text-sm font-medium text-cream">
              Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2b1b11]" />
      <BakeryImage
        src={heroImage}
        alt="Luxury bakery hero"
        className="h-[66vh] min-h-[390px] w-full max-w-full object-cover object-center sm:h-[74vh] sm:min-h-[500px]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f130a]/88 via-[#2f1e13]/68 to-[#2f1e13]/28" />
      <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-center px-3 sm:px-6 lg:px-8">
        <div className="max-w-xl text-cream">
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-latte sm:mb-4 sm:text-sm sm:tracking-[0.3em]">Baked with love, made for memories</p>
          <h1 className="font-display text-4xl leading-[0.95] drop-shadow-lg sm:text-6xl">Indulge in Pure Delight</h1>
          <p className="mt-4 max-w-lg text-sm text-[#f4e8d8] sm:mt-5 sm:text-base">
            Exquisite cakes, pastries and desserts crafted with the finest ingredients to make every moment special.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 min-[420px]:flex-row sm:mt-8 sm:flex-wrap sm:gap-3">
            <button className="w-full rounded-full border border-cream bg-cream px-5 py-2.5 text-sm font-semibold text-espresso transition hover:-translate-y-0.5 hover:bg-latte min-[420px]:w-auto sm:px-6 sm:py-3">
              Order on WhatsApp
            </button>
            <button className="w-full rounded-full border border-cream/80 px-5 py-2.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-cream/15 min-[420px]:w-auto sm:px-6 sm:py-3">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-[#e3d1b6] bg-gradient-to-b from-[#fff8ee] to-[#f5e7d2] p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="font-display text-xl text-mocha">{feature.title}</h3>
            <p className="mt-2 text-sm text-[#5e4b3b]">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 min-[420px]:flex-row min-[420px]:items-end sm:mb-8 sm:gap-4">
        <h2 className="font-display text-3xl text-espresso sm:text-5xl">Our Creations</h2>
        <button className="rounded-full border border-espresso px-4 py-2 text-sm font-medium text-espresso transition hover:bg-espresso hover:text-cream sm:px-5">
          View All
        </button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-2xl border border-[#dcc8aa] bg-gradient-to-b from-[#fffaf3] to-white shadow-[0_8px_22px_rgba(64,38,16,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(64,38,16,0.18)]"
          >
            <div className="overflow-hidden">
              <div className="bg-[#d9c2a2]">
                <BakeryImage
                src={product.image}
                alt={product.name}
                className="aspect-[4/3] w-full max-w-full object-cover transition duration-500 group-hover:scale-105"
                loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
            <div className="space-y-2 p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#a1815b]">{product.category}</p>
              <h3 className="font-display text-2xl leading-tight text-espresso">{product.name}</h3>
              <p className="text-sm text-[#6e5a49]">{product.description}</p>
              <p className="pt-1 text-base font-semibold tracking-wide text-mocha">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 sm:pb-14 lg:px-8">
      <div className="rounded-2xl border border-[#dcc7a8] bg-gradient-to-r from-[#f8ebd9] via-[#f5e5cf] to-[#efdbc0] p-6 shadow-soft sm:p-8">
        <p className="font-display text-2xl text-mocha sm:text-4xl">“The perfect balance of taste, design and quality. Maison Bakery never disappoints!”</p>
        <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#715f4f] sm:text-sm sm:tracking-[0.2em]">- Sarah Ahmed</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-[#d7c7ae] bg-gradient-to-b from-[#f8ecda] to-[#f2e2cb]">
      <div className="mx-auto grid max-w-7xl gap-8 px-3 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-display text-3xl tracking-[0.06em] text-espresso">Maison Bakery</h3>
          <p className="mt-3 max-w-xs text-sm text-[#665443]">Crafting moments of happiness with luxurious bakes made from the finest ingredients.</p>
        </div>
        <div>
          <h4 className="font-display text-2xl text-espresso">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#665443]">
            {navLinks.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-caramel">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl text-espresso">Get in Touch</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#665443]">
            <li>+92 300 1234 567</li>
            <li>@maisonbakery.pk</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#d7c7ae] px-4 py-4 text-center text-sm text-[#665443]">
        © 2026 Maison Bakery. All Rights Reserved.
      </div>
    </footer>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-clip bg-gradient-to-b from-[#fff9f0] via-[#fbf4e8] to-[#f7ecdb]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />
      <Hero />
      <FeatureGrid />
      <ProductSection />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App

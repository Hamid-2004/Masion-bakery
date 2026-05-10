import { useState } from 'react'
import logo from './assets/maison-crumb-logo.png'
import reference from './assets/maison-crumb-reference.png'

const navLinks = ['Home', 'Menu', 'Cakes', 'Pastries', 'Breads', 'Desserts', 'Gifts', 'About', 'Contact']

const features = [
  { title: 'Premium Ingredients', text: 'Only the finest, always fresh.' },
  { title: 'Expertly Crafted', text: 'Made with passion and precision.' },
  { title: 'Bespoke Creations', text: 'Customized for your special moments.' },
  { title: 'Elegant Packaging', text: 'Beautifully packed with care.' },
  { title: 'Timely Delivery', text: 'Right in time, every time.' },
  { title: 'Made With Love', text: 'Every detail truly matters.' },
]

const products = [
  { name: 'Belgian Chocolate Cake', description: 'Moist sponge with rich ganache layers.', price: 'PKR 4,200' },
  { name: 'Classic Vanilla Cake', description: 'Soft vanilla sponge and silky cream.', price: 'PKR 3,800' },
  { name: 'Chocolate Hazelnut Cupcake', description: 'Delicate crumb with praline frosting.', price: 'PKR 450' },
  { name: 'Fudgy Brownie Box', description: 'Rich cocoa notes with a crackly top.', price: 'PKR 550' },
  { name: 'Mini Indulgence Box', description: 'A curated gift box of signature treats.', price: 'PKR 2,750' },
]

function Navbar({ mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d7c7ae] bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        <img src={logo} alt="Maison Crumb Luxury Bakery" className="h-9 w-auto max-w-[210px] min-w-0 sm:h-12 sm:max-w-[300px]" />
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-espresso transition hover:text-caramel">
              {item}
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
              <a key={item} href="#" className="w-full rounded-md px-3 py-2 text-sm font-medium text-espresso hover:bg-latte">
                {item}
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
    <section className="relative overflow-hidden">
      <img src={reference} alt="Luxury bakery hero" className="h-[62vh] min-h-[360px] w-full max-w-full object-cover object-center sm:h-[70vh] sm:min-h-[440px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2f1e13]/80 via-[#2f1e13]/45 to-transparent" />
      <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-center px-3 sm:px-6 lg:px-8">
        <div className="max-w-lg text-cream">
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-latte sm:mb-4 sm:text-sm sm:tracking-[0.3em]">Baked with love, made for memories</p>
          <h1 className="font-display text-4xl leading-[0.95] sm:text-6xl">Indulge in Pure Delight</h1>
          <p className="mt-4 max-w-md text-sm text-[#f1e7da] sm:mt-5 sm:text-base">
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

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-clip">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />

      <section className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-[#ddcfbc] bg-[#f9f4eb] p-4 text-center transition hover:-translate-y-1 hover:shadow-soft">
              <h3 className="font-display text-xl text-mocha">{feature.title}</h3>
              <p className="mt-2 text-sm text-[#5e4b3b]">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 min-[420px]:flex-row min-[420px]:items-end sm:mb-8 sm:gap-4">
          <h2 className="font-display text-3xl text-espresso sm:text-5xl">Our Creations</h2>
          <button className="rounded-full border border-espresso px-4 py-2 text-sm font-medium text-espresso transition hover:bg-espresso hover:text-cream sm:px-5">
            View All
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-[#d7c7ae] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <img
                src={reference}
                alt={product.name}
                className="h-44 w-full max-w-full object-cover"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="p-4">
                <h3 className="font-display text-2xl leading-tight text-espresso">{product.name}</h3>
                <p className="mt-2 text-sm text-[#6e5a49]">{product.description}</p>
                <p className="mt-4 text-base font-semibold tracking-wide text-mocha">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <div className="rounded-2xl bg-[#f2e7d7] p-6 sm:p-8">
          <p className="font-display text-2xl text-mocha sm:text-4xl">“The perfect balance of taste, design and quality. Maison Crumb never disappoints!”</p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#715f4f] sm:text-sm sm:tracking-[0.2em]">- Sarah Ahmed</p>
        </div>
      </section>

      <footer className="border-t border-[#d7c7ae] bg-[#f4eadb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-3 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <img src={logo} alt="Maison Crumb logo" className="h-12 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-[#665443]">Crafting moments of happiness with luxurious bakes made from the finest ingredients.</p>
          </div>
          <div>
            <h4 className="font-display text-2xl text-espresso">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#665443]">
              {['Home', 'Menu', 'Gifts', 'Atelier', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-caramel">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-2xl text-espresso">Get in Touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#665443]">
              <li>+92 300 1234 567</li>
              <li>@maisoncrumb.pk</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d7c7ae] px-4 py-4 text-center text-sm text-[#665443]">
          © 2025 Maison Crumb. All Rights Reserved.
        </div>
      </footer>
    </main>
  )
}

export default App

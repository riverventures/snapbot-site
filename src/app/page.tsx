const WA_LINK = "https://wa.me/17314727892?text=Hi%2C%20I'd%20like%20to%20try%20SnapBot";

/* ─── Icons (inline SVG) ─── */
const CameraIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ─── Shared ─── */
const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3.5 text-white font-semibold text-lg hover:bg-green-600 transition-colors ${className}`}
  >
    {children}
  </a>
);

/* ─── Sections ─── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-bold tracking-tight">
          snap<span className="text-green-500">bot</span>
        </span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-gray-600">
          <a href="#how-it-works" className="hover:text-gray-900">How It Works</a>
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-5 py-2 text-sm text-white font-medium hover:bg-green-600 transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-6 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
          10 free photos · No credit card required
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Professional Product Photos
          <br />
          <span className="text-green-500">via WhatsApp</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
          Send a product photo, describe the scene you want, and get a
          studio-quality shot in seconds. No camera, no studio, no editing
          skills needed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Get Started Free
          </CTAButton>
          <a href="#how-it-works" className="text-gray-500 hover:text-gray-700 font-medium">
            See how it works ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <CameraIcon />, title: "Send Your Photo", desc: "Snap a picture of your product and send it to our WhatsApp bot." },
    { icon: <ChatIcon />, title: "Describe the Scene", desc: "Tell us the setting — marble countertop, tropical beach, minimalist studio." },
    { icon: <SparklesIcon />, title: "Get Your Shot", desc: "Receive a professional, HD product photo ready for your store in seconds." },
  ];
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-3 text-gray-500 text-lg">Three steps. That&apos;s it.</p>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-5">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-green-500 mb-2">STEP {i + 1}</span>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">See the Transformation</h2>
        <p className="mt-3 text-gray-500 text-lg">From phone snap to store-ready in seconds.</p>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 bg-gray-50 aspect-[4/3] relative">
            <img src="/before.jpg" alt="Before — Raw product photo" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-gray-700 text-sm font-medium px-3 py-1 rounded-full">Before — Raw product photo</span>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-green-200 bg-green-50 aspect-[4/3] relative">
            <img src="/after.jpg" alt="After — AI-generated scene" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-green-600/90 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full">After — AI-generated scene</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "HD Exports", desc: "High-resolution images ready for web, social, and print." },
    { title: "AI Backgrounds", desc: "Generate any environment — studio, outdoor, lifestyle, abstract." },
    { title: "Quality Check", desc: "Each photo is evaluated for realism and product accuracy." },
    { title: "WhatsApp Delivery", desc: "Results delivered directly to your WhatsApp chat." },
    { title: "Regenerations", desc: "Not perfect? Request a new version with adjusted settings." },
    { title: "Lightning Fast", desc: "Most photos generated in under 30 seconds." },
  ];
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything You Need</h2>
        <p className="mt-3 text-gray-500 text-lg">Professional product photography, simplified.</p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      popular: false,
      features: ["Up to 100 photos / mo", "1 regeneration per photo", "HD exports", "AI backgrounds", "Email support"],
    },
    {
      name: "Pro",
      price: "$79",
      popular: true,
      features: ["Up to 500 photos / mo", "2 regenerations per photo", "Priority generation", "AI scene descriptions", "WhatsApp support"],
    },
    {
      name: "Scale-Up",
      price: "$249",
      popular: false,
      features: ["Up to 1,500 photos / mo", "3 regenerations per photo", "Bulk uploads", "Brand references upload", "Priority WhatsApp support"],
    },
  ];
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple Pricing</h2>
        <p className="mt-3 text-gray-500 text-lg">10 free photo generations. No commitment.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 text-left border-2 ${
                p.popular
                  ? "border-green-500 bg-white shadow-lg shadow-green-100 relative"
                  : "border-gray-100 bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{p.price}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center rounded-full py-3 font-semibold transition-colors ${
                  p.popular
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { name: "Sarah K.", role: "Etsy Seller", text: "I used to spend $50 per product photo at a studio. Now I get better results from my couch for a fraction of the cost." },
    { name: "James R.", role: "Shopify Store Owner", text: "My conversion rate went up 35% after switching to SnapBot photos. The AI backgrounds look incredibly real." },
    { name: "Priya M.", role: "Brand Manager", text: "We upload 200+ products a month. SnapBot saves us days of editing time and the quality is consistently great." },
  ];
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Loved by Sellers</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {quotes.map((q) => (
            <div key={q.name} className="bg-white rounded-2xl p-6 border border-gray-100 text-left">
              <p className="text-gray-600 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 text-sm">{q.name}</p>
                <p className="text-xs text-gray-400">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What image formats are supported?", a: "We accept JPG, PNG, and WebP. Results are delivered in high-resolution PNG by default." },
    { q: "How long does it take to get a photo?", a: "Most photos are generated in under 30 seconds and sent directly to your WhatsApp chat." },
    { q: "Can I use the photos for e-commerce?", a: "Absolutely. All images are commercially licensed and optimized for platforms like Shopify, Amazon, Etsy, and social media." },
    { q: "What if I don't like the result?", a: "Every plan includes regenerations. Just describe what you'd like changed and we'll generate a new version." },
    { q: "Is there a free trial?", a: "Yes! You get 10 free photo generations to try the service. No credit card required." },
    { q: "Can I upload products in bulk?", a: "Bulk uploads are available on the Scale-Up plan. Send multiple products at once and get all photos back." },
  ];
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-14 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-green-500">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Product Photos?</h2>
        <p className="mt-4 text-green-100 text-lg">Start with 10 free photos. No credit card needed.</p>
        <div className="mt-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-green-600 px-8 py-3.5 font-semibold text-lg hover:bg-green-50 transition-colors"
          >
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-semibold text-gray-600">
          snap<span className="text-green-500">bot</span>
        </span>
        <span>© {new Date().getFullYear()} SnapBot. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />
      <Hero />
      <HowItWorks />
      <BeforeAfter />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

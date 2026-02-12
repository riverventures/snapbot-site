"use client";
import React from "react";

const WA_LINK = "https://wa.me/17314727892?text=Hi%2C%20I'd%20like%20to%20try%20Booth";


/* ─── Icons (inline SVG, compact) ─── */
const CameraIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const DollarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

/* ─── Sections ─── */

function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-lg font-bold tracking-tight">
          booth
        </span>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
          <a href="#problem" className="hover:text-gray-900 transition-colors">Why Booth</a>
          <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-1.5 text-sm text-white font-medium hover:opacity-90 transition-opacity bg-green-500"
        >
          Try Free
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-24 pb-8 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium bg-green-100 text-green-700">
            10 free photos · No credit card
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Skip Expensive
            <br />
            <span className="text-green-500">Photo Shoots</span>
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-md leading-relaxed">
            Stop renting studios and hiring photographers. WhatsApp a product photo, describe the scene, get studio-quality results in 30 seconds. ~$0.50/photo.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white font-semibold text-sm hover:opacity-90 transition-opacity bg-green-500"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Start Free on WhatsApp
            </a>
            <a href="#problem" className="text-sm text-gray-400 hover:text-gray-600 font-medium transition-colors">
              See why ↓
            </a>
          </div>
        </div>
        {/* Right: before/after */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl overflow-hidden border border-gray-200 aspect-[3/4] relative">
            <img src="/before.jpg" alt="Before" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-full">Before</span>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4] relative border border-green-200">
            <img src="/after.jpg" alt="After" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 backdrop-blur text-white text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainOfStatusQuo() {
  const oldWay = [
    { icon: <DollarIcon />, label: "Rent a studio", cost: "$500–2,000/day" },
    { icon: <CameraIcon />, label: "Hire a photographer", cost: "$500–1,500/shoot" },
    { icon: <ClockIcon />, label: "Stage products, lighting, props", cost: "Hours of setup" },
    { icon: <ClockIcon />, label: "Wait for edited photos", cost: "Days to weeks" },
  ];

  return (
    <section id="problem" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Photography is Broken</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Old way */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">The Old Way</h3>
            <div className="space-y-2.5">
              {oldWay.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-300 shrink-0">{item.icon}</span>
                  <span className="text-sm text-gray-600 flex-1">{item.label}</span>
                  <span className="text-xs font-semibold text-gray-400">{item.cost}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Total per shoot</span>
              <span className="text-sm font-bold text-red-500">$2,000–5,000+ &middot; Days of work</span>
            </div>
          </div>

          {/* Booth way */}
          <div className="rounded-xl border-2 p-5 border-green-500 bg-green-50/40">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-green-500">With Booth</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="text-green-500 shrink-0"><WhatsAppIcon /></span>
                <span className="text-sm text-gray-700">WhatsApp a product photo</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 shrink-0"><ChatIcon /></span>
                <span className="text-sm text-gray-700">Describe your scene in plain English</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 shrink-0"><SparklesIcon /></span>
                <span className="text-sm text-gray-700">Studio-quality photo in 30 seconds</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-green-200 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Cost per photo</span>
              <span className="text-sm font-bold text-green-500">~$0.50 &middot; 30 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: <CameraIcon />, title: "Send Photo", desc: "Snap your product and send it to Booth on WhatsApp." },
    { icon: <ChatIcon />, title: "Describe Scene", desc: "Marble countertop, tropical beach, minimalist studio — you name it." },
    { icon: <SparklesIcon />, title: "Get Your Shot", desc: "Professional HD photo ready for your store in seconds." },
  ];
  return (
    <section id="how-it-works" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 bg-green-100 text-green-700">
                {s.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-500">{i + 1}</span>
                <h3 className="text-sm font-semibold text-gray-900">{s.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTypes() {
  const types = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>, label: "Cosmetics" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg>, label: "Footwear" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>, label: "Women's Wear" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>, label: "Home Decor" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>, label: "CPG" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>, label: "Jewelry" },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "Electronics" },
  ];
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tested & Proven</h2>
        <div className="flex flex-wrap gap-2">
          {types.map((t, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-700">
              <span className="text-gray-400">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>, title: "HD Exports", desc: "High-res images for web, social, and print." },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>, title: "AI Backgrounds", desc: "Any environment — studio, outdoor, lifestyle." },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Quality Check", desc: "Evaluated for realism and accuracy." },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>, title: "WhatsApp Delivery", desc: "Results sent directly to your chat." },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>, title: "Regenerations", desc: "Not right? Request a new version." },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>, title: "Under 30 Seconds", desc: "Most photos generated instantly." },
  ];
  return (
    <section id="features" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {features.map((f, i) => (
            <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div className="text-gray-400 mb-1.5">{f.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900">{f.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const plans = [
    {
      name: "Starter",
      monthly: 29,
      annual: 23,
      popular: false,
      features: ["50 photos / mo", "2 regens / photo", "HD exports", "AI backgrounds"],
    },
    {
      name: "Pro",
      monthly: 79,
      annual: 63,
      popular: true,
      features: ["500 photos / mo", "2 regens / photo", "Priority generation", "AI scene descriptions"],
    },
    {
      name: "Scale-Up",
      monthly: 249,
      annual: 199,
      popular: false,
      features: ["1,500 photos / mo", "3 regens / photo", "Bulk uploads", "Brand references"],
    },
  ];
  return (
    <section id="pricing" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
          <div className="flex items-center gap-2 ml-auto">
            <span className={`text-xs font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${annual ? "bg-green-500" : "bg-gray-300"}`}
            >
              <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${annual ? "translate-x-[1.125rem]" : "translate-x-0.5"}`} />
            </button>
            <span className={`text-xs font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}>Annual</span>
            {annual && <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold bg-green-100 text-green-700">-20%</span>}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-5 relative ${
                p.popular
                  ? "border-2 border-green-500 bg-white shadow-md shadow-green-50"
                  : "border-2 border-gray-100 bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-0.5 rounded-full bg-green-500">
                  Popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
                <div className="flex items-baseline gap-1">
                  {annual && <span className="text-sm text-gray-300 line-through">${p.monthly}</span>}
                  <span className="text-2xl font-extrabold text-gray-900">${annual ? p.annual : p.monthly}</span>
                  <span className="text-xs text-gray-400">/mo</span>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <svg className="w-3.5 h-3.5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 block text-center rounded-full py-2 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  p.popular
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">10 free photos included with every plan. No credit card to start.</p>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { name: "Sarah K.", role: "Etsy Seller", text: "I used to spend $50 per product photo at a studio. Now I get better results from my couch.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "James R.", role: "Shopify Owner", text: "Conversion rate went up 35% after switching to Booth photos.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya M.", role: "Brand Manager", text: "200+ products a month. Booth saves us days of editing time.", img: "https://randomuser.me/api/portraits/women/63.jpg" },
  ];
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Sellers Say</h2>
        <div className="grid md:grid-cols-3 gap-3">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-xl p-4 bg-gray-50 border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-3 flex items-center gap-2">
                <img src={q.img} alt={q.name} className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-gray-900">{q.name}</p>
                  <p className="text-[10px] text-gray-400">{q.role}</p>
                </div>
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
    { q: "What formats are supported?", a: "JPG, PNG, and WebP. Results delivered in high-resolution PNG." },
    { q: "How fast?", a: "Most photos generated in under 30 seconds, sent directly to WhatsApp." },
    { q: "Can I use these for e-commerce?", a: "Yes. All images are commercially licensed for Shopify, Amazon, Etsy, and social." },
    { q: "What if I don't like the result?", a: "Every plan includes regenerations. Describe what to change and get a new version." },
    { q: "Is there a free trial?", a: "10 free photo generations. No credit card required." },
    { q: "Bulk uploads?", a: "Available on the Scale-Up plan. Send multiple products at once." },
  ];
  return (
    <section id="faq" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-gray-100 pb-3">
              <h3 className="text-sm font-semibold text-gray-900">{f.q}</h3>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-10 px-6 bg-green-500">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-2xl font-bold">Start with 10 Free Photos</h2>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>No credit card. No commitment. Just send a photo.</p>
        <div className="mt-5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-semibold text-sm hover:bg-gray-50 transition-colors text-green-500"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <span className="font-semibold text-gray-500">booth</span>
        <span>&copy; {new Date().getFullYear()} Booth · trybooth.ai</span>
        <div className="flex gap-4">
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
      <PainOfStatusQuo />
      <HowItWorks />
      <ProductTypes />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

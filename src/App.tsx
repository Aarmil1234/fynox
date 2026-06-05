import React, { type ReactNode } from "react";
import { Reveal } from "./components/site/Reveal";
import { Cursor } from "./components/site/Cursor";
import { Counter } from "./components/site/Counter";
import emailjs from "@emailjs/browser"
import {
  ArrowUpRight,
  Search,
  TrendingUp,
  Target,
  Megaphone,
  PenLine,
  BarChart3,
  Sparkles,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Check,
  AlignLeft,
} from "lucide-react";

import logo from "./assets/img/Fynox-Inc-logo.webp";
import FounderSection from "./FounderSection";


const NAV = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Search, title: "Search Engine Optimization", desc: "Improve rankings, organic traffic and search visibility through strategic SEO execution.", tags: ["Technical SEO", "On-Page SEO", "Off-Page SEO"] },
  { icon: PenLine, title: "Google Ads", desc: "Capture high-intent leads through search campaigns optimized for conversions and ROI.", tags: ["Search Ads", "Call Ads", "Lead Gen"] },
  { icon: TrendingUp, title: "Meta Ads", desc: "Generate quality enquiries using Facebook and Instagram advertising campaigns.", tags: ["Lead Gen", "WhatsApp Ads", "Retargeting"] },
  { icon: Target, title: "Knowledge Panels", desc: "Build authority and credibility with a verified Google presence for brands and professionals.", tags: ["Authority", "Brand Entity", "Google"] },
  { icon: Megaphone, title: "Local SEO", desc: "Increase visibility in local search results and Google Business Profile rankings.", tags: ["GBP", "Maps Ranking", "Reviews"] },
  { icon: BarChart3, title: "White Label SEO", desc: "Reliable backend SEO execution for agencies looking to scale client delivery.", tags: ["Agency Partner", "SEO Delivery", "Reporting"] },
];

const STEPS = [
  { n: "01", title: "Research & Audit", desc: "We analyse your market, competitors and search trends to uncover growth opportunities and revenue gaps." },
  { n: "02", title: "Growth Strategy", desc: "A 90-day roadmap built around priorities, projections and the actions required to achieve growth goals." },
  { n: "03", title: "Execution", desc: "SEO, advertising and authority campaigns executed systematically with clear accountability and reporting." },
  { n: "04", title: "Optimise & Scale", desc: "Continuous analysis and refinement improve performance, lead quality and business growth." },
];

const WORK = [
  {  metric: "+312%", label: "Organic Growth", color: "from-amber-300/20" },
  { metric: "5.8x", label: "ROAS", color: "from-amber-300/20" },
  {  metric: "2,000+", label: "Qualified Leads", color: "from-amber-300/20" },
  { metric: "100%", label: "Knowledge Panels Approved", color: "from-amber-300/20" },
];

const TESTIMONIALS = [
  {
    quote: "We saw improvement in our Google rankings and online visibility after SEO work. The Knowledge Panel for our company and personal brand helped build credibility and trust. The approach was professional, result-driven, and focused on growth.",
    name: "Divyesh Savaliya",
    role: "Chairman, Onix Renewable",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Divyesh_Savaliya_zdnmuc.png",
  },
  {
    quote: "We started seeing better rankings on Google and more visibility for our business after the SEO work. The progress is steady, and communication has been clear throughout. The approach is practical and focused on improving results over time.",
    name: "Piyush Variya",
    role: "Managing Director, Sunora Solar",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Piyush_Variya_jrdbql.png",
  },
  {
    quote: "Our Meta Ads campaigns started delivering better results with a reduction in cost per lead. Within a few days, lead quality improved and performance became more stable. The approach is practical, data-driven, and focused on real results.",
    name: "Chintan Jadav",
    role: "Owner, Lexus Energy",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Chintan_Jadav_gktyfv.png",
  },
  {
    quote: "We started getting more relevant inquiries for Maruti Suzuki cars through Meta Ads campaigns. Lead flow improved and targeting became more effective over time. The approach is practical and focused on consistent results.",
    name: "Yagna Chandra",
    role: "Director, Atul Motors (Maruti Suzuki)",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Yagna_Chandra_lp1wus.png",
  },
  {
    quote: "We started getting more relevant inquiries for Maruti Suzuki cars through Meta Ads campaigns. Lead flow improved and targeting became more effective over time. The approach is practical and focused on consistent results.",
    name: "Yagna Chandra",
    role: "Director, Atul Motors (Maruti Suzuki)",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Alpesh_Chandra_dg6jhi.png",
  },
  {
    quote: "Meta Ads campaigns helped improve the quality of inquiries for our Mahindra vehicles. Lead generation became more consistent, and targeting was handled effectively. The overall approach is practical and focused on delivering steady results.",
    name: "Alpesh Chandra",
    role: "CEO, Atul Automotives (Mahindra)",
    image: "https://res.cloudinary.com/dhwkiyrp9/image/upload/Alpesh_Chandra_dg6jhi.png",
  },
];

const FeatureCard = ({ title, desc }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_30px_80px_-20px_oklch(0.83_0.17_85/0.25)]">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_30px_80px_-20px_oklch(0.83_0.17_85/0.25)]">
      <h3 className="text-3xl font-bold text-amber mb-2">{number}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const PRICING = [
  {
    name: "REGOR",
    pitch: "FynoX Inc. operates as a fully legalized corporate consultancy framework (Registered GST & Udyam Setups) engineered for enterprise-grade billing data fidelity. All client data and ad credentials are strictly isolated and guarded using encrypted digital key vaults.",
    features: ["On-Page Optimization", "Off-Page Optimization", "Monthly Reporting"],
    featured: true,
  },
  {
    name: "FOUNDATION",
    pitch: "Founded by Chiman Maru, an MSC IT & BCA graduated and Google Certified Digital professional with 5+ Years of deployment experience. By blending IT data frameworks with performance SEO algorithms , he builds solid metrics-driven models that turn budgets into scale assets.",
    features: ["Google Ads Management", "Meta Ads Management", "Conversion Tracking"],
    featured: true,
  },
  {
    name: "FOOTPRINT",
    pitch: "From our technical base in Gujarat to coroporate ecosystems across Canada, FynoX serves as the invisible, highly disciplined backend white-label delivery engine that global agencies trust for absolute operational scale and seamless cross-border execution loops",
    features: ["WHite Label SEO", "Knowledge Panel Services", "Custom Deliverables"],
    featured: true,
  },
];

const FAQS = [
  { q: "How quickly will I see SEO results?", a: "Technical wins land in 30 days. Meaningful organic lift typically begins month 3 and compounds aggressively from month 6." },
  { q: "Do you work with our existing team?", a: "Always. We embed in your tools — Slack, Linear, Notion — and operate as an extension of your in-house marketing function." },
  { q: "What industries do you specialize in?", a: "B2B SaaS, fintech, healthcare, and considered DTC. Verticals with long sales cycles where content and trust drive revenue." },
  { q: "Is there a minimum contract length?", a: "We ask for a 90-day initial engagement so the strategy can prove itself, then we move month-to-month. No surprise lock-ins." },
];

function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <Cursor />
      <BackgroundFx />
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <FounderSection />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function BackgroundFx() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-[0.55]" />
      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full radial-spot blur-2xl" />
      <div className="blob absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.83_0.17_85/0.08)] blur-3xl" />
      <div className="blob absolute top-[70%] -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.83_0.17_85/0.06)] blur-3xl" />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 pl-3">
          <img src={logo} alt="Fynox" className="h-5 w-auto" style={{height: "40px"}} />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
Let's Talk          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 sm:pt-32 text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
          SEO · Ads · Authority
        </div>
      </Reveal>

      <Reveal delay={120}>
        <h1 className="font-display mt-8 max-w-5xl text-5xl font-bold leading-[0.95] sm:text-7xl md:text-[7.5rem]">
          We engineer
          <br />
          <span className="text-stroke">business</span> <span className="text-amber italic">growth.</span>
        </h1>
      </Reveal>

      <Reveal delay={240}>
        <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Premium SEO, advertising and authority solutions
powered by dedicated strategy, systematic execution and
transparent reporting.

        </p>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="group flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-105">
            Get a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#results" className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
            Our Process
          </a>
        </div>
      </Reveal>

    </section>
  );
}

function Marquee() {
  const items = ["Search Engine Optimization", "Performance Marketing", "Google Ads", "Meta Ads", "Google Knowledge Panel", "White Label SEO" , " Lead Generation" , "Digital Authority"];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-white/10 bg-black/40 py-8 backdrop-blur">
      <div className="flex overflow-hidden">
        <div className="marquee flex shrink-0 items-center gap-12 pr-12">
          {row.map((t, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12">
              <span className="font-display text-3xl font-semibold text-foreground/90 sm:text-5xl">{t}</span>
              <Sparkles className="h-6 w-6 text-amber" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: 1, s: "M+", l: "Organic Traffic Generated" },
    { v: 5.8, s: "x", l: "Highest ROAS Achieved", float: true },
    { v: 2000, s: "+", l: "Qualified Leads Generated" },
    { v: 14, s: "₹", l: "Lowest CPL Delivered" },
  ];
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="flex h-full flex-col justify-between bg-background/80 p-8">
              <div className="font-display text-5xl font-bold tracking-tight text-amber sm:text-6xl">
                {s.float ? s.v.toFixed(1) : <Counter to={s.v} />}{s.s}
              </div>
              <div className="mt-6 text-sm text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ tag, title, sub }: { tag: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber">
          <span className="h-1 w-1 rounded-full bg-amber" /> {tag}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display mt-6 text-4xl font-bold leading-tight sm:text-6xl">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 sm:py-32 py-6">
      <SectionHeading
        tag="What we do"
        title={<>Growth Systems, <span className="text-amber italic">engineered for outcomes.</span></>}
        sub="Strategic SEO, performance advertising and
digital authority solutions designed to increase
visibility, generate qualified leads and accelerate
business growth."
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_30px_80px_-20px_oklch(0.83_0.17_85/0.25)]">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber/0 transition-all duration-500 group-hover:bg-amber/10 " />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber/15 text-amber transition-colors ">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="absolute right-0 top-0 h-5 w-5 text-muted-foreground transition-all group-hover:text-amber group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative px-6 sm:py-32 py-6">
      <SectionHeading tag="The Method" title={<>An operating system, <span className="text-amber italic">not a project.</span></>} sub="A proven framework that turns visibility into qualified leads and sustainable growth." />
      <div className="mx-auto max-w-6xl">
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative rounded-3xl border border-white/10 bg-card/40 p-7 backdrop-blur">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-background border border-amber/40 text-amber font-display text-lg font-bold">
                  {s.n}
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="results" className="relative px-6 sm:py-32 py-6">
      <SectionHeading tag="Selected Work" title={<>Numbers that <span className="text-amber italic">compound.</span></>} sub="Real campaigns, measurable growth and documented business impact." />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {WORK.map((w, i) => (
          <Reveal key={w.brand} delay={i * 100}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-8 transition-all hover:border-amber/40">
              <div className={`absolute inset-0 bg-gradient-to-br ${w.color} via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-semibold">{w.brand}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{w.sector}</div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:text-amber group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative mt-12 flex items-end justify-between">
                <div className="font-display text-7xl font-bold leading-none text-amber sm:text-8xl">{w.metric}</div>
                <div className="max-w-[40%] text-right text-sm text-muted-foreground">{w.label}</div>
              </div>
              <div className="relative mt-8 h-px w-full bg-white/10" />
              <div className="relative mt-4 grid grid-cols-12 gap-1">
                {[...Array(12)].map((_, k) => (
                  <div key={k} className="h-8 rounded-sm bg-amber/20" style={{ height: `${10 + Math.sin((k + i) * 0.9) * 10 + k * 2}px` }} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative px-6 sm:py-32 py-6">
      <SectionHeading tag="CLIENT FEEDBACK" title={<>Trusted by businesses <span className="text-amber italic">that grow.</span></>} />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/40 p-7">
              <div className="flex items-center gap-1 text-amber">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full bg-gradient-to-br from-amber/60 to-amber/20" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const FounderSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_30px_80px_-20px_oklch(0.83_0.17_85/0.25)]">
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            
            <img
              src="https://res.cloudinary.com/dhwkiyrp9/image/upload/Chiman_Maru_Founder_FynoX_Inc._neel2y.png"
              alt="Founder"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-amber/10 pointer-events-none"></div>
          </div>

          <div className="absolute group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all hover:-translate-y-1 border-amber/40 shadow-[0_30px_80px_-20px_oklch(0.83_0.17_85/0.25)]">
            <h3 className="text-lg font-semibold text-amber">
              Chiman Maru
            </h3>
            <p className="text-sm text-muted-foreground">
              Founder & Director, Fynox Inc.
            </p>
          </div>
        </div>

        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs uppercase tracking-[0.2em] mb-3 text-amber">
          <span className="h-1 w-1 rounded-full bg-amber" /> The Foundation
        </div>

          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
            Built for execution, <br />
            <span className="text-amber">not excuses.</span>
          </h2>

          <p className="text-muted-foreground mb-6">
            We combine strategy, advertising and search visibility into a
            single growth system engineered for measurable business outcomes.
          </p>
          <p className="text-muted-foreground mb-10">
            Founded by <span className="text-amber font-medium">Chiman Maru</span>, 
            our team helps businesses generate qualified leads, strengthen
            digital authority and achieve sustainable growth.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            
            <FeatureCard
              title="5+ Years Experience"
              desc="Proven expertise in SEO, ads and growth."
            />
            <FeatureCard
              title="Google Certified"
              desc="Ads & Analytics certified."
            />
            <FeatureCard
              title="GST Registered"
              desc="Fully compliant business."
            />
            <FeatureCard
              title="White Label Partner"
              desc="Trusted by agencies."
            />

          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <StatCard number="50+" label="Projects Delivered" />
        <StatCard number="30+" label="Happy Clients" />
        <StatCard number="4" label="Core Services" />
        <StatCard number="100%" label="Transparent Reporting" />
      </div>
    </section>
  );
};

function Pricing() {
  return (
    <section id="pricing" className="relative px-6 sm:py-32 py-6">
      <SectionHeading tag="THE FOUNDATION" title={<>Built for execution, <span className="text-amber italic">not excuses.</span></>} sub="We combine strategy, advertising and search visibility into a single growth system engineered for measurable business outcomes." />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all ${p.featured ? "border-amber/60 bg-gradient-to-b from-amber/[0.08] to-transparent shadow-[0_30px_80px_-30px_oklch(0.83_0.17_85/0.45)]" : "border-white/10 bg-card/40"}`}>
              {/* {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">Most chosen</div>} */}
              <div className="font-display text-xl font-semibold">{p.name}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.pitch}</div>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative px-6 sm:py-32 py-6">
      <SectionHeading tag="FAQ" title={<>Questions, <span className="text-amber italic">answered.</span></>} />
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <details className="group rounded-2xl border border-white/10 bg-card/40 p-6 transition-colors open:border-amber/40 open:bg-card/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-display text-lg font-semibold">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-amber transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setLoading(true)

      await emailjs.sendForm(
        "service_stl6val", // replace
        "template_5sbimdu", // replace
        formRef.current,
        "tlcmnqeSwV2JDV6vL" // replace public key
      )

      setSuccess(true)
      formRef.current.reset()
    } catch (error) {
      console.error(error)
      alert("Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative px-6 sm:py-32 py-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-amber/30 bg-gradient-to-br from-amber/[0.12] via-background to-background p-10 sm:p-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber">
                <span className="h-1 w-1 rounded-full bg-amber" /> LET'S TALK
              </div>

              <h2 className="font-display mt-6 text-4xl font-bold leading-tight sm:text-6xl">
                Ready to scale 
                <br />
                <span className="text-amber italic">your business?</span>
              </h2>

              <p className="mt-6 max-w-md text-muted-foreground">
                Every business has untapped growth potential.
Tell us where you are today and where you want to go, and we'll uncover the opportunities, strategies and execution priorities needed to scale with confidence.
              </p>

              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-amber" />
                  hello@fynoxinc.com
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-amber" />
                  +91 7359 777 047
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-amber" />
                  Based in Rajkot, Serving Businesses Worldwide
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="full_name"
                  placeholder="Your Name"
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Company"
                  name="company"
                  placeholder="Company Name"
                />

                <Field
                  label="Website"
                  name="website"
                  placeholder="Website Link"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  What do you need?
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="A quick note on goals, channels and timelines…"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-amber/60"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                {loading ? "Sending..." : "Book Free Consultation"}

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {success && (
                <p className="mt-3 text-center text-sm text-green-500">
                  Message sent successfully!
                </p>
              )}

              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Response within 24 hours.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  type = "text",
  placeholder,
  name,
}: {
  label: string
  type?: string
  placeholder?: string
  name: string
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-amber/60"
      />
    </label>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <img src={logo} alt="Fynox" className="h-5 w-auto" style={{height: "40px"}} />
            </a>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              SEO, performance marketing and digital authority systems engineered for measurable business growth.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {["Tw", "In", "Yt", "Dr"].map((s) => (
                <a key={s} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xs text-muted-foreground transition-colors hover:border-amber/50 hover:text-amber">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">SERVICES</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-amber">SEO</a></li>
              <li><a href="#process" className="hover:text-amber">Meta Ads</a></li>
              <li><a href="#results" className="hover:text-amber">Google Ads</a></li>
              <li><a href="#contact" className="hover:text-amber">Knowledge Panel</a></li>
              <li><a href="#contact" className="hover:text-amber">White Label SEO</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">QUICK LINKS</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber">About</a></li>
              <li><a href="#" className="hover:text-amber">Results</a></li>
              <li><a href="#" className="hover:text-amber">FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> © {new Date().getFullYear()} FynoX Inc. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Home;

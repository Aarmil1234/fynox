import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  EXACT VALUES FROM FYNOXINC.COM (Dixor theme / Elementor)
//  Heading font : Barlow Condensed  800/900  uppercase
//  Body font    : Barlow            400/500/600
//  BG primary   : #0d0d0d
//  BG secondary : #111111
//  Accent       : #f2be00
//  Text muted   : #777 / #999
//  Border       : #1e1e1e / #2a2a2a
// ─────────────────────────────────────────────────────────────

const GF = "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap";

const NAV_LINKS = ["Home", "About", "Services", "Case Studies", "Insights", "Contact"];

const CLIENTS = [
  { name: "Maruti Suzuki",    sector: "Automotive",      img: "https://fynoxinc.com/wp-content/uploads/2026/04/Maruti-Suzuki.png" },
  { name: "Mahindra",         sector: "Automotive",      img: "https://fynoxinc.com/wp-content/uploads/2026/04/Mahindra.png" },
  { name: "Onix Renewable",   sector: "Renewable",       img: "https://fynoxinc.com/wp-content/uploads/2026/04/Onix-Renewable.png" },
  { name: "Lexus Energy",     sector: "Renewable",       img: "https://fynoxinc.com/wp-content/uploads/2026/04/Lexus-Energy.png" },
  { name: "Sunora Solar",     sector: "Renewable",       img: "https://fynoxinc.com/wp-content/uploads/2026/04/Sunora-Solar.png" },
  { name: "Infotek Solutions",sector: "IT Solutions",    img: "https://fynoxinc.com/wp-content/uploads/2026/04/Infotek-Solutions.png" },
  { name: "Z Venture",        sector: "HR Services",     img: "https://fynoxinc.com/wp-content/uploads/2026/04/Z-Venture.png" },
  { name: "My Home Studio",   sector: "Ceramic",         img: "https://fynoxinc.com/wp-content/uploads/2026/04/My-Home-Studio.png" },
  { name: "Keshav Interior",  sector: "Interior Design", img: "https://fynoxinc.com/wp-content/uploads/2026/04/Keshav-Interior.png" },
  { name: "Drlogy",           sector: "Healthcare",      img: "https://fynoxinc.com/wp-content/uploads/2026/04/Drlogy.webp" },
];

const SERVICES = [
  {
    tag: "ORGANIC GROWTH", title: "SEO",
    desc: "Improve your Google rankings and grow your business with strategic SEO solutions. We help increase visibility, drive organic traffic, and generate consistent leads with on-page, off-page, and technical SEO.",
    points: ["Rank Higher on Google", "Increase Organic Traffic", "Generate Quality Leads"],
  },
  {
    tag: "DIGITAL AUTHORITY", title: "GOOGLE KNOWLEDGE PANEL",
    desc: "Build a strong Google presence and establish your authority with a Knowledge Panel. We help you appear on Google search with trusted information that builds credibility and strengthens your identity.",
    points: ["Appear on Google with Authority", "Build Trust & Credibility", "Strong Digital Identity"],
  },
  {
    tag: "PERFORMANCE ADS", title: "PERFORMANCE MARKETING",
    desc: "Generate high-quality leads and grow your business with Meta and Google Ads campaigns. We target the right audience, optimize performance, and deliver measurable results for consistent growth.",
    points: ["Meta & Google Ads Campaigns", "Lead Generation & Conversion", "ROI Focused Performance"],
  },
];

const CASES = [
  { tag: "SMO REFERENCE",     title: "Onix Referance", img: "https://fynoxinc.com/wp-content/uploads/2026/04/Fynox-hero.png" },
  { tag: "SBO REFERENCE",     title: "hiee",           img: "https://fynoxinc.com/wp-content/uploads/2026/04/Fynox-hero.png" },
  { tag: "HELLO HELLO HELLO", title: "hello",          img: "https://fynoxinc.com/wp-content/uploads/2026/04/Fynox-hero.png" },
];

const TESTIMONIALS = [
  { name: "Divyesh Savaliya", role: "Chairman, Onix Renewable",             img: "https://fynoxinc.com/wp-content/uploads/2026/04/Divyesh-Savaliya.jpg",  text: "We saw improvement in our Google rankings and online visibility after SEO work. The Knowledge Panel for our company and personal brand helped build credibility and trust. The approach was professional, result-driven, and focused on growth." },
  { name: "Piyush Variya",    role: "Managing Director, Sunora Solar",       img: "https://fynoxinc.com/wp-content/uploads/2026/04/Piyush-Variya.png",      text: "We started seeing better rankings on Google and more visibility for our business after the SEO work. The progress is steady, and communication has been clear throughout. The approach is practical and focused on improving results over time." },
  { name: "Chintan Jadav",    role: "Owner, Lexus Energy",                   img: "https://fynoxinc.com/wp-content/uploads/2026/04/Chintan-Jadav.png",      text: "Our Meta Ads campaigns started delivering better results with a reduction in cost per lead. Within a few days, lead quality improved and performance became more stable. The approach is practical, data-driven, and focused on real results." },
  { name: "Yagna Chandra",    role: "Director, Atul Motors (Maruti Suzuki)", img: "https://fynoxinc.com/wp-content/uploads/2026/04/Yagna-Chandra.jpg",      text: "We started getting more relevant inquiries for Maruti Suzuki cars through Meta Ads campaigns. Lead flow improved and targeting became more effective over time." },
  { name: "Alpesh Chandra",   role: "CEO, Atul Automotives (Mahindra)",      img: "https://fynoxinc.com/wp-content/uploads/2026/04/Alpesh-Chandra.png",     text: "Meta Ads campaigns helped improve the quality of inquiries for our Mahindra vehicles. Lead generation became more consistent, and targeting was handled effectively." },
];

const STATS = [
  { num: 50,  sfx: "+",  pre: "",  label: "Successful Project" },
  { num: 5,   sfx: "+",  pre: "",  label: "Digital Marketing Experience" },
  { num: 25,  sfx: "+",  pre: "",  label: "Clients" },
  { num: 10,  sfx: "L+", pre: "₹", label: "Ad Spend Managed" },
];

const POSTS = [
  { date: "01 May, 2025", title: "Miscovery incommode earnestly commanded",     img: "https://fynoxinc.com/wp-content/uploads/2023/07/6-412x515.jpg" },
  { date: "01 May, 2025", title: "Expression acceptance imprudence particular",  img: "https://fynoxinc.com/wp-content/uploads/2023/07/5-412x515.jpg" },
  { date: "01 May, 2025", title: "Overcame breeding point concerns",             img: "https://fynoxinc.com/wp-content/uploads/2023/07/4-412x515.jpg" },
];

const MARQUEE_WORDS = ["SEO", "★", "GOOGLE KNOWLEDGE PANEL", "★", "PERFORMANCE MARKETING", "★", "DIGITAL GROWTH", "★", "BRAND AUTHORITY", "★"];

// ── Intersection Observer hook ──────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Scroll-reveal wrapper ────────────────────────────────────
function Reveal({ children, delay = 0, dir = "up", style: extraStyle = {} }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(50px)", left: "translateX(-50px)", right: "translateX(50px)", none: "none" };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[dir] || "none",
      transition: `opacity 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...extraStyle,
    }}>
      {children}
    </div>
  );
}

// ── Animated counter ─────────────────────────────────────────
function Counter({ num, sfx, pre, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = Math.max(1, Math.ceil(num / 60));
    const t = setInterval(() => {
      v = Math.min(v + step, num);
      setVal(v);
      if (v >= num) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [inView, num]);
  return <>{pre}{val}{sfx}</>;
}

// ── Arrow SVG ────────────────────────────────────────────────
function Arrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

// ════════════════════════════════════════════════════════════
export default function App() {
  const [scrollY, setScrollY]       = useState(0);
  const [activeT, setActiveT]       = useState(0);
  const [hovSvc, setHovSvc]         = useState(null);
  const [statsRef, statsInView]     = useInView(0.3);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveT(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const navSolid = scrollY > 60;

  return (
    <div style={{ background: "#0d0d0d", color: "#fff", fontFamily: "'Barlow', sans-serif", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={GF} rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        img { display: block; max-width: 100%; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #f2be00; }
        ::-webkit-scrollbar-track { background: #111; }

        /* ── Keyframes ── */
        @keyframes heroFadeUp   { from { opacity:0; transform:translateY(70px); } to { opacity:1; transform:none; } }
        @keyframes heroFadeRight{ from { opacity:0; transform:translateX(70px); } to { opacity:1; transform:none; } }
        @keyframes float        { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-14px); } }
        @keyframes marqueeScroll{ 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); } }
        @keyframes pulse        { 0%,100%{ opacity:.06; } 50%{ opacity:.12; } }
        @keyframes arrowBounce  { 0%,100%{ transform:translateX(0); } 50%{ transform:translateX(5px); } }
        @keyframes imgReveal    { from{ clip-path:inset(0 100% 0 0); } to{ clip-path:inset(0 0% 0 0); } }
        @keyframes scaleIn      { from{ transform:scaleX(0); } to{ transform:scaleX(1); } }
        @keyframes spinSlow     { to{ transform:rotate(360deg); } }

        /* ── Navbar links ── */
        .nl { font-family:'Barlow',sans-serif; font-size:13px; font-weight:600;
              letter-spacing:1.5px; text-transform:uppercase; color:#999;
              position:relative; padding-bottom:3px; transition:color .25s; }
        .nl::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px;
                     background:#f2be00; transition:width .3s ease; }
        .nl:hover { color:#fff; }
        .nl:hover::after { width:100%; }

        /* ── Hero ── */
        .hero-title {
          font-family:'Barlow Condensed',sans-serif;
          font-size: clamp(52px, 8.5vw, 100px);
          font-weight: 900;
          line-height: .92;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: heroFadeUp .9s cubic-bezier(.22,1,.36,1) both;
        }
        .hero-title .italic-yellow {
          color: #f2be00;
          font-style: italic;
        }

        /* ── Section labels ── */
        .s-tag { font-size:12px; font-weight:700; letter-spacing:4px;
                 text-transform:uppercase; color:#f2be00; margin-bottom:14px; }
        .s-title { font-family:'Barlow Condensed',sans-serif;
                   font-size:clamp(34px,4.5vw,56px); font-weight:800;
                   text-transform:uppercase; line-height:1.0; letter-spacing:.5px; }

        /* ── Buttons ── */
        .btn-y { display:inline-flex; align-items:center; gap:10px;
                 background:#f2be00; color:#0d0d0d; font-family:'Barlow',sans-serif;
                 font-size:12px; font-weight:700; letter-spacing:2.5px;
                 text-transform:uppercase; padding:15px 34px; border:none; cursor:pointer;
                 clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
                 transition:background .25s, transform .2s; }
        .btn-y:hover { background:#fff; transform:translateY(-2px); }
        .btn-o { display:inline-flex; align-items:center; gap:10px;
                 border:1px solid #2a2a2a; color:#888; font-family:'Barlow',sans-serif;
                 font-size:12px; font-weight:700; letter-spacing:2.5px;
                 text-transform:uppercase; padding:15px 34px; cursor:pointer;
                 background:transparent; transition:all .25s; }
        .btn-o:hover { border-color:#f2be00; color:#f2be00; }

        /* ── Service cards ── */
        .svc { border:1px solid #1e1e1e; padding:44px 36px; background:#0d0d0d;
               transition:background .35s, border-color .35s; cursor:pointer; position:relative; overflow:hidden; }
        .svc::before { content:''; position:absolute; top:0; left:0; right:0; height:3px;
                       background:#f2be00; transform:scaleX(0); transform-origin:left;
                       transition:transform .4s cubic-bezier(.22,1,.36,1); }
        .svc:hover, .svc.svc-active { background:#111; border-color:#2a2a2a; }
        .svc:hover::before, .svc.svc-active::before { transform:scaleX(1); }
        .svc-arrow { width:42px; height:42px; border:1px solid #2a2a2a;
                     display:flex; align-items:center; justify-content:center;
                     color:#555; transition:all .3s; flex-shrink:0; margin-top:28px; }
        .svc:hover .svc-arrow, .svc.svc-active .svc-arrow {
          background:#f2be00; border-color:#f2be00; color:#000; }

        /* ── Case study rows ── */
        .caserow { display:grid; grid-template-columns:280px 1fr;
                   border-bottom:1px solid #1a1a1a; cursor:pointer;
                   position:relative; overflow:hidden; transition:background .3s; }
        .caserow::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
                           background:#f2be00; transform:scaleY(0); transform-origin:top;
                           transition:transform .4s cubic-bezier(.22,1,.36,1); }
        .caserow:hover { background:#111; }
        .caserow:hover::before { transform:scaleY(1); }
        .case-img-wrap { overflow:hidden; }
        .case-img { width:100%; height:200px; object-fit:cover; filter:brightness(.65);
                    transition:filter .45s, transform .45s; }
        .caserow:hover .case-img { filter:brightness(.9); transform:scale(1.06); }

        /* ── Blog cards ── */
        .blogcard { background:#111; overflow:hidden; transition:transform .35s; cursor:pointer; }
        .blogcard:hover { transform:translateY(-6px); }
        .blogcard-imgwrap { overflow:hidden; }
        .blogcard-img { width:100%; height:230px; object-fit:cover; transition:transform .5s; }
        .blogcard:hover .blogcard-img { transform:scale(1.07); }

        /* ── Client logos ── */
        .client-cell { padding:28px 16px; border-right:1px solid #1a1a1a; border-bottom:1px solid #1a1a1a;
                       display:flex; flex-direction:column; align-items:center; justify-content:center;
                       gap:10px; transition:background .3s; }
        .client-cell:hover { background:#141414; }
        .client-logo { max-height:36px; width:auto; max-width:120px;
                       filter:brightness(0) invert(1); opacity:.4; transition:opacity .3s; }
        .client-cell:hover .client-logo { opacity:.85; }

        /* ── Testimonial avatars ── */
        .tav { width:56px; height:56px; border-radius:50%; object-fit:cover;
               border:2px solid #2a2a2a; cursor:pointer; transition:border-color .3s, transform .3s; flex-shrink:0; }
        .tav:hover { border-color:#f2be00; transform:scale(1.06); }
        .tav-active { border-color:#f2be00 !important; }

        /* ── Marquee ── */
        .marquee-outer { overflow:hidden; white-space:nowrap; }
        .marquee-track { display:inline-flex; gap:56px; animation:marqueeScroll 24s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        .mword { font-family:'Barlow Condensed',sans-serif; font-size:clamp(28px,3.5vw,44px);
                 font-weight:800; text-transform:uppercase; letter-spacing:2px;
                 color:transparent; -webkit-text-stroke:1px #f2be00; white-space:nowrap; transition:all .3s; }
        .mword:hover { color:#f2be00; -webkit-text-stroke:0; }
        .mstar { color:#f2be00; -webkit-text-stroke:0; }

        /* ── Misc ── */
        footer a:hover { color:#f2be00 !important; }
      `}</style>

      {/* ════════ NAVBAR ════════ */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:999,
        height:80, padding:"0 6%",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background: navSolid ? "rgba(10,10,10,.96)" : "transparent",
        backdropFilter: navSolid ? "blur(12px)" : "none",
        borderBottom: navSolid ? "1px solid #1a1a1a" : "none",
        transition:"all .4s ease",
      }}>
        <a href="#">
          <img src="https://fynoxinc.com/wp-content/uploads/2024/11/FynoX-Inc-Logo.webp"
            alt="Fynox INC" style={{ height:34 }} />
        </a>
        <nav style={{ display:"flex", gap:34, alignItems:"center" }}>
          {NAV_LINKS.map(l => <a key={l} href="#" className="nl">{l}</a>)}
        </nav>
      </header>

      {/* ════════ HERO ════════ */}
      <section style={{
        minHeight:"100vh", display:"flex", alignItems:"center",
        padding:"130px 6% 90px", background:"#0d0d0d",
        position:"relative", overflow:"hidden",
      }}>
        {/* ambient glow */}
        <div style={{
          position:"absolute", top:"30%", right:"8%",
          width:"600px", height:"600px", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(242,190,0,.07) 0%, transparent 70%)",
          animation:"pulse 7s ease-in-out infinite", pointerEvents:"none",
        }} />
        {/* subtle grid lines */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
          backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,.018) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,.018) 80px)",
        }} />

        <div style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr 460px", gap:80, alignItems:"center", width:"100%", maxWidth:1400 }}>
          {/* ── Left ── */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28, animation:"heroFadeUp .8s .05s both" }}>
              <span style={{ display:"block", width:32, height:2, background:"#f2be00" }} />
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:4, textTransform:"uppercase", color:"#f2be00" }}>Digital Growth Agency</span>
            </div>

            <h1 className="hero-title" style={{ animationDelay:"0ms" }}>
              GROWING<br />BRANDS INTO<br /><span className="italic-yellow">DIGITAL</span><br />AUTHORITIES
            </h1>

            <p style={{
              color:"#888", fontSize:16, lineHeight:1.9, maxWidth:480,
              margin:"30px 0 42px", fontWeight:400,
              animation:"heroFadeUp .9s .25s both",
            }}>
              Helping businesses grow through SEO, Google Knowledge Panel, and performance
              marketing solutions. We build strong digital presence, improve visibility,
              and attract the right audience for growth.
            </p>

            <div style={{ display:"flex", gap:14, animation:"heroFadeUp .9s .4s both" }}>
              <button className="btn-y">VIEW SERVICES <Arrow /></button>
              <button className="btn-o">OUR WORK</button>
            </div>

            {/* mini stats */}
            <div style={{
              display:"flex", gap:0, marginTop:60,
              paddingTop:40, borderTop:"1px solid #1e1e1e",
              animation:"heroFadeUp .9s .55s both",
            }}>
              {[
                { v:"5+",  l:"Years Experience" },
                { v:"25+", l:"Happy Clients" },
                { v:"50+", l:"Projects Done" },
              ].map((s, i) => (
                <div key={s.l} style={{
                  paddingRight: i < 2 ? 48 : 0, marginRight: i < 2 ? 48 : 0,
                  borderRight: i < 2 ? "1px solid #1e1e1e" : "none",
                }}>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:52, fontWeight:900, color:"#f2be00", lineHeight:1 }}>{s.v}</div>
                  <div style={{ color:"#555", fontSize:11, textTransform:"uppercase", letterSpacing:2, marginTop:6, fontWeight:600 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — hero image ── */}
          <div style={{ position:"relative", animation:"heroFadeRight .9s .15s both" }}>
            <div style={{
              position:"absolute", top:-16, right:-16, bottom:16, left:16,
              border:"1px solid #1e1e1e", zIndex:0,
            }} />
            <img
              src="https://fynoxinc.com/wp-content/uploads/2026/04/Digital-Growth-Performance-Marketing-Strategy.webp"
              alt="Digital Growth Strategy"
              style={{ width:"100%", position:"relative", zIndex:1, filter:"brightness(.88)" }}
            />
            {/* floating badge */}
            <div style={{
              position:"absolute", bottom:-22, left:-28, zIndex:2,
              background:"#f2be00", padding:"18px 26px",
              animation:"float 4.5s ease-in-out infinite",
            }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:42, fontWeight:900, color:"#0d0d0d", lineHeight:1 }}>5+</div>
              <div style={{ fontSize:10, fontWeight:700, color:"#0d0d0d", textTransform:"uppercase", letterSpacing:2, marginTop:3 }}>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ MARQUEE ════════ */}
      <div style={{ background:"#111", borderTop:"1px solid #1a1a1a", borderBottom:"1px solid #1a1a1a", padding:"16px 0", overflow:"hidden" }}>
        <div className="marquee-outer">
          <div className="marquee-track">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
              <span key={i} className={`mword${w === "★" ? " mstar" : ""}`}>{w}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ ABOUT ════════ */}
      <section style={{ padding:"120px 6%", background:"#0d0d0d" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:96, alignItems:"center", maxWidth:1400 }}>
          <Reveal dir="left">
            <div style={{ position:"relative" }}>
              <img
                src="https://fynoxinc.com/wp-content/uploads/2026/04/Expert-Digital-Marketing-Team-Collaboration.webp"
                alt="Team collaboration"
                style={{ width:"100%", filter:"brightness(.82)" }}
              />
              {/* team avatar pill */}
              <div style={{
                position:"absolute", bottom:-18, right:-20, zIndex:2,
                background:"#111", border:"1px solid #1e1e1e", padding:"14px 18px",
                display:"flex", alignItems:"center", gap:12,
              }}>
                <div style={{ display:"flex" }}>
                  {[
                    "https://fynoxinc.com/wp-content/uploads/2026/04/Divyesh-Savaliya.jpg",
                    "https://fynoxinc.com/wp-content/uploads/2026/04/Yagna-Chandra.jpg",
                    "https://fynoxinc.com/wp-content/uploads/2026/04/Alpesh-Chandra.png",
                    "https://fynoxinc.com/wp-content/uploads/2026/04/Chintan-Jadav.png",
                    "https://fynoxinc.com/wp-content/uploads/2026/04/Piyush-Variya.png",
                  ].map((u, i) => (
                    <img key={i} src={u} alt="" style={{
                      width:32, height:32, borderRadius:"50%",
                      border:"2px solid #0d0d0d", marginLeft: i ? -10 : 0,
                      objectFit:"cover",
                    }} />
                  ))}
                </div>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:"#fff", textTransform:"uppercase", letterSpacing:1 }}>Results Driven</div>
                  <div style={{ fontSize:10, color:"#777", textTransform:"uppercase", letterSpacing:1.5 }}>Digital Growth Agency</div>
                </div>
              </div>
              {/* yellow accent square */}
              <div style={{
                position:"absolute", top:24, left:-24, width:48, height:48,
                background:"#f2be00", zIndex:0,
              }} />
            </div>
          </Reveal>

          <Reveal dir="right" delay={100}>
            <div className="s-tag">Who We Are</div>
            <h2 className="s-title" style={{ marginBottom:24, maxWidth:440 }}>
              Building Strong Digital<br />Growth For Your Business
            </h2>
            <p style={{ color:"#888", fontSize:16, lineHeight:1.9, marginBottom:32 }}>
              We help businesses build a strong online foundation through SEO, Google Knowledge
              Panel, and performance marketing. Our strategies focus on improving visibility,
              building trust, and attracting the right audience. With a clear approach and
              data driven execution, we help convert traffic into leads and consistent
              business growth.
            </p>
            <div style={{ marginBottom:36 }}>
              {[["Work", "contact.fynox@gmail.com"], ["Company", "+91 7202007047"]].map(([k, v]) => (
                <div key={k} style={{ display:"flex", gap:0, borderBottom:"1px solid #1a1a1a", padding:"12px 0" }}>
                  <span style={{ fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"#f2be00", minWidth:90 }}>{k}</span>
                  <span style={{ color:"#777", fontSize:14 }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="btn-y">VIEW SERVICES <Arrow /></button>
          </Reveal>
        </div>
      </section>

      {/* ════════ TRUSTED CLIENTS ════════ */}
      <section style={{ padding:"100px 6%", background:"#111", borderTop:"1px solid #1a1a1a" }}>
        <div style={{ display:"grid", gridTemplateColumns:"320px 1fr", gap:80, alignItems:"start", maxWidth:1400 }}>
          <Reveal dir="left">
            <div className="s-tag">Our Clients</div>
            <h2 className="s-title" style={{ marginBottom:20 }}>Our Trusted<br />Clients.</h2>
            <p style={{ color:"#777", fontSize:15, lineHeight:1.85 }}>
              We have worked with trusted brands across renewable energy, ceramic,
              automotive, industrial, education, and service sectors.
            </p>
          </Reveal>
          <Reveal dir="right" delay={120}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", border:"1px solid #1a1a1a" }}>
              {CLIENTS.map((c, i) => (
                <div key={c.name} className="client-cell">
                  <img src={c.img} alt={c.name} className="client-logo"
                    onError={e => { e.target.style.display = "none"; }} />
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:12, fontWeight:600, color:"#bbb", lineHeight:1.3 }}>{c.name}</div>
                    <div style={{ fontSize:10, color:"#444", textTransform:"uppercase", letterSpacing:1.5, marginTop:3 }}>{c.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section style={{ padding:"120px 6%", background:"#0d0d0d" }}>
        <div style={{ maxWidth:1400 }}>
          <Reveal>
            <div className="s-tag">Services We Offer</div>
            <h2 className="s-title" style={{ maxWidth:500, marginBottom:64 }}>
              Grow Your Business With<br />Powerful Digital Strategies
            </h2>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"#1a1a1a" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} style={{ background:"#0d0d0d" }}>
                <div
                  className={`svc${hovSvc === i ? " svc-active" : ""}`}
                  onMouseEnter={() => setHovSvc(i)}
                  onMouseLeave={() => setHovSvc(null)}
                >
                  <div style={{ marginBottom:20 }}>
                    <span style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"#f2be00", border:"1px solid #2a2a2a", padding:"4px 12px" }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:24, fontWeight:800, textTransform:"uppercase", letterSpacing:.5, lineHeight:1.1, marginBottom:18 }}>{s.title}</h3>
                  <p style={{ color:"#666", fontSize:14, lineHeight:1.85, marginBottom:24 }}>{s.desc}</p>
                  <ul style={{ listStyle:"none" }}>
                    {s.points.map(p => (
                      <li key={p} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 0", borderBottom:"1px solid #1a1a1a", color:"#999", fontSize:14 }}>
                        <span style={{ color:"#f2be00", fontSize:20, lineHeight:1, flexShrink:0 }}>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:"flex", justifyContent:"flex-end" }}>
                    <div className="svc-arrow"><Arrow /></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CASE STUDIES ════════ */}
      <section style={{ padding:"120px 6%", background:"#111", borderTop:"1px solid #1a1a1a" }}>
        <div style={{ maxWidth:1400 }}>
          <div style={{ display:"grid", gridTemplateColumns:"320px 1fr", gap:80, alignItems:"end", marginBottom:64 }}>
            <Reveal dir="left">
              <div className="s-tag">Case Studies</div>
              <h2 className="s-title">Project<br />Results</h2>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <p style={{ color:"#666", fontSize:15, lineHeight:1.85 }}>
                Real outcomes for real businesses — data-driven strategy, transparent
                execution, and measurable digital growth.
              </p>
            </Reveal>
          </div>

          <div>
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="caserow">
                  <div className="case-img-wrap">
                    <img src={c.img} alt={c.title} className="case-img" />
                  </div>
                  <div style={{ padding:"40px 56px", display:"flex", flexDirection:"column", justifyContent:"center", position:"relative" }}>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:"#f2be00", marginBottom:14 }}>{c.tag}</div>
                    <h3 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(32px,4vw,54px)", fontWeight:900, textTransform:"uppercase", letterSpacing:.5, lineHeight:.95 }}>{c.title}</h3>
                    <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:8, color:"#f2be00", fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", marginTop:22, width:"fit-content", transition:"gap .3s" }}
                      onMouseEnter={e => e.currentTarget.style.gap = "16px"}
                      onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                      Read More
                      <span style={{ display:"inline-block", animation:"arrowBounce 1.4s ease infinite" }}>→</span>
                    </a>
                    {/* giant ghost number */}
                    <div style={{ position:"absolute", right:40, top:"50%", transform:"translateY(-50%)", fontFamily:"'Barlow Condensed',sans-serif", fontSize:140, fontWeight:900, color:"rgba(255,255,255,.025)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section style={{ padding:"120px 6%", background:"#0d0d0d" }}>
        <div style={{ maxWidth:1400 }}>
          <Reveal style={{ textAlign:"center", marginBottom:72 }}>
            <div className="s-tag">Testimonials</div>
            <h2 className="s-title">What People Say</h2>
          </Reveal>

          <div style={{ maxWidth:840, margin:"0 auto" }}>
            {/* quote mark image */}
            <img
              src="https://wordpress.validthemes.net/dixor/wp-content/uploads/2024/11/3.png"
              alt=""
              style={{ height:52, marginBottom:36, opacity:.9 }}
              onError={e => { e.target.outerHTML = '<div style="font-size:80px;color:#f2be00;margin-bottom:28px;line-height:.8;font-family:Georgia,serif;opacity:.8">"</div>'; }}
            />

            {/* testimonial text — fade on change */}
            <div key={activeT} style={{ animation:"heroFadeUp .6s ease both" }}>
              <p style={{ fontSize:"clamp(16px,2vw,21px)", lineHeight:1.85, color:"#bbb", fontStyle:"italic", fontWeight:300, marginBottom:40 }}>
                {TESTIMONIALS[activeT].text}
              </p>
            </div>

            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:24 }}>
              {/* active name */}
              <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                <div style={{ width:2, height:52, background:"#f2be00", flexShrink:0 }} />
                <div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:"uppercase", letterSpacing:.5 }}>{TESTIMONIALS[activeT].name}</div>
                  <div style={{ color:"#555", fontSize:13, marginTop:3 }}>{TESTIMONIALS[activeT].role}</div>
                </div>
              </div>

              {/* avatar selectors */}
              <div style={{ display:"flex", gap:8 }}>
                {TESTIMONIALS.map((t, i) => (
                  <img key={i} src={t.img} alt={t.name}
                    className={`tav${i === activeT ? " tav-active" : ""}`}
                    onClick={() => setActiveT(i)}
                    onError={e => { e.target.style.display = "none"; }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section ref={statsRef} style={{ background:"#111", borderTop:"1px solid #1a1a1a", borderBottom:"1px solid #1a1a1a" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", maxWidth:1400, margin:"0 auto" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              textAlign:"center", padding:"56px 20px",
              borderRight: i < 3 ? "1px solid #1a1a1a" : "none",
            }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:"clamp(48px,5.5vw,72px)", fontWeight:900, color:"#f2be00", lineHeight:1 }}>
                <Counter num={s.num} sfx={s.sfx} pre={s.pre} inView={statsInView} />
              </div>
              <div style={{ fontSize:12, color:"#555", textTransform:"uppercase", letterSpacing:2.5, marginTop:10, fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ BLOG / INSIGHTS ════════ */}
      <section style={{ padding:"120px 6%", background:"#0d0d0d" }}>
        <div style={{ maxWidth:1400 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:64 }}>
            <Reveal dir="left">
              <div className="s-tag">Insights & Strategies</div>
              <h2 className="s-title">Latest Digital Growth Insights</h2>
            </Reveal>
            <Reveal dir="right" delay={80}>
              <button className="btn-o">VIEW ALL POSTS <Arrow /></button>
            </Reveal>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="blogcard">
                  <div className="blogcard-imgwrap">
                    <img src={p.img} alt={p.title} className="blogcard-img" />
                  </div>
                  <div style={{ padding:"28px 28px 34px" }}>
                    <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:18 }}>
                      <span style={{ color:"#f2be00", fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase" }}>{p.date}</span>
                      <span style={{ width:3, height:3, borderRadius:"50%", background:"#333", display:"inline-block" }} />
                      <span style={{ color:"#555", fontSize:11, textTransform:"uppercase", letterSpacing:1.5 }}>Chiman Maru</span>
                    </div>
                    <h4 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:"uppercase", letterSpacing:.5, lineHeight:1.15, marginBottom:22 }}>{p.title}</h4>
                    <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:8, color:"#f2be00", fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", transition:"gap .3s" }}
                      onMouseEnter={e => e.currentTarget.style.gap = "14px"}
                      onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                      Continue Reading →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background:"#080808", borderTop:"1px solid #1a1a1a", padding:"80px 6% 36px" }}>
        <div style={{ maxWidth:1400 }}>
          <div style={{ display:"grid", gridTemplateColumns:"2.2fr 1fr 1fr 1.2fr", gap:60, paddingBottom:60, borderBottom:"1px solid #1a1a1a", marginBottom:36 }}>

            {/* Brand */}
            <div>
              <img src="https://fynoxinc.com/wp-content/uploads/2024/11/FynoX-Inc-Logo.webp" alt="Fynox INC" style={{ height:32, marginBottom:20 }} />
              <div style={{ color:"#555", fontSize:12, fontWeight:600, textTransform:"uppercase", letterSpacing:1.5, marginBottom:4 }}>Digital Growth & Marketing Consultancy</div>
              <div style={{ color:"#444", fontSize:12, marginBottom:20 }}>Rajkot, Gujarat, India</div>
              <p style={{ color:"#555", fontSize:14, lineHeight:1.85, marginBottom:28 }}>Helping businesses grow with SEO, Ads and Digital Authority.</p>
              <div style={{ display:"flex", gap:8 }}>
                {[["f","#"], ["in","#"], ["𝕏","#"], ["▶","#"]].map(([icon, href]) => (
                  <a key={icon} href={href} style={{ width:36, height:36, border:"1px solid #1e1e1e", display:"flex", alignItems:"center", justifyContent:"center", color:"#444", fontSize:12, fontWeight:700, transition:"all .25s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="#f2be00"; e.currentTarget.style.color="#f2be00"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="#1e1e1e"; e.currentTarget.style.color="#444"; }}>{icon}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:"uppercase", letterSpacing:1, marginBottom:24, color:"#fff" }}>Quick Links</div>
              {NAV_LINKS.map(l => <div key={l} style={{ marginBottom:11 }}><a href="#" style={{ color:"#555", fontSize:14, transition:"color .2s" }} onMouseEnter={e => e.target.style.color="#f2be00"} onMouseLeave={e => e.target.style.color="#555"}>{l}</a></div>)}
            </div>

            {/* Services */}
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:"uppercase", letterSpacing:1, marginBottom:24, color:"#fff" }}>Services</div>
              {["Search Engine Optimization (SEO)", "Knowledge Panel Development", "Google Ads", "Meta Ads"].map(s => (
                <div key={s} style={{ marginBottom:11 }}><a href="#" style={{ color:"#555", fontSize:14, transition:"color .2s" }} onMouseEnter={e => e.target.style.color="#f2be00"} onMouseLeave={e => e.target.style.color="#555"}>{s}</a></div>
              ))}
            </div>

            {/* Company + Contact */}
            <div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:"uppercase", letterSpacing:1, marginBottom:24, color:"#fff" }}>Company</div>
              {["About Us", "Case Studies", "Insights", "Privacy Policy"].map(s => (
                <div key={s} style={{ marginBottom:11 }}><a href="#" style={{ color:"#555", fontSize:14, transition:"color .2s" }} onMouseEnter={e => e.target.style.color="#f2be00"} onMouseLeave={e => e.target.style.color="#555"}>{s}</a></div>
              ))}
              <div style={{ marginTop:28, paddingTop:24, borderTop:"1px solid #1a1a1a" }}>
                <a href="mailto:hello@fynoxinc.com" style={{ display:"block", color:"#555", fontSize:14, marginBottom:10, transition:"color .2s" }} onMouseEnter={e => e.target.style.color="#f2be00"} onMouseLeave={e => e.target.style.color="#555"}>hello@fynoxinc.com</a>
                <a href="tel:+917359777047" style={{ color:"#555", fontSize:14, transition:"color .2s" }} onMouseEnter={e => e.target.style.color="#f2be00"} onMouseLeave={e => e.target.style.color="#555"}>+91 73597 77047</a>
              </div>
            </div>
          </div>

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <p style={{ color:"#333", fontSize:13 }}>Copyright © 2026 FynoX Inc. All Rights Reserved.</p>
            <p style={{ color:"#333", fontSize:13 }}>Trusted by businesses across multiple industries in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
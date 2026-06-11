import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  ArrowUpRight, 
  ExternalLink, 
  Lightbulb, 
  Terminal, 
  Eye, 
  TrendingUp, 
  Layers, 
  Wrench,
  Smartphone,
  Check,
  FileDown,
  Moon,
  Sun,
  Layout,
  Cpu,
  Bookmark
} from "lucide-react";
import { ProjectDetail, ServiceDetail, SkillDetail } from "./types";

export default function App() {
  const [lang, setLang] = useState<"ID" | "EN">("ID");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Web" | "SEO" | "Design">("All");
  const [activeProjectTab, setActiveProjectTab] = useState<"masalah" | "solusi" | "hasil">("masalah");
  const [visitorName, setVisitorName] = useState<string>("");
  const [copiedWA, setCopiedWA] = useState<boolean>(false);
  const [devicePreview, setDevicePreview] = useState<"desktop" | "mobile">("desktop");

  const totalSlides = 5;

  // Autoplay handler
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Slides configuration metadata
  const slidesMeta = lang === "ID" ? [
    { id: "hero", label: "01. Introduction", title: "Bikin Bisnis Kebanjiran Orderan" },
    { id: "services", label: "02. Layanan Solutif", title: "Web, SEO, & Design/Editing Foto Video" },
    { id: "casestudy", label: "03. Case Study", title: "Digital Scale-Up Koota Production" },
    { id: "skills", label: "04. Tech Stack & Skills", title: "Keahlian Teknis & Sertifikasi" },
    { id: "contact", label: "05. Hubungi Saya / Consult", title: "Diskusikan Kebutuhan Anda" }
  ] : [
    { id: "hero", label: "01. Introduction", title: "Boost Your Business Orders" },
    { id: "services", label: "02. Services Overview", title: "Web, SEO, & Photo/Video Design/Editing" },
    { id: "casestudy", label: "03. Case Study", title: "Digital Scale-Up Koota Production" },
    { id: "skills", label: "04. Tech Stack & Skills", title: "Technical Expertise & Certifications" },
    { id: "contact", label: "05. Contact Me / Consult", title: "Discuss Your Needs" }
  ];

  const services: ServiceDetail[] = lang === "ID" ? [
    {
      title: "Web Design & Development",
      description: "Pembuatan website modern berkecepatan tinggi, responsif, & berorientasi.",
      metric: "Skor PageSpeed 95+",
      icon: "laptop"
    },
    {
      title: "SEO Optimization",
      description: "Optimasi on-page/off-page mendalam, riset kata kunci potensial, & penulisan konten pendukung peringkat teratas di Google.",
      metric: "Trafik Organik Berlipat",
      icon: "search"
    },
    {
      title: "Digital Content & Branding",
      description: "Desain grafis premium, design editing foto atau video, serta editing video iklan profesional berorientasi call-to-action.",
      metric: "Dongkrak Rasio Klik",
      icon: "layers"
    }
  ] : [
    {
      title: "Web Design & Development",
      description: "Crafting modern, high-speed, responsive, & results-oriented websites.",
      metric: "95+ PageSpeed Score",
      icon: "laptop"
    },
    {
      title: "SEO Optimization",
      description: "In-depth on-page/off-page optimization, potential keyword research, & supportive copywriting to rank top on Google.",
      metric: "Double Organic Traffic",
      icon: "search"
    },
    {
      title: "Digital Content & Branding",
      description: "Premium graphic design, photo or video design editing, and professional, call-to-action oriented ad-video editing.",
      metric: "Boost Click Ratio",
      icon: "layers"
    }
  ];

  const project: ProjectDetail = lang === "ID" ? {
    name: "Digital Scale-Up - Koota Production",
    tagline: "Situs profil agency kreatif & strategi SEO optimis berkinerja tinggi",
    masalah: "Klien kehilangan potensi pasar digital karena situs web lama terlalu lambat\n(PageSpeed < 30), sedikit tidak mobile-friendly, serta nihil kunjungan organik dari mesin pencari Google.",
    solusi: "Membangun ulang struktur program secara modular dengan optimalisasi loading asset, merancang interaksi visual modern yang eye-catching, serta melakukan boosting blog dengan menyusun peta kata kunci prioritas lokal.",
    hasil: "Skor Core Web Vitals melonjak drastis hingga 98/100, mengamankan posisi 3 besar SERP untuk kata kunci andalan koota, serta mendatangkan konversi leads dari form WA instan.",
    performance: 98,
    seoScore: 100,
    color: "#10b981", 
    techs: ["WORDPRESS", "React", "Canva", "Photoshop", "Premiere Pro", "Google Search Console"]
  } : {
    name: "Digital Scale-Up - Koota Production",
    tagline: "Situs profil agency kreatif & strategi SEO optimis berkinerja tinggi",
    masalah: "The client lost digital market potential because their old website was too slow\n(PageSpeed < 30), lacked mobile-friendliness, and had zero organic traffic from Google search.",
    solusi: "Rebuilding the site architecture in a modular style with optimized asset loading, designing eye-catching modern visual interactions, and boosting the blog by mapping local high-priority keywords.",
    hasil: "Core Web Vitals score jumped to 98/100, securing Top 3 rankings on Google SERP for key Koota phrases, and gaining direct leads through instant WhatsApp forms.",
    performance: 98,
    seoScore: 100,
    color: "#10b981", 
    techs: ["WORDPRESS", "React", "Canva", "Photoshop", "Premiere Pro", "Google Search Console"]
  };

  const skills: SkillDetail[] = [
    { name: "React & TypeScript", level: 90, experience: lang === "ID" ? "Sering dipakai dalam modern web apps" : "Frequently used in modern web apps", category: "Web", color: "from-blue-500 to-cyan-500", iconName: "code" },
    { name: "WordPress", level: 90, experience: lang === "ID" ? "Pembuatan web cepat dengan CMS, Elementor & Custom Blocks" : "Rapid web development with CMS, Elementor & Custom Blocks", category: "Web", color: "from-sky-600 to-blue-500", iconName: "layout" },
    { name: "HTML", level: 95, experience: lang === "ID" ? "Struktur markup semantik & aksesibilitas tinggi" : "Semantic markup structure & high accessibility", category: "Web", color: "from-orange-500 to-red-600", iconName: "code" },
    { name: "CSS", level: 92, experience: lang === "ID" ? "Styling layout modern & animasi responsif" : "Modern layout styling & responsive animations", category: "Web", color: "from-blue-500 to-cyan-600", iconName: "laptop" },
    { name: "JavaScript", level: 88, experience: lang === "ID" ? "Logika pemrograman frontend & interaktivitas" : "Frontend programming logic & interactivity", category: "Web", color: "from-yellow-500 to-amber-600", iconName: "code" },
    { name: "Canva", level: 95, experience: lang === "ID" ? "Desain visual cepat & media sosial kreatif" : "Quick visual designs & creative social media layouts", category: "Design", color: "from-cyan-400 to-teal-500", iconName: "layers" },
    { name: "SEO On-Page & Off-Page", level: 88, experience: lang === "ID" ? "Optimasi konten & arsitektur tautan" : "Content optimization & link architecture", category: "SEO", color: "from-emerald-500 to-green-600", iconName: "search" },
    { name: "Google Analytics & GSC", level: 85, experience: lang === "ID" ? "Analisis traffic & indexing performa" : "Traffic analysis & performance indexing", category: "SEO", color: "from-green-400 to-emerald-500", iconName: "trending" },
    { name: "Adobe Photoshop", level: 82, experience: lang === "ID" ? "Desain aset kreatif & mockups" : "Creative assets design & mockups", category: "Design", color: "from-purple-500 to-indigo-600", iconName: "layers" },
    { name: "Adobe Premiere Pro", level: 80, experience: lang === "ID" ? "Editing video komersial bisnis" : "Commercial business video editing", category: "Design", color: "from-pink-500 to-rose-600", iconName: "video" }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const copyWAToClipboard = () => {
    navigator.clipboard.writeText("https://wa.me/62895800267212");
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EBEBEB] font-sans selection:bg-[#006400] selection:text-black overflow-x-hidden flex flex-col justify-between relative">
      
      {/* Structural Accent Lines */}
      <div className="absolute top-0 right-[41%] w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 pointer-events-none hidden lg:block"></div>

      {/* Vertical Rail Text */}
      <div className="absolute left-10 bottom-24 hidden lg:flex items-center gap-4 origin-bottom-left -rotate-90 translate-y-full select-none pointer-events-none opacity-30 z-10">
        <span className="text-[10px] uppercase tracking-[0.5em] font-sans">PORTFOLIO DECK . VOL .01</span>
        <div className="w-12 h-[1px] bg-[#006400]"></div>
      </div>

      {/* Header Panel */}
      <header className="border-b border-white/5 bg-[#0D0D0D]/90 backdrop-blur-md sticky top-0 z-50 px-6 py-5 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#4ade80] font-bold mb-1.5">Portfolio Volume .01</span>
            <div className="flex items-center gap-3">
              <span className="text-xl font-serif text-white tracking-wide">Davin S.A</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              <span className="text-[11px] font-mono text-white/40 tracking-wider">Web Architecture & SEO</span>
            </div>
          </div>

          <nav className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {slidesMeta.map((slide, index) => (
              <button
                key={slide.id}
                id={`slide-nav-btn-${index}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false);
                }}
                className={`py-1 text-[11px] uppercase tracking-widest transition-all duration-300 shrink-0 font-medium ${
                  currentSlide === index
                    ? "text-[#4ade80] border-b border-[#4ade80] opacity-100 font-semibold"
                    : "text-white opacity-40 hover:opacity-100 border-b border-transparent"
                }`}
              >
                {slide.label.split(". ")[1]}
              </button>
            ))}
            
            {/* Language Switch Slider - Aligned to far right next to Consult/Hubungi Saya */}
            <div className="pl-4 border-l border-white/10 flex items-center shrink-0">
              <button
                id="lang-selector-switch"
                type="button"
                onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
                className="relative w-[76px] h-[28px] rounded-none bg-[#0D0D0D] border border-white/10 flex items-center justify-between px-3 text-[9px] font-mono font-bold text-white/40 cursor-pointer select-none focus:outline-none animate-none shrink-0"
              >
                <span className={`z-10 transition-colors duration-200 uppercase ${lang === "ID" ? "text-black" : "text-white/40 hover:text-white/80"}`}>ID</span>
                <span className={`z-10 transition-colors duration-200 uppercase ${lang === "EN" ? "text-black" : "text-white/40 hover:text-white/80"}`}>EN</span>
                
                {/* Sliding knob toggle backplate */}
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="absolute left-[2px] top-[2px] w-[36px] h-[22px] bg-[#006400] rounded-none"
                  animate={{ x: lang === "ID" ? 0 : 36 }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Slide Workspace */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-10 max-w-7xl mx-auto w-full relative z-20">
        <div className="w-full relative min-h-[580px] lg:min-h-[580px] flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
            >
              
              {/* Left Column: Interactive Layout Content */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-7 pr-0 lg:pr-6">
                
                {/* Meta Badge */}
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Slide {currentSlide + 1} of {totalSlides}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#006400]/20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#006400]"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#4ade80] font-semibold">
                    {slidesMeta[currentSlide].label.split(". ")[1]}
                  </span>
                  {isPlaying && (
                    <span className="flex items-center gap-1.5 text-[10px] text-amber-500 tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                      AUTOPLAY ACTIVE
                    </span>
                  )}
                </div>

                {/* Main Content Conditional rendering for Slides */}
                {currentSlide === 0 && (
                  <div className="space-y-7" id="slide-hero-content">
                    <h2 className="text-[44px] sm:text-[54px] lg:text-[62px] font-serif font-normal leading-[1.1] text-white tracking-tighter">
                      {lang === "ID" ? (
                        <>
                          Bikin Bisnis <br className="hidden sm:inline" />
                          <span className="inline-block bg-[#006400] text-black font-serif font-bold px-3 py-1 my-1.5 rounded-none tracking-tighter">
                            Kebanjiran Orderan
                          </span>
                          <br className="hidden sm:inline" />
                          Lewat Web Modern.
                        </>
                      ) : (
                        <>
                          <span className="inline-block bg-[#006400] text-black font-serif font-bold px-3 py-1 my-1.5 rounded-none tracking-tighter">
                            Boost Your Business
                          </span>
                          <br className="hidden sm:inline" />
                          Order Conversions <br className="hidden sm:inline" />
                          With Premium Web.
                        </>
                      )}
                    </h2>
                    
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                      {lang === "ID" 
                        ? "Halo! Saya Davin S.A . Saya menggabungkan keahlian frontend modern dengan strategi optimasi SEO untuk melahirkan platform digital yang super cepat, memukau, dan menembus papan atas pencarian Google secara konsisten."
                        : "Hello! I'm Davin S.A. I combine modern frontend craftsmanship with targeted SEO strategies to deliver ultra-fast, visually stunning digital solutions that rank on the first page of Google."}
                    </p>

                    <div className="p-5 bg-[#141414] border border-white/5 rounded-none space-y-3 relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#006400]"></div>
                      <label className="block text-[10px] font-mono text-[#4ade80] tracking-[0.2em] uppercase font-semibold">
                        {lang === "ID" ? "Masukkan nama Anda:" : "Enter your name:"}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="visitor-name-input"
                          value={visitorName}
                          onChange={(e) => setVisitorName(e.target.value)}
                          placeholder={lang === "ID" ? "Contoh: Romi Jahat" : "e.g. John Lennon"}
                          className="flex-1 px-4 py-2.5 bg-[#0D0D0D] border border-white/10 rounded-none text-sm text-[#EBEBEB] focus:outline-none focus:border-[#4ade80] transition-colors placeholder:text-stone-700 font-mono"
                        />
                        {visitorName && (
                          <button
                            onClick={() => setVisitorName("")}
                            className="text-[10px] text-stone-500 hover:text-white px-2 font-mono uppercase tracking-widest border border-white/5 hover:border-white/25 transition-colors"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      {visitorName && (
                        <motion.p 
                          initial={{ opacity: 0, y: 5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          className="text-xs text-white/90 font-serif italic flex items-center gap-2 pt-1"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#4ade80]" />
                          {lang === "ID" ? (
                            <>Selamat Datang, <strong>{visitorName}</strong>! Silakan klik tombol di bawah atau gunakan navigasi atas untuk menelaah portofolio saya.</>
                          ) : (
                            <>Welcome, <strong>{visitorName}</strong>! Feel free to click the buttons below or use the top navigation panel to explore my portfolio.</>
                          )}
                        </motion.p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button 
                        id="hero-cta-works-btn"
                        onClick={() => {
                          setCurrentSlide(1);
                          setIsPlaying(false);
                        }}
                        className="px-6 py-3.5 bg-[#006400] hover:bg-[#008f00] text-black text-xs uppercase tracking-widest font-bold transition-all hover:translate-x-1 flex items-center gap-2 group cursor-pointer"
                      >
                        {lang === "ID" ? "Lihat Layanan" : "View Services"}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                      <button 
                        id="hero-cta-consult-btn"
                        onClick={() => {
                          setCurrentSlide(4);
                          setIsPlaying(false);
                        }}
                        className="px-6 py-3.5 border border-white/20 bg-transparent hover:bg-white/5 text-white text-xs uppercase tracking-widest font-semibold transition-all flex items-center gap-2 cursor-pointer"
                      >
                        {lang === "ID" ? "Konsultasi Gratis" : "Free Consultation"}
                        <ArrowUpRight className="w-4 h-4 text-[#4ade80]" />
                      </button>
                    </div>
                  </div>
                )}

                {currentSlide === 1 && (
                  <div className="space-y-6" id="slide-services-content">
                    <div className="space-y-2">
                      <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-tight">
                        {lang === "ID" ? (
                          <>Layanan Solutif <span className="italic font-bold text-[#4ade80]">Untuk Bisnis Anda</span></>
                        ) : (
                          <>Solutions <span className="italic font-bold text-[#4ade80]">For Your Business</span></>
                        )}
                      </h2>
                      <p className="text-white/60 text-sm max-w-xl font-sans">
                        {lang === "ID" 
                          ? "Pilar layanan utama yang bersinergi secara strategis guna mendongkrak visibilitas konversi produk digital Anda di internet, termasuk web, SEO, serta design editing foto atau video."
                          : "Key strategic pillars designed to synergistically boost your digital visibility and sales conversions, including web development, detailed SEO, and professional photo/video editing."}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {services.map((svc, i) => (
                        <div 
                          key={i} 
                          className="p-4 bg-[#141414] border border-white/5 rounded-none hover:border-[#4ade80]/30 transition-all flex gap-4 items-start relative group"
                        >
                          <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#006400] group-hover:h-full transition-all duration-300"></div>
                          <div className="w-10 h-10 shrink-0 bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20 rounded-none flex items-center justify-center">
                            {svc.icon === "laptop" && <Laptop className="w-5 h-5" />}
                            {svc.icon === "search" && <Search className="w-5 h-5" />}
                            {svc.icon === "layers" && <Layers className="w-5 h-5" />}
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <h3 className="text-sm font-semibold text-white tracking-wide uppercase">{svc.title}</h3>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-none bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20 tracking-wider sm:self-start w-fit">
                                {svc.metric}
                              </span>
                            </div>
                            <p className="text-xs text-white/70 leading-relaxed font-sans">{svc.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <a
                        id="services-download-portfolio-btn"
                        href="https://drive.google.com/file/d/1S2_KPE8xKrfW3sm4eDVNkp0jcz8Ox8na/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs text-white/90 font-mono uppercase tracking-wider flex items-center gap-2 transition-all border border-white/5 whitespace-nowrap"
                      >
                        <FileDown className="w-4 h-4 text-[#4ade80]" />
                        {lang === "ID" ? "UNDUH RESUME PORTOFOLIO" : "DOWNLOAD PORTFOLIO RESUME"}
                      </a>

                      <button
                        id="services-cta-next-btn"
                        onClick={() => setCurrentSlide(2)}
                        className="text-xs font-mono font-semibold tracking-widest text-[#4ade80] hover:text-[#4ade80] flex items-center gap-1.5 group select-none uppercase transition-all duration-300 transform hover:translate-x-1"
                      >
                        {lang === "ID" ? "Beralih ke Studi Kasus" : "Check Case Study"}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>
                )}

                {currentSlide === 2 && (
                  <div className="space-y-6" id="slide-casestudy-content">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#4ade80] font-bold tracking-[0.3em] uppercase">
                        {lang === "ID" ? "Studi Kasus Unggulan" : "Featured Case Study"}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight leading-tight">
                        {project.name.split(" - ")[0]} — <span className="italic font-bold text-[#4ade80]">{project.name.split(" - ")[1]}</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Interactive Tabbed Panel for Case Study Details */}
                    <div className="bg-[#141414] border border-white/5 rounded-none overflow-hidden shadow-2xl">
                      <div className="flex border-b border-white/5 bg-[#0D0D0D]">
                        {(["masalah", "solusi", "hasil"] as const).map((tab) => (
                          <button
                            key={tab}
                            id={`casestudy-tab-${tab}`}
                            onClick={() => setActiveProjectTab(tab)}
                            className={`flex-1 py-3 text-xs font-mono font-bold tracking-widest uppercase border-b-2 transition-all ${
                              activeProjectTab === tab
                                ? "border-[#4ade80] bg-[#006400]/10 text-[#4ade80]"
                                : "border-transparent text-white/50 hover:text-white"
                            }`}
                          >
                            {tab === "masalah" ? (lang === "ID" ? "Masalah" : "Problem")
                             : tab === "solusi" ? (lang === "ID" ? "Solusi" : "Solution")
                             : (lang === "ID" ? "Hasil" : "Result")}
                          </button>
                        ))}
                      </div>

                      <div className="p-5 min-h-[142px]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeProjectTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-5"
                          >
                            <div className="flex items-center gap-2">
                              {activeProjectTab === "masalah" && <span className="w-2 h-2 rounded-full bg-[#006400]"></span>}
                              {activeProjectTab === "solusi" && <span className="w-2 h-2 rounded-full bg-stone-500"></span>}
                              {activeProjectTab === "hasil" && <span className="w-2 h-2 rounded-full bg-white"></span>}
                              <h4 className="text-[10px] font-bold text-white/55 font-mono tracking-widest uppercase">
                                {lang === "ID" ? `Analisis ${activeProjectTab}:` : `${activeProjectTab.charAt(0).toUpperCase() + activeProjectTab.slice(1)} Analysis:`}
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif mt-2 whitespace-pre-line">
                              {activeProjectTab === "masalah" && project.masalah}
                              {activeProjectTab === "solusi" && project.solusi}
                              {activeProjectTab === "hasil" && project.hasil}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="px-5 py-3 bg-[#0D0D0D] border-t border-white/5 flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] font-mono text-white/40 mr-1.5 uppercase font-bold tracking-wider">
                          {lang === "ID" ? "Perkakas:" : "Tools:"}
                        </span>
                        {project.techs.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[10px] font-mono px-2 py-0.5 bg-[#141414] border border-white/5 rounded-none text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                      <div className="p-4 sm:p-5 bg-[#141414] border border-white/5 rounded-none flex items-center gap-3 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-none bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20 flex items-center justify-center font-serif font-bold text-xs sm:text-sm md:text-base">
                          {project.performance}%
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] sm:text-[10px] font-mono text-white/40 uppercase tracking-widest leading-tight">Core Web Vitals</p>
                          <p className="text-[11px] sm:text-[13px] font-semibold text-white mt-1 leading-snug">
                            {lang === "ID" ? "Sangat Optimal" : "Highly Optimized"}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 bg-[#141414] border border-white/5 rounded-none flex items-center gap-3 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-none bg-white/5 text-white border border-white/10 flex items-center justify-center font-serif font-bold text-xs sm:text-sm md:text-base">
                          {project.seoScore}%
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[8px] sm:text-[10px] font-mono text-white/40 uppercase tracking-widest leading-tight font-semibold">SEO Audit Score</p>
                          <p className="text-[11px] sm:text-[13px] font-semibold text-white mt-1 leading-snug">
                            {lang === "ID" ? "Sesuai Best Practice" : "Best Practice Validated"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 3 && (
                  <div className="space-y-6" id="slide-skills-content">
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight leading-tight">
                        {lang === "ID" ? (
                          <>Keahlian Teknis & <span className="italic font-light text-[#4ade80]">Sertifikasi</span></>
                        ) : (
                          <>Technical Skills & <span className="italic font-light text-[#4ade80]">Certifications</span></>
                        )}
                      </h2>
                      <p className="text-white/60 text-sm max-w-xl font-sans">
                        {lang === "ID"
                          ? "Tingkat kemahiran yang dinilai secara objektif berdasarkan proyek komersial maupun kontribusi personal yang telah rilis."
                          : "Objective assessment levels of technical competencies demonstrated in commercial web products and software solutions."}
                      </p>
                    </div>

                    {/* Filter Category Tabs */}
                    <div className="flex gap-2 p-1 bg-[#141414] border border-white/5 rounded-none w-fit">
                      {(["All", "Web", "SEO", "Design"] as const).map((cat) => (
                        <button
                          key={cat}
                          id={`skill-filter-btn-${cat}`}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1 rounded-none text-xs font-mono tracking-wider transition-all uppercase ${
                            selectedCategory === cat
                              ? "bg-[#006400] text-black font-bold"
                              : "text-white/55 hover:text-white"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[260px] overflow-y-auto pr-1">
                      {skills
                        .filter((s) => selectedCategory === "All" || s.category === selectedCategory)
                        .map((skill) => (
                          <div 
                            key={skill.name} 
                            className="p-3.5 bg-[#141414] border border-white/5 rounded-none flex flex-col justify-between hover:border-white/15 transition-colors"
                          >
                            <div className="space-y-1">
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="text-xs font-bold text-white uppercase tracking-wide">{skill.name}</h4>
                                <span className="text-[11px] font-mono font-bold text-[#4ade80]">{skill.level}%</span>
                              </div>
                              <p className="text-[11px] text-white/50 leading-snug font-sans">{skill.experience}</p>
                            </div>
                            
                            {/* Animated Loading Bar indicator */}
                            <div className="w-full bg-[#0D0D0D] h-[2px] rounded-none overflow-hidden mt-3">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="bg-[#006400] h-full"
                              />
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="p-4 bg-[#141414] border border-white/5 rounded-none flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20 flex items-center justify-center">
                        <Lightbulb className="w-4.5 h-4.5" />
                      </div>
                      <p className="text-xs text-white/80 font-sans">
                        {lang === "ID" ? (
                          <>Sertifikasi keahlian: <strong className="text-[#4ade80]">BNSP Certificate</strong> & <strong>Software Development (Asisten Pemrograman Junior)</strong>.</>
                        ) : (
                          <>Skills Qualification: <strong className="text-[#4ade80]">BNSP Certificate</strong> & <strong>Software Development (Junior Programmer Assistant)</strong>.</>
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {currentSlide === 4 && (
                  <div className="space-y-6" id="slide-contact-content">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#4ade80] font-bold tracking-[0.3em] uppercase">
                        {lang === "ID" ? "Hubungi Davin S.A" : "Contact Davin S.A"}
                      </span>
                      <h2 className="text-3xl font-serif text-white tracking-tight leading-tight">
                        {lang === "ID" ? (
                          <>Diskusikan <span className="italic font-light text-[#4ade80]">Rencana Hebat</span> Anda</>
                        ) : (
                          <>Discuss Your <span className="italic font-light text-[#4ade80]">Great Plans</span></>
                        )}
                      </h2>
                      <p className="text-white/60 text-sm max-w-xl font-sans">
                        {lang === "ID"
                          ? "Mari berbincang hangat mengenai platform digital impian Anda atau rancangan optimasi SEO lokal kompetitif secara gres & gratis."
                          : "Let's discuss your dream digital solution or competitive local SEO implementation plan, completely free of charge."}
                      </p>
                    </div>

                    {/* Interactive WA Contact Card with dynamic greeting integration */}
                    <div className="p-5 bg-gradient-to-br from-[#141414] via-[#141414] to-[#006400]/5 border border-white/5 rounded-none relative overflow-hidden">
                      <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 pointer-events-none text-white">
                        <Phone className="w-48 h-48" />
                      </div>

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-none bg-[#006400] flex items-center justify-center text-black">
                            <Phone className="w-5 h-5 fill-current" />
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                              {lang === "ID" ? "Live Konsultasi via WhatsApp" : "Live Consultation via WhatsApp"}
                            </h3>
                            <p className="text-[10px] text-[#4ade80] font-mono flex items-center gap-1.5 uppercase font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
                              {lang === "ID" ? "Responsif • Hubungi Sekarang" : "Responsive • Contact Now"}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-white/70 leading-relaxed font-sans max-w-md">
                          {visitorName ? (
                            <span>
                              {lang === "ID" ? (
                                <>Saya akan mendampingi Anda penuh ramah dengan greeting pembuka otomatis: <strong>"Halo Davin, saya {visitorName} ingin berdiskusi mengenai platform web / SEO."</strong> Klik button di bawah guna meluncurkan panel chat.</>
                              ) : (
                                <>I will accompany you with a friendly pre-defined starting greeting: <strong>"Hello Davin, I'm {visitorName} and I want to chat about web development or SEO."</strong> Click the button below to start our thread.</>
                              )}
                            </span>
                          ) : (
                            <span>
                              {lang === "ID"
                                ? "Konsultasi gratis perdana meliputi tinjauan performa web lama, analisis kata kunci kompetitor terdekat, serta penentuan kerangka teknologi dan design editing foto atau video."
                                : "Initial free consulting includes old website performance diagnostics, closest competitor search gaps analyzer, tech stack advice, or creative photo/video editing briefs."}
                            </span>
                          )}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                          <a
                            id="wa-consultation-link"
                            href={`https://wa.me/62895800267212?text=${encodeURIComponent(
                              visitorName 
                                ? (lang === "ID" 
                                    ? `Halo Davin, saya ${visitorName} ingin berdiskusi mengenai proyek pembuatan website & SEO dari materi presentasimu.` 
                                    : `Hello Davin, I am ${visitorName} and I want to consult on the web development & SEO presentation deck.`)
                                : (lang === "ID"
                                    ? `Halo Davin, saya ingin konsultasi gratis mengenai optimasi website & strategi SEO.`
                                    : `Hello Davin, I would like to query about your website design & search engine optimization consult.`)
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 bg-[#006400] hover:bg-[#008f00] text-black text-xs font-mono font-bold text-center flex items-center justify-center gap-2 transition-all uppercase tracking-wider cursor-pointer"
                          >
                            {lang === "ID" ? "Hubungi via WhatsApp" : "Contact via WhatsApp"}
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <button
                            id="copy-wa-link-btn"
                            onClick={copyWAToClipboard}
                            className={`px-4 py-2.5 border text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                              copiedWA
                                ? "bg-[#006400]/20 text-[#4ade80] border-[#4ade80]/40"
                                : "bg-[#0D0D0D] border-white/20 hover:bg-white/5 text-white"
                            }`}
                          >
                            {copiedWA ? (
                              <>
                                <Check className="w-4 h-4 text-[#4ade80]" />
                                {lang === "ID" ? "Tersalin ke Clipboard" : "Copied to Clipboard"}
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                {lang === "ID" ? "Salin Tautan WA" : "Copy WA Link"}
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-between p-3.5 bg-[#141414] border border-white/5 rounded-none">
                      <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest font-semibold">
                        {lang === "ID" ? "Unduh Resume Portofolio:" : "Download Portfolio Resume:"}
                      </span>
                      <a
                        id="download-resume-btn"
                        href="https://drive.google.com/file/d/1S2_KPE8xKrfW3sm4eDVNkp0jcz8Ox8na/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-xs text-white font-mono uppercase tracking-wider flex items-center gap-2 transition-all border border-white/5"
                      >
                        <FileDown className="w-3.5 h-3.5 text-[#4ade80]" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Dynamic Interactive Mockup Screen Preview */}
              <div className="lg:col-span-5 flex flex-col justify-center font-sans">
                

                <div className="space-y-4">
                  
                  {/* Mockup Top Toolbar Controls */}
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#4ade80]" />
                      Prototype Emulator
                    </span>
                    <div className="flex gap-1.5 bg-[#141414] p-1 rounded-none border border-white/5">
                      <button
                        title="Desktop view"
                        id="switch-mockup-desktop-btn"
                        onClick={() => setDevicePreview("desktop")}
                        className={`p-1.5 rounded-none transition-all cursor-pointer ${
                          devicePreview === "desktop"
                            ? "bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                      </button>
                      <button
                        title="Mobile view"
                        id="switch-mockup-mobile-btn"
                        onClick={() => setDevicePreview("mobile")}
                        className={`p-1.5 rounded-none transition-all cursor-pointer ${
                          devicePreview === "mobile"
                            ? "bg-[#006400]/20 text-[#4ade80] border border-[#4ade80]/20"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Device Container Frame */}
                  <div className="w-full flex items-center justify-center font-sans">
                    
                    <AnimatePresence mode="wait">
                      {devicePreview === "desktop" ? (
                        
                        /* Desktop Frame */
                        <motion.div
                          key="desktop-frame"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="w-full bg-[#141414] border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col"
                        >
                          {/* Titlebar */}
                          <div className="bg-[#0D0D0D] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#006400]/80 inline-block"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-stone-700 inline-block"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-stone-800 inline-block"></span>
                            </div>
                            <span className="text-[10px] font-mono text-white/40 tracking-wider">
                              https://davinportfolio.com
                            </span>
                            <span className="w-3.5 h-3.5 text-white/30">
                              <Bookmark className="w-3 h-3" />
                            </span>
                          </div>

                          {/* App Window Layout Content based on active slide */}
                          <div className="p-6 h-[290px] overflow-hidden relative bg-[#0D0D0D] flex flex-col justify-between">
                            
                            {/* Slide 0: Hero mini visual */}
                            {currentSlide === 0 && (
                              <div className="space-y-4 animate-fadeIn">
                                <div className="space-y-1.5">
                                  <h4 className="text-[9px] font-mono uppercase text-[#4ade80] tracking-widest leading-none font-bold">Davin S.A</h4>
                                  <h3 className="text-sm font-serif text-white leading-normal italic">
                                    {lang === "ID" ? "Bikin Bisnis Kebanjiran Orderan." : "Flooding Business with Sales Orders."}
                                  </h3>
                                </div>
                                <div className="grid grid-cols-12 gap-3.5">
                                  <div className="col-span-8 p-3 bg-[#141414] border border-white/5 rounded-none space-y-2">
                                    <div className="h-[2px] bg-[#006400] w-2/3"></div>
                                    <div className="h-[2px] bg-stone-800 w-full"></div>
                                    <div className="h-[2px] bg-stone-800 w-5/6"></div>
                                  </div>
                                  <div className="col-span-4 p-2 bg-[#006400]/20 border border-[#4ade80]/20 rounded-none flex flex-col items-center justify-center space-y-1 text-center">
                                    <span className="text-[8px] font-mono font-bold text-[#4ade80]">SEO BOOST</span>
                                    <TrendingUp className="w-3.5 h-3.5 text-[#4ade80]" />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center bg-[#141414] p-2 border border-white/5 rounded-none text-[9px] font-mono">
                                  <span className="text-white/40">{lang === "ID" ? "Pelacak pengunjung aktif:" : "Visitor active track:"}</span>
                                  <span className="text-[#4ade80] font-bold">{visitorName ? visitorName : "Unidentified Guest"}</span>
                                </div>
                              </div>
                            )}

                            {/* Slide 1: Services mini visual */}
                            {currentSlide === 1 && (
                              <div className="space-y-3.5">
                                <h3 className="text-[9px] font-bold text-white/40 tracking-wider font-mono">LAYANAN MANDIRI</h3>
                                <div className="grid grid-cols-3 gap-2.5 row-auto">
                                  <div className="p-2.5 bg-[#141414] border border-[#4ade80]/20 rounded-none text-center space-y-1">
                                    <Laptop className="w-4 h-4 mx-auto text-[#4ade80]" />
                                    <p className="text-[9px] font-bold text-white leading-tight">Web Dev</p>
                                    <div className="text-[8px] font-mono text-[#4ade80] font-bold">95+ Speed</div>
                                  </div>
                                  <div className="p-2.5 bg-[#141414] border border-white/5 rounded-none text-center space-y-1">
                                    <Search className="w-4 h-4 mx-auto text-stone-400" />
                                    <p className="text-[9px] font-bold text-white leading-tight">SEO Plan</p>
                                    <div className="text-[8px] font-mono text-stone-300">Traffic x2</div>
                                  </div>
                                  <div className="p-2.5 bg-[#141414] border border-white/5 rounded-none text-center space-y-1">
                                    <Layers className="w-4 h-4 mx-auto text-stone-400" />
                                    <p className="text-[9px] font-bold text-white leading-tight">Content</p>
                                    <div className="text-[8px] font-mono text-stone-300 font-medium">High CTR</div>
                                  </div>
                                </div>
                                <div className="p-2 bg-[#141414] border border-white/5 rounded-none text-[8px] text-white/55 flex justify-between items-center font-mono">
                                  <span>Semua teknologi berbasis standard server-side render</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#006400]"></span>
                                </div>
                              </div>
                            )}

                            {/* Slide 2: Case study analytic screen */}
                            {currentSlide === 2 && (
                              <div className="space-y-3 font-sans">
                                <div className="flex justify-between items-center">
                                  <span className="text-[9px] font-mono text-white/40 font-bold tracking-wider">PROJECT TRAFFIC</span>
                                  <span className="px-1.5 py-0.5 bg-[#006400]/15 text-[#4ade80] text-[8px] font-mono font-bold">LIVE METRIC</span>
                                </div>
                                
                                <div className="p-3 bg-[#141414] border border-white/5 space-y-2.5 rounded-none">
                                  <p className="text-[10px] uppercase font-mono font-bold text-white tracking-widest">{project.name.split(" - ")[0]}</p>
                                  
                                  {/* Custom visual SVG chart bar mimic */}
                                  <div className="flex gap-1.5 items-end h-16 pt-2">
                                    <div className="bg-stone-800 w-full h-1/4 rounded-none"></div>
                                    <div className="bg-stone-800 w-full h-1/3 rounded-none"></div>
                                    <div className="bg-[#006400]/20 w-full h-1/2 rounded-none"></div>
                                    <div className="bg-[#006400]/40 w-full h-2/3 rounded-none"></div>
                                    <div className="bg-[#006400] w-full h-[98%] rounded-none relative">
                                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-[#4ade80] font-bold font-mono">98%</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex justify-between items-center text-[8px] text-white/55 bg-[#141414] p-1.5 rounded-none border border-white/5 font-mono">
                                  <span>Kecepatan Respon: <strong>0.3s</strong></span>
                                  <span className="text-[#4ade80] font-bold uppercase">SEO Google Index Passed</span>
                                </div>
                              </div>
                            )}

                            {/* Slide 3: Tech stack visual grids */}
                            {currentSlide === 3 && (
                              <div className="space-y-3.5 font-sans">
                                <div className="flex justify-between items-center">
                                  <span className="text-[9px] font-mono text-white/40 font-bold uppercase tracking-wider">Tech Ecosystem Matrix</span>
                                  <span className="text-[8px] font-mono text-[#4ade80] uppercase tracking-widest">Active Stack</span>
                                </div>

                                <div className="grid grid-cols-4 gap-2">
                                  <div className="p-2 bg-[#141414] border border-white/5 rounded-none text-center">
                                    <p className="text-[9px] font-bold text-white leading-tight font-mono">React</p>
                                    <p className="text-[8px] font-mono text-[#4ade80]">Advanced</p>
                                  </div>
                                  <div className="p-2 bg-[#141414] border border-white/5 rounded-none text-center">
                                    <p className="text-[9px] font-bold text-white leading-tight font-mono">Vite</p>
                                    <p className="text-[8px] font-mono text-[#4ade80]">Extreme</p>
                                  </div>
                                  <div className="p-2 bg-[#141414] border border-[#4ade80]/30 rounded-none text-center">
                                    <p className="text-[9px] font-bold text-white leading-tight font-mono">SEO</p>
                                    <p className="text-[8px] font-mono text-[#4ade80] font-bold">Top Rank</p>
                                  </div>
                                  <div className="p-2 bg-[#141414] border border-white/5 rounded-none text-center">
                                    <p className="text-[9px] font-bold text-white leading-tight font-sans">Tailwind</p>
                                    <p className="text-[8px] font-mono text-stone-400">Expert</p>
                                  </div>
                                </div>

                                <div className="p-2 bg-[#006400]/10 border border-[#4ade80]/15 rounded-none flex items-center justify-between text-[8px] font-mono text-stone-300">
                                  <p className="text-white/60 uppercase">Portfolio status:</p>
                                  <strong className="text-[#4ade80] font-bold uppercase">Ready to launch</strong>
                                </div>
                              </div>
                            )}

                            {/* Slide 4: Contact preview info card */}
                            {currentSlide === 4 && (
                              <div className="space-y-3.5 font-sans">
                                <span className="text-[9px] font-mono text-white/40 font-bold uppercase tracking-widest">Awaiting Discussion</span>
                                
                                <div className="p-4 bg-[#006400]/10 border border-[#4ade80]/20 rounded-none space-y-1.5">
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">Hubungi Untuk Diskusi:</p>
                                  <p className="text-[10px] text-[#4ade80] font-mono">https://wa.me/62895800267212</p>
                                  
                                  <div className="flex gap-2 pt-1">
                                    <span className="px-2 py-0.5 rounded-none bg-[#006400] text-black text-[9px] font-bold font-mono uppercase tracking-wider">WhatsApp</span>
                                    <span className="px-2 py-0.5 rounded-none bg-stone-900 border border-white/5 text-white text-[9px] font-bold font-mono uppercase tracking-wider">Resume</span>
                                  </div>
                                </div>

                                <div className="p-2 bg-[#141414] border border-white/5 rounded-none text-[8px] font-mono text-white/50 text-center">
                                  Davin S.A • Surabaya, Indonesia
                                </div>
                              </div>
                            )}

                            {/* Footer inside mockup */}
                            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/30">
                              <span>VOLUME {currentSlide + 1}</span>
                              <span>© {new Date().getFullYear()} DAVIN</span>
                            </div>

                          </div>
                        </motion.div>
                      ) : (
                                          /* Mobile Smartphone Frame */
                        <motion.div
                          key="mobile-frame"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="w-[200px] bg-[#141414] border-[6px] border-white rounded-[24px] overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.2)] flex flex-col h-[380px]"
                        >
                          {/* Smartphone top camera pill notch */}
                          <div className="bg-[#0D0D0D] h-6 flex items-center justify-center relative">
                            <div className="w-12 h-3.5 bg-black rounded-b-md absolute top-0 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-stone-900 inline-block mr-1"></span>
                              <span className="w-3 h-0.5 bg-stone-850 rounded-full inline-block"></span>
                            </div>
                          </div>

                          {/* App content inside phone */}
                          <div className="flex-1 p-3.5 bg-[#0D0D0D] flex flex-col justify-between overflow-hidden">
                            <div className="space-y-4">
                              <div className="flex justify-between items-center text-[8px] font-mono text-white/40 font-semibold uppercase">
                                <span>PORT DECK</span>
                                <span className="text-[#4ade80]">● 5G LTE</span>
                              </div>

                              {currentSlide === 0 && (
                                <div className="space-y-2.5">
                                  <h4 className="text-[11px] font-bold text-white">Davin S.A</h4>
                                  <div className="p-2 bg-[#141414] border border-white/5 rounded-none space-y-1">
                                    <div className="h-0.5 bg-[#006400] rounded w-full"></div>
                                    <div className="h-0.5 bg-stone-800 rounded w-5/6"></div>
                                  </div>
                                  <span className="text-[8px] font-mono text-[#4ade80] inline-block uppercase tracking-wider font-semibold">Kebanjiran Orderan</span>
                                </div>
                              )}

                              {currentSlide === 1 && (
                                <div className="space-y-2">
                                  <h4 className="text-[9px] font-mono text-white text-center font-bold">LAYANAN UTAMA</h4>
                                  <div className="space-y-1.5">
                                    <div className="p-1.5 bg-[#141414] text-center rounded-none border border-white/5">
                                      <p className="text-[8px] font-bold text-white leading-none">Web Dev</p>
                                    </div>
                                    <div className="p-1.5 bg-[#141414] text-center rounded-none border border-white/5">
                                      <p className="text-[8px] font-bold text-white leading-none">SEO Planner</p>
                                    </div>
                                    <div className="p-1.5 bg-[#141414] text-center rounded-none border border-white/5">
                                      <p className="text-[8px] font-bold text-white leading-none">Content</p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {currentSlide === 2 && (
                                <div className="space-y-2">
                                  <p className="text-[9px] font-mono font-bold text-white/50 tracking-wider">Studi Kasus</p>
                                  <div className="p-2.5 bg-[#141414] border border-[#4ade80]/15 rounded-none text-center space-y-1">
                                    <p className="text-[8px] font-mono text-[#4ade80] font-bold uppercase">Koota Production</p>
                                    <p className="text-[14px] font-mono font-bold text-white mt-1">98%</p>
                                    <p className="text-[8px] text-stone-400 font-mono tracking-tighter">Core Web Vitals</p>
                                  </div>
                                </div>
                              )}

                              {currentSlide === 3 && (
                                <div className="space-y-2">
                                  <p className="text-[9px] font-mono font-bold text-white/50">SKILLS GRID</p>
                                  <div className="space-y-1">
                                    <div className="h-1 bg-stone-900 rounded-none overflow-hidden">
                                      <div className="bg-[#006400] h-full w-[90%]"></div>
                                    </div>
                                    <div className="h-1 bg-stone-900 rounded-none overflow-hidden">
                                      <div className="bg-[#006400] h-full w-[95%]"></div>
                                    </div>
                                    <div className="h-1 bg-stone-900 rounded-none overflow-hidden">
                                      <div className="bg-[#006400] h-full w-[88%]"></div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {currentSlide === 4 && (
                                <div className="space-y-2 font-sans">
                                  <p className="text-[9px] font-mono font-bold text-white/50">Hubungi Kami</p>
                                  <div className="p-2 bg-[#006400]/10 border border-[#4ade80]/20 rounded-none text-center">
                                    <span className="text-[8px] font-bold text-[#4ade80] font-mono">WA: 0895800267212</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Home Indicator Touchbar */}
                            <div className="h-1 w-16 bg-stone-850 rounded-full mx-auto"></div>
                          </div>
                        </motion.div>

                      )}
                    </AnimatePresence>

                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Interactive Pagination Controls & Playback */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            <div className="flex items-center gap-2">
              <button
                id="playback-toggle-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-4 py-1.5 rounded-none text-xs font-mono font-semibold transition-all uppercase tracking-wider ${
                  isPlaying 
                    ? "bg-[#006400]/15 text-[#4ade80] border border-[#4ade80]/30"
                    : "bg-[#141414] border border-white/5 text-stone-300 hover:text-white"
                }`}
              >
                {isPlaying ? "⏸ Pause Slideshow" : "▶ Auto Play (5s)"}
              </button>
            </div>

            {/* Manual Slide Navigator Row */}
            <div className="flex items-center gap-3">
              <button
                id="btn-nav-prev"
                onClick={handlePrev}
                className="w-10 h-10 rounded-none border border-white/5 bg-[#141414] hover:bg-stone-900 flex items-center justify-center text-white transition-colors"
                title="Slide Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-1.5">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    id={`dot-nav-btn-${i}`}
                    onClick={() => {
                      setCurrentSlide(i);
                      setIsPlaying(false);
                    }}
                    className={`w-5 h-5 rounded-none transition-all flex items-center justify-center border ${
                      currentSlide === i 
                        ? "bg-[#006400] border-[#4ade80] text-black scale-110 font-bold" 
                        : "bg-[#141414] border-white/5 hover:border-white/20 text-white/50"
                    }`}
                    title={`Slide ${i + 1}`}
                  >
                    <span className="text-[9px] font-mono leading-none">
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>

              <button
                id="btn-nav-next"
                onClick={handleNext}
                className="w-10 h-10 rounded-none border border-white/5 bg-[#141414] hover:bg-stone-900 flex items-center justify-center text-white transition-colors"
                title="Slide Selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* Footer Info Hub */}
      <footer className="border-t border-white/5 py-6 px-4 sm:px-8 bg-[#0A0A0A] text-center font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-white/30">
          <p className="font-serif italic text-white/50">Dirancang khusus untuk presentasi portofolio interaktif • Surabaya, Indonesia</p>
          <p>© {new Date().getFullYear()} DAVIN S.A. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

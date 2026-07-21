import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarClock,
  ChevronDown,
  FileBadge2,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";
import waferStageVideo from "@/assets/WaferStageLith.mp4";
import turbineAssemblyVideo from "@/assets/TurbineAssembly.mp4";
import energyFlowVideo from "@/assets/EnergyFlow.mp4";
import analysisImg from "@/assets/ANSYS.webp";
import advantageImg from "@/assets/Manufacturing.jpg";
import mechanicalImg from "@/assets/Designer.png";
import founderImg from "@/assets/HoldingWafer.png";
import morpheidosLogo from "@/assets/morpheidos-logo.svg";

const CONTACT_ROUTE = "mailto:info@morpheidos.tech";
const VCARD_URL = "https://hamed.morpheidos.tech/vcf/Hamed_Abdollahi.vcf";
const TALLY_FORM_URL =
  "https://tally.so/embed/QKWbMG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_SCRIPT_URL = "https://tally.so/widgets/embed.js";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Morpheidos Tech — Engineering the Possibilities" },
      {
        name: "description",
        content:
          "Founder-led engineering support for complex product development across high-tech and energy industries.",
      },
    ],
  }),
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Values", href: "#values" },
  { label: "Why us", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

const SIDEBAR_LINKS = [
  { label: "Add contact", href: VCARD_URL, Icon: UserPlus },
  {
    label: "Mail",
    href: "mailto:info@morpheidos.tech",
    Icon: Mail,
  },
  { label: "Phone", href: "tel:+31622410181", Icon: Phone },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/morpheidos-tech",
    Icon: Linkedin,
  },
  {
    label: "Cal.eu",
    href: "https://cal.eu/hamedeo",
    Icon: CalendarClock,
  },
];

const VALUES = [
  {
    slug: "collaboration",
    title: "Collaboration",
    description: "We work as an integrated part of the client’s engineering team.",
  },
  {
    slug: "context",
    title: "Context First",
    description: "We understand the existing technology before proposing change.",
  },
  {
    slug: "design",
    title: "Design Thinking",
    description: "We frame the right problem before developing the solution.",
  },
  {
    slug: "innovation",
    title: "Innovation",
    description: "We introduce practical improvements that create measurable technical value.",
  },
];

function WavyRule() {
  return <div className="wavy-divider my-8 w-full" aria-hidden />;
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="flex scroll-mt-32 items-center gap-3 font-display text-2xl font-bold text-primary"
    >
      <span className="h-2 w-2 flex-none rounded-full bg-primary" />
      {children}
    </h2>
  );
}

type HeroPhase =
  "first-video" | "first-trace" | "second-video" | "second-trace" | "third-video" | "third-trace";

function readCssDuration(property: string, fallback: number) {
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(property).trim();
  const amount = Number.parseFloat(value);

  if (!Number.isFinite(amount)) return fallback;
  return value.endsWith("ms") ? amount : amount * 1000;
}

function HeroTrace({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 360"
      className={"hero-trace " + (visible ? "is-visible" : "")}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-trace-mask-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="black" />
          <stop offset="0.42" stopColor="white" stopOpacity="0.42" />
          <stop offset="0.82" stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <mask
          id="hero-trace-sweep-mask"
          maskUnits="userSpaceOnUse"
          x="-380"
          y="0"
          width="700"
          height="110"
        >
          <rect
            className="trace-sweep-mask"
            x="-370"
            y="0"
            height="110"
            fill="url(#hero-trace-mask-gradient)"
          />
        </mask>
      </defs>
      <g className="trace-unit">
        <g className="trace-artwork" mask="url(#hero-trace-sweep-mask)">
          <line x1="-232.2" y1="55.5" x2="29" y2="55.5" />
          <path d="M39.05 79.5V34.2C39.05 32.8 39.8 32 40.8 32s1.8.8 1.8 2.2v21.3c0 7.4 5.3 12 13.8 12 8.8 0 16-6.5 16-15.2V33" />
          <path d="M72.4 33v23.5c0 5.8 5 9.1 11.3 9.1 4.2 0 7.8-3.2 9.8-7.6 1.5-5.5 7-9 15-9H112 M93.5 58c0 5.8 5 9.5 12.4 9.5 9.5 0 15.9-5.5 19-12.3 2.9-6.8 3.2-15 8.3-19.1 2.9-2.4 7.2-2.1 12.8-2.1h28.8" />
          <path d="M119.2 37c-3.1-4.1-8.3-5-13.5-4.5-6.6.7-10.8 4.2-10.8 9.1 0 5 5.2 7.9 13.2 7.9h3.6" />
          <path d="M150.5 34v26.5c0 4.2 3.1 6.7 7.6 6.7 4.1 0 7-2.2 7.6-5.6" />
          <line x1="185" y1="55.5" x2="278.9" y2="55.5" />
        </g>
        <rect className="trace-pulse-front" x="-260" y="12" width="1.5" height="86" rx="0.75" />
      </g>
    </svg>
  );
}

function HeroMediaSequence() {
  const [phase, setPhase] = useState<HeroPhase>("first-video");
  const [playbackFailed, setPlaybackFailed] = useState(false);
  const firstVideo = useRef<HTMLVideoElement>(null);
  const secondVideo = useRef<HTMLVideoElement>(null);
  const thirdVideo = useRef<HTMLVideoElement>(null);

  const enterTracePhase = (expectedPhase: HeroPhase, tracePhase: HeroPhase) => {
    if (phase !== expectedPhase) return;

    firstVideo.current?.pause();
    secondVideo.current?.pause();
    thirdVideo.current?.pause();
    setPhase(tracePhase);
  };

  useEffect(() => {
    if (phase === "first-video" || phase === "second-video" || phase === "third-video") {
      const video =
        phase === "first-video"
          ? firstVideo.current
          : phase === "second-video"
            ? secondVideo.current
            : thirdVideo.current;
      const inactiveVideos = [firstVideo.current, secondVideo.current, thirdVideo.current].filter(
        (candidate): candidate is HTMLVideoElement => candidate !== null && candidate !== video,
      );
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      inactiveVideos.forEach((inactiveVideo) => {
        inactiveVideo.muted = true;
        inactiveVideo.defaultMuted = true;
        inactiveVideo.pause();
      });
      setPlaybackFailed(false);

      let cancelled = false;

      const startVideo = () => {
        video.muted = true;
        video.currentTime = 0;
        const playPromise = video.play();

        if (playPromise) {
          void playPromise.catch(() => {
            if (!cancelled) setPlaybackFailed(true);
          });
        }
      };

      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        startVideo();
      } else {
        video.addEventListener("canplay", startVideo, { once: true });
      }

      return () => {
        cancelled = true;
        video.removeEventListener("canplay", startVideo);
      };
    }

    firstVideo.current?.pause();
    secondVideo.current?.pause();
    thirdVideo.current?.pause();

    const traceDuration = readCssDuration("--trace-duration", 3400);
    const nextPhase =
      phase === "first-trace"
        ? "second-video"
        : phase === "second-trace"
          ? "third-video"
          : "first-video";
    const timer = window.setTimeout(() => setPhase(nextPhase), traceDuration);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const showFirstVideo = !playbackFailed && phase === "first-video";
  const showSecondVideo = !playbackFailed && phase === "second-video";
  const showThirdVideo = !playbackFailed && phase === "third-video";
  const showTrace = phase === "first-trace" || phase === "second-trace" || phase === "third-trace";

  return (
    <div className="hero-media-frame" role="img" aria-label="Morpheidos Tech engineering montage">
      <div className="hero-media-pane">
        <div className={"hero-media hero-video-layer " + (showFirstVideo ? "is-visible" : "")}>
          <video
            ref={firstVideo}
            src={waferStageVideo}
            autoPlay={phase === "first-video"}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlaying={() => setPlaybackFailed(false)}
            onError={() => setPlaybackFailed(true)}
            onEnded={() => enterTracePhase("first-video", "first-trace")}
            className="hero-video"
          />
        </div>
        <img
          src={morpheidosLogo}
          alt=""
          aria-hidden="true"
          className={"hero-media hero-fallback-logo " + (playbackFailed ? "is-visible" : "")}
        />
        <div className={"hero-media hero-video-layer " + (showSecondVideo ? "is-visible" : "")}>
          <video
            ref={secondVideo}
            src={turbineAssemblyVideo}
            autoPlay={phase === "second-video"}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlaying={() => setPlaybackFailed(false)}
            onError={() => setPlaybackFailed(true)}
            onEnded={() => enterTracePhase("second-video", "second-trace")}
            className="hero-video"
          />
        </div>
        <div className={"hero-media hero-video-layer " + (showThirdVideo ? "is-visible" : "")}>
          <video
            ref={thirdVideo}
            src={energyFlowVideo}
            autoPlay={phase === "third-video"}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlaying={() => setPlaybackFailed(false)}
            onError={() => setPlaybackFailed(true)}
            onEnded={() => enterTracePhase("third-video", "third-trace")}
            className="hero-video"
          />
        </div>
      </div>
      <HeroTrace visible={showTrace} />
    </div>
  );
}

function TallyRequestForm() {
  useEffect(() => {
    const tallyWindow = window as Window & {
      Tally?: { loadEmbeds: () => void };
    };

    const loadForm = () => {
      if (tallyWindow.Tally) {
        tallyWindow.Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
        .forEach((frame) => {
          const source = frame.dataset.tallySrc;
          if (source) frame.src = source;
        });
    };

    let script = document.querySelector<HTMLScriptElement>(
      "script[src='" + TALLY_SCRIPT_URL + "']",
    );

    if (!script) {
      script = document.createElement("script");
      script.src = TALLY_SCRIPT_URL;
      script.async = true;
      script.addEventListener("load", loadForm);
      script.addEventListener("error", loadForm);
      document.head.appendChild(script);
    } else if (tallyWindow.Tally) {
      loadForm();
    } else {
      script.addEventListener("load", loadForm);
      script.addEventListener("error", loadForm);
    }

    return () => {
      script?.removeEventListener("load", loadForm);
      script?.removeEventListener("error", loadForm);
    };
  }, []);

  return (
    <div className="tally-form-embed" aria-label="Request engineering support form">
      <iframe
        title="Request engineering support"
        data-tally-src={TALLY_FORM_URL}
        loading="lazy"
        width="100%"
        height="540"
        className="tally-embed"
      />
    </div>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = NAV.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const marker = window.scrollY + 160;
      let currentSection = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= marker) currentSection = section.id;
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 text-xs md:px-12">
          <a
            href="https://hamed.morpheidos.tech/"
            className="group inline-flex items-center gap-2 font-sans text-white/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
            Behind Morpheidos Tech
          </a>
          {/* <span className="hidden font-sans text-white/40 sm:inline">
            A company by <span className="text-primary">Hamed Abdollahi</span>
          </span> */}
        </div>
        <div className="mx-auto max-w-[1400px] px-6 pb-3 md:px-12">
          <nav
            aria-label="Page sections"
            className="flex items-center gap-x-5 overflow-x-auto whitespace-nowrap text-[14px] md:justify-end md:gap-x-8 md:text-[15px]"
          >
            {NAV.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  aria-current={isActive ? "location" : undefined}
                  className={
                    "flex-none font-sans transition hover:text-primary " +
                    (isActive ? "border-b-2 border-primary pb-1 text-primary" : "text-white/80")
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <div className="h-[104px]" aria-hidden />

      <section className="relative">
        <HeroMediaSequence />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
            <div className="max-w-xl">
              <h1 className="font-display text-5xl font-bold leading-[1.02] text-primary sm:text-6xl md:text-4xl">
                Morpheidos Tech
              </h1>
              <p className="mt-5 font-display text-2xl font-semibold leading-tight text-white sm:text-6xl">
                Engineering the Possibilities
              </p>
              <p className="mt-3 font-sans text-sm uppercase tracking-[0.3em] text-primary sm:text-base">
                Morphe. Eidos. Techne.
              </p>
              <a
                href="#about"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
              >
                Learn more <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pb-24 pt-10 md:grid-cols-[300px_1fr] md:gap-16 md:px-12">
        <aside className="md:sticky md:top-32 md:h-fit">
          <img
            src={morpheidosLogo}
            alt="Morpheidos Tech logo"
            width={204}
            height={110}
            className="mx-auto h-auto w-52"
          />

          <p className="mt-6 text-center font-display text-2xl font-bold">Morpheidos Tech</p>

          <ul className="mt-4 space-y-2 text-center text-sm text-white/75">
            <li className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-white/40" />
              Engineering Services
            </li>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-white/40" />
              Eindhoven, Netherlands
            </li>
          </ul>

          <div className="wavy-divider my-6 w-full" aria-hidden />
          <p className="text-center text-sm text-white/70">Engineering the Possibilities</p>
          <div className="wavy-divider my-6 w-full" aria-hidden />

          <p className="text-sm leading-relaxed text-white/70">
            Morpheidos Tech provides fast, reliable, and integrated consultancy for complex product
            development across high-tech and energy industries.
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {SIDEBAR_LINKS.map(({ label, href, Icon }) => {
              const external = href.startsWith("https://");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-primary/60 hover:text-primary"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="min-w-0 max-w-[820px]">
          <SectionHeading id="about">About Morpheidos Tech</SectionHeading>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/85">
            <p>
              Founded in 2025, Morpheidos Tech operates as an independent engineering consultancy
              supporting product development across high-tech and energy industries in the
              Netherlands.
            </p>
            <p>
              We combine mechanical engineering, analysis and structured project delivery to help
              organisations move from technical questions to practical, validated solutions.
            </p>
            <p>Our main fields are precision hardware and fluid, thermal and pressure systems.</p>
          </div>

          <WavyRule />

          <SectionHeading id="services">Services</SectionHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            Engineering support from product definition to design and validation.
          </p>
          <div className="services-grid mt-6">
            <article className="service-card product-development">
              <div className="media-frame product-development-image media-position-product-development">
                <img
                  src={advantageImg}
                  alt="Precision manufacturing equipment"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="media-frame-asset"
                />
              </div>
              <div className="service-copy product-development-copy">
                <h3 className="text-[40px]">Product Development Support</h3>
                <p>
                  Supporting new product introduction and product changes by translating
                  requirements into controlled specifications, traceable PLM data, verification
                  activities, and validation evidence for reliable product release.
                </p>
                <p className="capability-line">
                  Product lifecycle management · Technical documentation · Data analysis ·
                  Teamcenter · Validation · BOM · SAP
                </p>
              </div>
            </article>

            <article className="service-card">
              <div className="media-frame media-position-mechanical-design">
                <img
                  src={mechanicalImg}
                  alt="Mechanical designer working on a technical model"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="media-frame-asset"
                />
              </div>
              <div className="service-copy">
                <h3>Mechanical Design</h3>
                <p>
                  CAD, product definition and tolerance control for components and mechanical
                  assemblies.
                </p>
                <p className="capability-line">
                  Siemens NX/TC · SolidWorks · GD&amp;T · ASME Y14.5 · Tolerance stack-up · Duramax
                  · CMM
                </p>
              </div>
            </article>

            <article className="service-card">
              <div className="media-frame media-position-engineering-analysis">
                <img
                  src={analysisImg}
                  alt="Engineering simulation in ANSYS"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="media-frame-asset"
                />
              </div>
              <div className="service-copy">
                <h3>Engineering Analysis</h3>
                <p>
                  Modelling and physics-based analysis for structural, fluid, thermal and
                  pressure-system performance.
                </p>
                <p className="capability-line">
                  CFD · FEA · ANSYS Fluent · ANSYS Mechanical · MATLAB · ASME BPVC Section VIII · PV
                  Elit
                </p>
              </div>
            </article>
          </div>

          <WavyRule />

          <SectionHeading id="method">Our Method</SectionHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            Form, understanding and execution are treated as one engineering process.
          </p>
          <div className="method-grid mt-8">
            <article className="method-item method-item--eidos">
              <h3>Eidos</h3>
              <p>Understand the requirements, principles and constraints behind the problem.</p>
            </article>
            <article className="method-item method-item--morphe">
              <h3>Morphe</h3>
              <p>Shape the solution around its function, interfaces and environment.</p>
            </article>
            <article className="method-item method-item--techne">
              <h3>Techne</h3>
              <p>Turn technical reasoning into disciplined engineering delivery.</p>
            </article>
          </div>

          <WavyRule />

          <SectionHeading id="values">Core Values</SectionHeading>
          <div className="core-values-grid mt-8">
            {VALUES.map((value) => (
              <article key={value.slug} className={"core-value core-value--" + value.slug}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>

          <WavyRule />

          <SectionHeading id="advantage">Why Morpheidos Tech</SectionHeading>
          {/* <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            Independent technical ownership supported by engineering, project and digital
            experience.
          </p> */}
          <div className="advantage-layout grid gap-6 sm:grid-cols-2">
            <div className="media-frame advantage-media-frame media-position-why-morpheidos">
              <img
                src={founderImg}
                alt="Engineer holding a semiconductor wafer"
                width={200}
                height={700}
                loading="lazy"
                className="media-frame-asset"
              />
            </div>
            <ul className="advantage-points">
              {[
                "Technical Ownership",
                "Engineering with Project Discipline",
                "High-Tech and Industrial Perspective",
                "Mechanical and Digital Capability",
              ].map((point) => (
                <li key={point} className="advantage-point">
                  <span className="advantage-point-dot" aria-hidden="true" />
                  <span className="advantage-point-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <WavyRule />

          <SectionHeading id="contact">Contact</SectionHeading>
          <div className="mt-6 rounded border border-white/10 bg-ink/60 p-5 sm:p-6">
            <div className="contact-layout">
              <div>
                <ul className="contact-details-grid text-sm text-white/85">
                  <li>
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>Morpheidos Tech</span>
                  </li>
                  {/* <li>
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Hamed Abdollahi</span>
                  </li> */}
                  <li>
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Eindhoven, Netherlands</span>
                  </li>
                  {/* <li>
                    <Mail className="h-4 w-4 text-primary" />
                    <a
                      href="mailto:hamed.abdollahi@outlook.com"
                      className="break-all hover:text-primary"
                      aria-label="Email Hamed Abdollahi"
                    >
                      hamed.abdollahi@outlook.com
                    </a>
                  </li> */}
                  <li>
                    <Phone className="h-4 w-4 text-primary" />
                    <a
                      href="tel:+31622410181"
                      className="hover:text-primary"
                      aria-label="Call Hamed Abdollahi"
                    >
                      +31 (0)6 2241 0181
                    </a>
                  </li>
                  <li>
                    <Linkedin className="h-4 w-4 text-primary" />
                    <a
                      href="https://www.linkedin.com/company/Morpheidos-Tech"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                      aria-label="Visit Hamed Abdollahi on LinkedIn"
                    >
                      linkedin.com/company/Morpheidos-Tech
                    </a>
                  </li>
                  <li>
                    <FileBadge2 className="h-4 w-4 text-primary" />
                    <span>KVK-nummer: 96785497</span>
                  </li>
                  {/* <li>
                    <Globe2 className="h-4 w-4 text-primary" />
                    <a
                      href="https://github.com/hamedeo/"
                      className="break-all hover:text-primary"
                      aria-label="Visit the Morpheidos Tech website"
                    >
                      github.com/hamedeo/
                    </a>
                  </li> */}
                </ul>

                <a
                  href={CONTACT_ROUTE}
                  className="mt-6 inline-flex rounded bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  Contact us
                </a>
              </div>

              <iframe
                title="Map of Eindhoven, Netherlands"
                src="https://www.openstreetmap.org/export/embed.html?bbox=5.44%2C51.40%2C5.47%2C51.42&layer=mapnik"
                className="contact-map"
                loading="lazy"
              />
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="font-display text-xl font-semibold text-white">
                Request Engineering Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Share the technical context, required support and expected timeline.
              </p>
              <TallyRequestForm />
            </div>
          </div>

          <WavyRule />

          <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Morpheidos Tech</p>
            <a
              href="https://hamed.morpheidos.tech/"
              className="inline-flex items-center gap-2 transition hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" />
              Visit the founder's website
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

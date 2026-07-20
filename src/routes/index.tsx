import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarClock,
  ChevronDown,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  UserPlus,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import analysisImg from "@/assets/about.jpg";
import advantageImg from "@/assets/advantage.jpg";
import mechanicalImg from "@/assets/careers.jpg";
import founderImg from "@/assets/values.jpg";
import morpheidosLogo from "@/assets/morpheidos-logo.svg";

const CONTACT_ROUTE = "https://hamedeo.github.io/contact/";
const VCARD_URL = "https://hamedeo.github.io/vcf/Hamed_Abdollahi.vcf";
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
    href: "mailto:hamed.abdollahi+MET@outlook.com",
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
            href="https://hamedeo.github.io/"
            className="group inline-flex items-center gap-2 font-sans text-white/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
            hamedeo.github.io
          </a>
          <span className="hidden font-sans text-white/40 sm:inline">
            A company by <span className="text-primary">Hamed Abdollahi</span>
          </span>
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
        <img
          src={heroImg}
          alt="Finger touching a glowing circuit grid"
          width={1920}
          height={1080}
          className="h-[520px] w-full object-cover md:h-[620px]"
        />
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
              <img
                src={advantageImg}
                alt="Engineering project collaboration"
                width={800}
                height={600}
                loading="lazy"
                className="service-image product-development-image"
              />
              <div className="service-copy product-development-copy">
                <h3 className="text-[40px]">Product Development Support</h3>
                <p>
                  Supporting new product introduction and product changes by translating 
                  requirements into controlled specifications, traceable PLM data, 
                  verification activities, and validation evidence for reliable product release.
                </p>
                <p className="capability-line">
                  Product lifecycle management · Technical documentation · Data analysis · Teamcenter · Validation · BOM · SAP
                </p>
              </div>
            </article>

            <article className="service-card">
              <img
                src={mechanicalImg}
                alt="Engineering collaborators reviewing product work"
                width={1200}
                height={800}
                loading="lazy"
                className="service-image"
              />
              <div className="service-copy">
                <h3>Mechanical Design</h3>
                <p>
                  CAD, product definition and tolerance control for components and mechanical
                  assemblies.
                </p>
                <p className="capability-line">
                  Siemens NX/TC · SolidWorks · GD&amp;T · ASME Y14.5 · Tolerance stack-up · Duramax · CMM
                </p>
              </div>
            </article>

            <article className="service-card">
              <img
                src={analysisImg}
                alt="Engineering data analysis workspace"
                width={1200}
                height={800}
                loading="lazy"
                className="service-image"
              />
              <div className="service-copy">
                <h3>Engineering Analysis</h3>
                <p>
                  Modelling and physics-based analysis for structural, fluid, thermal and pressure-system
                  performance.
                </p>
                <p className="capability-line">
                  CFD · FEA · ANSYS Fluent · ANSYS Mechanical · MATLAB · ASME BPVC Section VIII · PV Elit 
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
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <img
              src={founderImg}
              alt="Engineer working at a laptop"
              width={200}
              height={500}
              loading="lazy"
              className="h-52 w-full rounded object-cover object-top ring-1 ring-white/10 sm:h-full"
            />
            <ul className="space-y-4 text-sm">
              {[
                "Technical Ownership",
                "Engineering with Project Discipline",
                "High-Tech and Industrial Perspective",
                "Mechanical and Digital Capability",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-b border-white/10 pb-4 font-display text-base font-semibold text-white last:border-b-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{point}</span>
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
                  Contact Me
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
              href="https://hamedeo.github.io/"
              className="inline-flex items-center gap-2 transition hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to hamedeo.github.io
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

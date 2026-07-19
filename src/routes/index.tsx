import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarClock,
  Users,
  TrendingUp,
  BarChart3,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
  ArrowLeft,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import valuesImg from "@/assets/values.jpg";
import teamImg from "@/assets/team.jpg";
import teamWideImg from "@/assets/team-wide.jpg";
import advantageImg from "@/assets/advantage.jpg";
import careersImg from "@/assets/careers.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Morpheidos Tech — Engineering the possibilities" },
      { name: "description", content: "Netherlands-based technology company building embedded systems, cloud platforms and industrial software for forward-looking industries." },
    ],
  }),
});

const NAV = [
  { label: "ABOUT", href: "#about" },
  { label: "CORE VALUES", href: "#values" },
  { label: "TEAM", href: "#team" },
  { label: "ADVANTAGES", href: "#advantages" },
  { label: "CAREER", href: "#career" },
  { label: "CONTACT", href: "#contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        {[
          [8, 8], [24, 8], [40, 8],
          [8, 24], [24, 24], [40, 24],
          [8, 40], [24, 40], [40, 40],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill={[0, 4, 8].includes(i) ? "var(--primary)" : "#8a8a8a"}
          />
        ))}
      </svg>
      <div className="leading-tight">
        <div className="font-display text-xl font-bold tracking-[0.18em] text-foreground">MORPHEIDOS</div>
        <div className="font-display text-[10px] tracking-[0.35em] text-muted-foreground">T E C H N O L O G Y</div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Pure-black canvas with magenta accents, inspired by hamedeo.github.io */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* HERO */}
        <section className="relative bg-ink pt-6">
          <div className="relative">
            <img
              src={heroImg}
              alt="Finger touching a glowing circuit grid"
              width={1920}
              height={1200}
              className="clip-notch-tr h-[520px] w-full object-cover md:h-[640px]"
            />
            <div className="clip-notch-tr absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

            {/* Nav */}
            <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-12">
              <Logo />
              <nav className="hidden items-center gap-8 md:flex">
                {NAV.map((n, i) => (
                  <a
                    key={n.label}
                    href={n.href}
                    className={`font-display text-sm tracking-[0.2em] text-white/90 transition hover:text-primary ${i === 0 ? "border-b-2 border-primary pb-1 text-primary" : ""}`}
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Headline */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="ml-auto w-full max-w-xl px-6 pt-24 text-right md:px-12">
                <h1 className="font-display text-5xl font-light leading-[1.05] text-white md:text-6xl">
                  Engineering<br />the possibilities
                </h1>
                <a
                  href="#about"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold tracking-[0.25em] text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
                >
                  LEARN MORE <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative bg-background px-6 py-20 md:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-foreground">ABOUT</h2>
              <div className="mt-4 h-1 w-16 bg-primary" />
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  At Morpheidos Tech we deliver end-to-end technology services from
                  concept and architecture through prototyping, production
                  engineering and long-term operations.
                </p>
                <p>
                  Headquartered in the Netherlands, our engineers work
                  hand-in-hand with clients across Europe to build embedded
                  systems, cloud platforms and industrial software that create
                  measurable business value.
                </p>
                <p>
                  Today we are proud of a growing reputation with clients in
                  mobility, energy and advanced manufacturing — and of a proven
                  track record delivering on time, on budget and on ambition.
                </p>
              </div>
              <a
                href="#values"
                className="mt-8 inline-block bg-primary px-8 py-3 font-display text-xs font-semibold tracking-[0.25em] text-primary-foreground transition hover:brightness-110"
              >
                KNOW MORE
              </a>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full border-4 border-primary/70" aria-hidden />
              <img
                src={aboutImg}
                alt="Morpheidos engineer at workstation"
                width={1200}
                height={800}
                loading="lazy"
                className="relative h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section id="values" className="relative bg-ink px-6 py-20 md:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 h-40 w-40 border-4 border-primary" aria-hidden />
              <div className="absolute -right-6 top-8 h-56 w-56 bg-primary/90" aria-hidden />
              <img
                src={valuesImg}
                alt="Engineer working at dusk"
                width={900}
                height={1100}
                loading="lazy"
                className="relative z-[1] h-[420px] w-full object-cover"
              />
            </div>
            <div className="text-white/85">
              <div className="text-right">
                <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-white">CORE VALUES</h2>
                <div className="ml-auto mt-4 h-1 w-16 bg-primary" />
              </div>

              <div className="mt-10 space-y-8">
                {[
                  { t: "PEOPLE FIRST", d: "Our engineers are at the heart of everything we build. We invest in their growth, their craft and their voice." },
                  { t: "INTEGRITY", d: "We do what we say. Honest conversations, transparent estimates and code we are proud to hand over." },
                  { t: "INNOVATION", d: "We stay curious. From FPGA firmware to distributed cloud, we explore what is next so clients ship what is best." },
                  { t: "CRAFT EXCELLENCE", d: "Every deliverable meets a high bar for architecture, testing and documentation — nothing shipped is throwaway." },
                ].map((v) => (
                  <div key={v.t}>
                    <h3 className="font-display text-base font-bold tracking-[0.2em] text-white">{v.t}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="relative bg-background px-6 py-20 md:px-12">
          <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-foreground">OUR TEAM</h2>
          <div className="mt-4 h-1 w-16 bg-primary" />

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <img
              src={teamImg}
              alt="Morpheidos engineering team collaborating"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover md:h-80"
            />
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Over the past decade our team has accumulated deep experience
                delivering complex hardware/software systems for European
                industry leaders — from safety-critical firmware to
                cloud-native platforms handling millions of daily events.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {[
                  "Full-stack expertise across embedded C/C++, Rust, TypeScript and Python",
                  "Deep experience with cloud-native architectures on AWS, Azure and on-prem Kubernetes",
                  "Hands-on with industrial protocols: CAN, Modbus, OPC-UA and MQTT",
                  "Certified in ISO 27001 and IEC 62443 secure development practices",
                  "Fluent collaboration across Dutch, English, German and French",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-none bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <img
            src={teamWideImg}
            alt="Morpheidos company team"
            width={1920}
            height={900}
            loading="lazy"
            className="mt-16 h-72 w-full object-cover md:h-96"
          />
        </section>

        {/* ADVANTAGES */}
        <section id="advantages" className="relative bg-background px-6 py-20 md:px-12">
          <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-foreground">
            OUR<br />ADVANTAGE
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary" />

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-40 bg-primary" aria-hidden />
              <img
                src={advantageImg}
                alt="Business handshake"
                width={1000}
                height={800}
                loading="lazy"
                className="relative h-72 w-full object-cover md:h-80"
              />
              <div className="absolute -bottom-6 right-6 h-24 w-24 border-4 border-primary" aria-hidden />
            </div>

            <div className="space-y-8">
              {[
                { I: CalendarClock, t: "EXPERTISE", d: ["Extensive industry knowledge and delivery experience", "Senior-heavy team with 10+ years average tenure", "Full lifecycle: discovery, build and operations"] },
                { I: Users, t: "CULTURE", d: ["Client-oriented, no-ego collaboration", "Flat structure — engineers own outcomes end-to-end", "Continuous learning built into every sprint"] },
                { I: TrendingUp, t: "RESULTS", d: ["Measurable business impact from day one", "On-time, on-budget delivery track record", "Exceeds SLAs and customer expectations"] },
                { I: BarChart3, t: "APPROACH", d: ["Flexible and responsive engagement models", "Transparent communication and reporting", "Strategic execution aligned with your roadmap"] },
              ].map(({ I, t, d }) => (
                <div key={t} className="flex gap-5">
                  <div className="flex h-14 w-14 flex-none items-center justify-center bg-ink text-primary">
                    <I className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-[0.2em] text-foreground">{t}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {d.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAREER */}
        <section id="career" className="relative grid md:grid-cols-2">
          <div className="bg-ink px-6 py-20 text-white md:px-12">
            <h2 className="font-display text-3xl font-bold tracking-[0.15em]">CAREERS</h2>
            <div className="mt-4 h-1 w-16 bg-primary" />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/75">
              As one of the leading independent engineering studios in the
              Netherlands, we are always interested to meet people who want to
              become part of the Morpheidos family.
            </p>
            <p className="mt-4 text-sm italic text-white/60">
              Join us. Build something that matters.
            </p>
            <a
              href="mailto:careers@morpheidos.nl"
              className="mt-8 inline-block bg-primary px-8 py-3 font-display text-xs font-semibold tracking-[0.25em] text-primary-foreground transition hover:brightness-110"
            >
              SEE CAREERS
            </a>
          </div>
          <img
            src={careersImg}
            alt="Morpheidos colleagues collaborating"
            width={1200}
            height={800}
            loading="lazy"
            className="h-72 w-full object-cover md:h-auto"
          />
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative grid bg-background md:grid-cols-2">
          <iframe
            title="Morpheidos office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.87%2C52.36%2C4.92%2C52.39&layer=mapnik"
            className="h-72 w-full grayscale md:h-full"
            loading="lazy"
          />
          <div className="px-6 py-16 md:px-12">
            <h2 className="font-display text-3xl font-bold tracking-[0.15em] text-foreground">CONTACT US</h2>
            <div className="mt-4 h-1 w-16 bg-primary" />
            <ul className="mt-10 space-y-6 text-sm text-foreground">
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+31 20 123 4567 &nbsp;/&nbsp; +31 6 12 34 56 78</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@morpheidos.nl" className="hover:text-primary">hello@morpheidos.nl</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>Herengracht 420<br />1017 BZ Amsterdam<br />The Netherlands</span>
              </li>
            </ul>
            <div className="mt-10 flex gap-3">
              {[Facebook, Linkedin, Instagram].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative bg-ink px-6 py-8 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Logo />
            <nav className="flex flex-wrap items-center gap-6">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} className="font-display text-xs tracking-[0.25em] text-white/70 transition hover:text-primary">
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href="#top"
              className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition hover:brightness-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Morpheidos Tech B.V. — Registered in the Netherlands. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

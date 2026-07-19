import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarClock,
  Users,
  TrendingUp,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  ArrowLeft,
  Briefcase,
  Building2,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import teamWideImg from "@/assets/team-wide.jpg";
import advantageImg from "@/assets/advantage.jpg";
import careersImg from "@/assets/careers.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Morpheidos Tech — Engineering the possibilities" },
      {
        name: "description",
        content:
          "Netherlands-based engineering studio building embedded systems, cloud platforms and industrial software for forward-looking industries.",
      },
    ],
  }),
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

function WavyRule() {
  return <div className="wavy-divider my-6 w-full" aria-hidden />;
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="flex scroll-mt-24 items-center gap-3 font-display text-2xl font-bold text-primary"
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      {children}
    </h2>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top return bar */}
      <div className="border-b border-white/10">
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
      </div>

      {/* Top nav */}
      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-12">
        <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-3 text-[15px]">
          {NAV.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              className={`font-sans transition hover:text-primary ${
                i === 0
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-white/80"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main grid: sidebar + content */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pb-24 pt-10 md:grid-cols-[300px_1fr] md:gap-16 md:px-12">
        {/* SIDEBAR */}
        <aside className="md:sticky md:top-8 md:h-fit">
          {/* Brand mark */}
          <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-ink ring-1 ring-white/10">
            <svg viewBox="0 0 100 100" className="h-28 w-28" aria-hidden>
              {[
                [25, 25], [50, 25], [75, 25],
                [25, 50], [50, 50], [75, 50],
                [25, 75], [50, 75], [75, 75],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="6"
                  fill={[0, 4, 8].includes(i) ? "var(--primary)" : "#c7c7c7"}
                />
              ))}
            </svg>
          </div>

          <h1 className="mt-6 text-center font-display text-2xl font-bold">
            Morpheidos Tech
          </h1>

          <ul className="mt-4 space-y-2 text-center text-sm text-white/75">
            <li className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-white/40" /> Engineering studio
            </li>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-white/40" /> Eindhoven, Netherlands
            </li>
            <li className="flex items-center justify-center gap-2">
              <Building2 className="h-4 w-4 text-white/40" /> Founded 2024
            </li>
          </ul>

          <div className="wavy-divider my-6 w-full" aria-hidden />
          <p className="text-center text-sm text-white/70">
            Engineering the possibilities
          </p>
          <div className="wavy-divider my-6 w-full" aria-hidden />

          <p className="text-sm leading-relaxed text-white/70">
            We are an independent engineering studio in the Netherlands
            delivering embedded systems, cloud platforms and industrial
            software for forward-looking industries across Europe.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-white/60">
            <a href="mailto:hello@morpheidos.nl" className="transition hover:text-primary" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="transition hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://hamedeo.github.io/" className="transition hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="tel:+31201234567" className="transition hover:text-primary" aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="max-w-[820px]">
          {/* ABOUT */}
          <SectionHeading id="about">About us</SectionHeading>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/85">
            <p>
              <strong className="text-white">Morpheidos Tech</strong> is a
              Netherlands-based engineering studio delivering end-to-end
              technology services — from concept and architecture through
              prototyping, production engineering and long-term operations.
            </p>
            <p>
              Our engineers work hand-in-hand with clients across Europe to
              build <strong className="text-white">embedded systems</strong>,{" "}
              <strong className="text-white">cloud platforms</strong> and{" "}
              <strong className="text-white">industrial software</strong> that
              create measurable business value.
            </p>
            <p>
              We serve clients in mobility, energy and advanced manufacturing
              with a proven track record of delivering on time, on budget and
              on ambition.
            </p>
          </div>

          <WavyRule />

          {/* SERVICES */}
          <SectionHeading id="services">Services</SectionHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                I: CalendarClock,
                t: "Embedded engineering",
                d: "Firmware and hardware for safety-critical, connected devices — from FPGA to production-grade C/C++ and Rust.",
              },
              {
                I: BarChart3,
                t: "Cloud & data platforms",
                d: "Cloud-native architectures on AWS, Azure and on-prem Kubernetes handling millions of daily industrial events.",
              },
              {
                I: TrendingUp,
                t: "Industrial software",
                d: "OPC-UA, MQTT, CAN and Modbus integrations wiring plant floors to modern analytics stacks.",
              },
              {
                I: Users,
                t: "Advisory & delivery",
                d: "Discovery, roadmapping and long-term operations with senior engineers embedded in your team.",
              },
            ].map(({ I, t, d }) => (
              <div key={t} className="rounded border border-white/10 bg-ink/60 p-5">
                <I className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-base font-semibold text-white">
                  {t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{d}</p>
              </div>
            ))}
          </div>

          <WavyRule />

          {/* VALUES */}
          <SectionHeading id="values">Core values</SectionHeading>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              { t: "People first", d: "Our engineers are at the heart of everything we build. We invest in their growth and their voice." },
              { t: "Integrity", d: "Honest conversations, transparent estimates, and code we are proud to hand over." },
              { t: "Innovation", d: "From FPGA firmware to distributed cloud, we explore what is next so clients ship what is best." },
              { t: "Craft excellence", d: "Every deliverable meets a high bar for architecture, testing and documentation." },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="font-display text-base font-semibold text-white">
                  <span className="mr-2 text-primary">•</span>
                  {v.t}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{v.d}</p>
              </div>
            ))}
          </div>

          <WavyRule />

          {/* TEAM */}
          <SectionHeading id="team">Our team</SectionHeading>
          <p className="mt-6 text-[15px] leading-relaxed text-white/85">
            Over the past decade our team has delivered complex hardware and
            software systems for European industry leaders — from
            safety-critical firmware to cloud-native platforms handling
            millions of daily events.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            {[
              "Full-stack expertise across embedded C/C++, Rust, TypeScript and Python",
              "Cloud-native architectures on AWS, Azure and on-prem Kubernetes",
              "Industrial protocols: CAN, Modbus, OPC-UA and MQTT",
              "ISO 27001 and IEC 62443 secure development practices",
              "Fluent collaboration across Dutch, English, German and French",
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <img
            src={teamWideImg}
            alt="Morpheidos engineering team"
            width={1600}
            height={700}
            loading="lazy"
            className="mt-8 h-56 w-full rounded object-cover ring-1 ring-white/10 md:h-72"
          />

          <WavyRule />

          {/* ADVANTAGE */}
          <SectionHeading id="advantage">Why work with us</SectionHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <img
              src={advantageImg}
              alt="Business collaboration"
              width={800}
              height={600}
              loading="lazy"
              className="h-48 w-full rounded object-cover ring-1 ring-white/10 sm:h-full"
            />
            <ul className="space-y-4 text-sm text-white/80">
              {[
                ["Senior-heavy team", "10+ years average engineering tenure."],
                ["End-to-end delivery", "From discovery to build to operations."],
                ["On-time, on-budget", "Predictable delivery, measurable outcomes."],
                ["Transparent by default", "Clear reporting, no black boxes."],
              ].map(([t, d]) => (
                <li key={t}>
                  <span className="font-display font-semibold text-white">{t}. </span>
                  <span className="text-white/70">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <WavyRule />

          {/* CAREERS */}
          <SectionHeading id="careers">Careers</SectionHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_240px] sm:items-start">
            <div>
              <p className="text-[15px] leading-relaxed text-white/85">
                We are always interested to meet engineers who want to become
                part of the Morpheidos family. Join us and build something
                that matters — across mobility, energy and advanced
                manufacturing.
              </p>
              <a
                href="mailto:careers@morpheidos.nl"
                className="mt-6 inline-block rounded bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                careers@morpheidos.nl
              </a>
            </div>
            <img
              src={careersImg}
              alt="Colleagues collaborating"
              width={600}
              height={600}
              loading="lazy"
              className="h-40 w-full rounded object-cover ring-1 ring-white/10 sm:h-48"
            />
          </div>

          <WavyRule />

          {/* CONTACT */}
          <SectionHeading id="contact">Contact</SectionHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                +31 20 123 4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@morpheidos.nl" className="hover:text-primary">
                  hello@morpheidos.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  High Tech Campus 1<br />
                  5656 AE Eindhoven<br />
                  The Netherlands
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-primary" />
                KVK 00000000 — Registered in the Netherlands
              </li>
            </ul>
            <iframe
              title="Morpheidos office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.44%2C51.40%2C5.47%2C51.42&layer=mapnik"
              className="h-56 w-full rounded ring-1 ring-white/10 grayscale"
              loading="lazy"
            />
          </div>

          <WavyRule />

          {/* Footer note */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Morpheidos Tech B.V.</p>
            <a
              href="https://hamedeo.github.io/"
              className="inline-flex items-center gap-2 transition hover:text-primary"
            >
              <ArrowLeft className="h-3 w-3" /> Back to hamedeo.github.io
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

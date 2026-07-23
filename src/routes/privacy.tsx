import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyStatement,
  head: () => ({
    meta: [
      { title: "Privacy Statement | Morpheidos Tech" },
      {
        name: "description",
        content:
          "Privacy statement explaining how Morpheidos Tech processes personal and website information.",
      },
    ],
  }),
});

function PrivacyStatement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-5 md:px-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-sans text-sm text-white/70 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            Back to homepage
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[820px] px-6 py-16 md:px-12 md:py-24">
        <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
          Privacy Statement
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-white/80">
          Morpheidos Tech respects your privacy and processes personal information only where needed
          for business communication, service delivery and consented website analytics.
        </p>

        <div className="wavy-divider my-10 w-full" aria-hidden />

        <div className="space-y-10 text-[15px] leading-relaxed text-white/80">
          <section aria-labelledby="information-heading">
            <h2 id="information-heading" className="font-display text-2xl font-bold text-primary">
              Information we may process
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-primary">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Telephone numbers</li>
              <li>Messages and project information submitted through contact channels</li>
              <li>Limited technical website information after Analytics consent</li>
            </ul>
          </section>

          <section aria-labelledby="use-heading">
            <h2 id="use-heading" className="font-display text-2xl font-bold text-primary">
              How we use information
            </h2>
            <p className="mt-4">Information may be used to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-primary">
              <li>Respond to enquiries</li>
              <li>Prepare proposals</li>
              <li>Communicate with potential and existing clients</li>
              <li>Perform agreements</li>
              <li>Understand general website usage after consent</li>
            </ul>
          </section>

          <section aria-labelledby="analytics-heading">
            <h2 id="analytics-heading" className="font-display text-2xl font-bold text-primary">
              Analytics and service providers
            </h2>
            <p className="mt-4">
              Google Analytics is activated only after you accept Analytics cookies. If you reject
              them, Analytics remains disabled.
            </p>
            <p className="mt-3">
              Website hosting, email and contact-form providers may process necessary technical
              information to provide their services.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="font-display text-2xl font-bold text-primary">
              Your personal data
            </h2>
            <p className="mt-4">
              For questions or requests concerning your personal data, contact{" "}
              <a
                href="mailto:info@morpheidos.tech"
                className="font-medium text-white underline decoration-primary underline-offset-4 transition hover:text-primary"
              >
                info@morpheidos.tech
              </a>
              .
            </p>
          </section>
        </div>

        <div className="wavy-divider my-10 w-full" aria-hidden />

        <address className="not-italic text-sm leading-7 text-white/70">
          <p className="font-display text-lg font-semibold text-white">Morpheidos Tech</p>
          <p>KVK: 96785497</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@morpheidos.tech"
              className="underline decoration-primary underline-offset-4 transition hover:text-primary"
            >
              info@morpheidos.tech
            </a>
          </p>
        </address>
      </main>
    </div>
  );
}

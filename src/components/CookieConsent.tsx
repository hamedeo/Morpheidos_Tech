import { useEffect, useState } from "react";

const CONSENT_KEY = "morpheidos-analytics-consent";
const MEASUREMENT_ID = "G-RYSZLYEM80";
const SCRIPT_ID = "morpheidos-google-analytics";

type Consent = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;

function setAnalyticsDisabled(disabled: boolean) {
  Object.assign(window, {
    [`ga-disable-${MEASUREMENT_ID}`]: disabled,
  });
}

function loadAnalytics() {
  if (analyticsInitialized) {
    return;
  }

  analyticsInitialized = true;
  setAnalyticsDisabled(false);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted") {
      setConsent("accepted");
      loadAnalytics();
      return;
    }

    if (savedConsent === "rejected") {
      setConsent("rejected");
      setAnalyticsDisabled(true);
      return;
    }

    setConsent(null);
  }, []);

  function saveConsent(choice: Consent) {
    localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);

    if (choice === "accepted") {
      loadAnalytics();
    } else {
      setAnalyticsDisabled(true);
    }
  }

  if (consent !== null) {
    return null;
  }

  const buttonClassName =
    "inline-flex min-w-24 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <section
      aria-label="Analytics cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-lg border border-border bg-background/95 p-4 text-foreground shadow-xl backdrop-blur-md"
    >
      <p className="text-sm text-muted-foreground">
        We use optional analytics cookies to understand how this website is used.{" "}
        <a
          href="/privacy"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
        >
          Privacy policy
        </a>
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          aria-label="Reject analytics cookies"
          className={buttonClassName}
          onClick={() => saveConsent("rejected")}
        >
          Reject
        </button>
        <button
          type="button"
          aria-label="Accept analytics cookies"
          className={buttonClassName}
          onClick={() => saveConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </section>
  );
}

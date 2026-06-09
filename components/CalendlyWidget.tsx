import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/guillermo-william-morales/discovery-call-with-morales-solutions";

export default function CalendlyWidget() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "1000px" }}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}

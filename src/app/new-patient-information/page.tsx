import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient Information | Zangmeister Cancer Center",
};

const pageStyles = `
  .inner-page { font-family: inherit; min-height: 100vh; background: white; }
  .page-breadcrumb { background: #2c5234; padding: 0.6rem 2rem; }
  .page-breadcrumb a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 0.85rem; letter-spacing: 0.02em; }
  .page-breadcrumb a:hover { color: white; }
  .page-hero { position: relative; width: 100%; aspect-ratio: 19 / 4; min-height: 140px; overflow: hidden; }
  .page-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 35%; display: block; }
  .page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, transparent 30%, rgba(0,0,0,0.45) 100%); }
  .page-hero-title { position: absolute; bottom: 1.5rem; right: 2rem; color: white; font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: bold; text-align: right; text-shadow: 0 1px 6px rgba(0,0,0,0.5); line-height: 1.1; }
  .page-body { max-width: 80rem; margin: 0 auto; padding: 2.5rem 2rem; display: grid; grid-template-columns: 1fr 17rem; gap: 3rem; align-items: start; }
  .page-content h2 { color: #2c5234; font-size: 1.25rem; font-weight: bold; margin: 1.75rem 0 0.5rem; }
  .page-content h2:first-child { margin-top: 0; }
  .page-content p { color: #333; line-height: 1.7; margin: 0 0 1rem; font-size: 0.975rem; }
  .page-content ul { padding-left: 1.5rem; margin: 0 0 1rem; }
  .page-content ul li { color: #333; line-height: 1.7; font-size: 0.975rem; margin-bottom: 0.25rem; }
  .page-content a { color: #a3631f; }
  .page-sidebar { background: #2c5234; padding: 1.25rem 1rem; border-radius: 0.1rem; }
  .page-sidebar-title { color: white; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; display: block; }
  .page-sidebar ul { list-style: none; padding: 0; margin: 0; }
  .page-sidebar li { border-top: 1px solid rgba(255,255,255,0.2); }
  .page-sidebar li:first-child { border-top: none; }
  .page-sidebar a { display: block; color: white; text-decoration: none; padding: 0.5rem 0; font-size: 0.9rem; transition: color 0.2s; }
  .page-sidebar a:hover { color: #f38f2b; }
  @media (max-width: 55rem) {
    .page-body { grid-template-columns: 1fr; gap: 2rem; }
    .page-hero { aspect-ratio: 16 / 5; }
    .page-hero-title { font-size: clamp(1.1rem, 5vw, 1.6rem); bottom: 1rem; right: 1rem; }
  }
`;

export default function NewPatientInformationPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/service-care-coordination.jpg" alt="New Patient Information" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">New Patient Information</h1>
        </div>

        <div className="page-body">
          <main className="page-content">
            <p>
              We welcome you to Zangmeister Cancer Center. We serve the central Ohio area as an outpatient treatment
              clinic for patients diagnosed with cancer and blood disorders. Our Board-certified providers are
              committed to providing quality, evidence-based medical oncology, gynecologic oncology and hematology
              care.
            </p>
            <p>
              For more than 30 years, our providers and staff have been offering a full range of exceptional medical
              oncology, gynecologic oncology and hematology services and delivering care that is of the highest quality
              and customized for the needs of each patient. Our services are available to all who seek them.
            </p>

            <h2>New Patient Appointments</h2>
            <p>
              You may become our patient through a physician&apos;s referral or transfer. We welcome the opportunity
              to provide second opinions because an initial diagnosis can be stressful, and we strive to keep waiting
              times for appointments to a minimum. Be assured that our providers will do their very best to help you.
              For new patient appointments, please consult your primary care provider or specialty provider for a
              referral or email{" "}
              <a href="mailto:zangcancercentercolombus@gmail.com">
                zangcancercentercolombus@gmail.com
              </a>.
            </p>

            <h2>What to Expect During Your First Visit</h2>
            <p>
              To better serve you during your visit, we ask that you bring a list of your medications, prior
              illnesses, previous surgeries and current allergies. Always bring your insurance card, and let us know
              whenever you change your address, telephone number, employment, marital status or insurance. We accept
              most major insurance plans.
            </p>
            <p>
              During your initial office visit, you will have the opportunity for an open conversation with your
              physician. You will learn about your treatment options, what is involved with each, any potential side
              effects and how our team will guide and support you. If you can, bring someone with you such as a
              family member or friend — they can provide emotional support, take notes, and help you remember what
              the physician says.
            </p>

            <h2>First Visit Checklist</h2>
            <p>Please make sure you bring all of the following on your first visit:</p>
            <ul>
              <li>Patient information form</li>
              <li>New Patient History Questionnaire</li>
              <li>CD and/or report of past radiology exams (if available)</li>
              <li>Current insurance card(s)</li>
              <li>Pharmacy card</li>
              <li>Driver&apos;s license or photo ID</li>
              <li>Co-payment for first visit</li>
            </ul>

            <h2>What You Should Know About Your Chemotherapy Treatment</h2>
            <p>
              Time permitting prior to your first treatment, you will have a &ldquo;teaching appointment&rdquo; with
              one of our nurses. As part of this appointment, you will see one of our financial counselors to discuss
              outside resources to assist with treatment costs. This session also includes a tour of our infusion
              suite. We highly encourage you to bring a family member or friend to this appointment.
            </p>
            <p>
              We want you to feel relaxed and comfortable when you receive treatment. The following items are
              provided for your use in the infusion suite:
            </p>
            <ul>
              <li>Blankets and pillows</li>
              <li>Juice, coffee and tea</li>
              <li>Cookies, crackers and chips</li>
              <li>Hard candy</li>
              <li>Wi-Fi access</li>
              <li>Books and magazines</li>
            </ul>

            <h2>If You Have Questions</h2>
            <p>
              If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room.
              During regular office hours, call <strong>(614) 383-6000</strong> and ask for your provider&apos;s
              nurse. If calling after hours, our answering service will take a message or, if urgent, connect you
              with the on-call provider. If you have not received a response within 1 hour, please call back.
            </p>
            <h2>Frequently Asked Billing Questions</h2>
            <p>
              Our trained billing specialists are available Monday through Friday from 8 a.m. to 4:30 p.m. For
              billing questions, please call AON Billing at <strong>(855) 963-2100</strong>.
            </p>
            <p>
              You may be responsible for copayments for office visits, treatment, scans, and medication. Our on-site
              financial counselors can help with any questions about costs, billing, and payment options. Statements
              are sent at the beginning of each month and are due upon receipt.
            </p>
            <p>
              We are sensitive to financial complications during times of illness. Our financial counselors are
              available to discuss payment arrangements if you are unable to pay in full. We offer the CarePayment
              Financing Program for interest-free payments over 3 to 48 months, as well as an in-house interest-free
              plan for 12 months.
            </p>
          </main>

          <aside className="page-sidebar">
            <span className="page-sidebar-title">For Patients</span>
            <ul>
              <li><Link href="/patient-story">Patient Stories</Link></li>
              <li>
                <a href="https://www.aoncology.com/patient-resources/" target="_blank" rel="noopener noreferrer">
                  Resources
                </a>
              </li>
              <li><Link href="/american-oncology-cares">American Oncology Cares</Link></li>
              <li><Link href="/cancare">CanCare</Link></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "American Oncology Cares | Zangmeister Cancer Center",
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
  .apply-cta {
    display: inline-block;
    margin: 0.5rem 0 1.5rem;
    background: #2c5234;
    color: white !important;
    text-decoration: none;
    padding: 0.75rem 1.75rem;
    border-radius: 0.15rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: background 0.2s;
  }
  .apply-cta:hover { background: #3a6b44; }
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

export default function AmericanOncologyCaresPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/service-care-coordination.jpg" alt="American Oncology Cares" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">American Oncology Cares</h1>
        </div>

        <div className="page-body">
          <main className="page-content">
            <p>
              As the number of individuals diagnosed with cancer increases, the funds available to financially
              support them decreases. American Oncology Cares provides essential non-medical financial assistance
              for adult cancer patients undergoing treatment.
            </p>
            <p>
              Giving patients and their families peace of mind — knowing that essential living expenses like rent
              or mortgage, utilities, transportation, and food are being taken care of — allows them to focus on
              what matters most: their health journey.
            </p>

            <h2>Get the financial support you and your family need to fight cancer.</h2>
            <p>
              Qualified patients can receive a grant of up to <strong>$1,500</strong> and may receive assistance
              twice per calendar year. Application review and processing takes up to 10 business days.
            </p>
            <p>To apply for assistance for yourself or a loved one:</p>
            <a
              href="https://charities.org/AONCares"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-cta"
            >
              Apply at charities.org/AONCares
            </a>

            <h2>Patient Eligibility</h2>
            <ul>
              <li>Patient must be receiving active cancer treatment.</li>
              <li>Patient must be at least 18 years old.</li>
              <li>
                Patient&apos;s household income must be at or below 200% of the U.S. Federal Poverty Guidelines.
              </li>
            </ul>

            <h2>To Donate</h2>
            <p>
              If you would like to support cancer patients in financial need, you can donate to the American
              Oncology Cares fund:
            </p>
            <ul>
              <li>
                Via credit card:{" "}
                <a href="https://www.aoncology.com/AONCares" target="_blank" rel="noopener noreferrer">
                  AONcology.com/AONCares
                </a>
              </li>
              <li>
                Make check payable to &ldquo;America&apos;s Charities – Fiscal Agent&rdquo; (TIN: 54-1517707).
                Enter &ldquo;American Oncology Cares&rdquo; on the memo line.
              </li>
            </ul>
            <p>
              America&apos;s Charities — 14200 Park Meadow Dr., Suite 330 South, Chantilly, VA 20151
            </p>
          </main>

          <aside className="page-sidebar">
            <span className="page-sidebar-title">For Patients</span>
            <ul>
              <li><Link href="/new-patient-information">New Patient Information</Link></li>
              <li><Link href="/patient-story">Patient Stories</Link></li>
              <li>
                <a href="https://www.aoncology.com/patient-resources/" target="_blank" rel="noopener noreferrer">
                  Resources
                </a>
              </li>
              <li><Link href="/cancare">CanCare</Link></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

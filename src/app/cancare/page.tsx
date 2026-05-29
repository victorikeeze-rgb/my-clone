import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CanCare | Zangmeister Cancer Center",
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
  .cancare-cta {
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
  .cancare-cta:hover { background: #3a6b44; }
  .cancare-free-badge {
    background: #f5f9f6;
    border-left: 4px solid #2c5234;
    padding: 1rem 1.25rem;
    margin: 1rem 0 1.5rem;
    border-radius: 0 0.15rem 0.15rem 0;
  }
  .cancare-free-badge p { margin: 0; font-weight: 600; color: #2c5234; font-size: 1rem; }
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

export default function CanCarePage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/service-care-coordination.jpg" alt="CanCare" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">CanCare</h1>
        </div>

        <div className="page-body">
          <main className="page-content">
            <h2>You Don&apos;t Have to Face Cancer Alone</h2>
            <p>
              A cancer diagnosis changes everything. The questions, the fear, the moments of feeling completely
              alone even when surrounded by people who love you — it can be overwhelming. That&apos;s why
              we&apos;ve partnered with CanCare, a leading nonprofit cancer support organization, to make free,
              personal support available to every patient and family member.
            </p>

            <h2>What is CanCare?</h2>
            <p>
              CanCare connects people facing cancer with trained volunteer survivors and caregivers — people who
              have lived it themselves and are ready to walk alongside you. This isn&apos;t a hotline or a
              chatbot. It&apos;s a real person, carefully matched to your situation, who understands what
              you&apos;re going through because they&apos;ve been there.
            </p>
            <p>
              Every CanCare volunteer is a cancer survivor or experienced caregiver who has completed
              CanCare&apos;s rigorous training program. Conversations are private, personal, and entirely at
              your own pace.
            </p>

            <h2>Who is CanCare For?</h2>
            <p>CanCare support is available to patients and their loved ones at any stage of the cancer journey — including:</p>
            <ul>
              <li>Patients in active treatment looking for someone who truly gets it</li>
              <li>Survivors navigating life after treatment</li>
              <li>Caregivers and family members who need support of their own</li>
            </ul>

            <h2>How it Works</h2>
            <p>
              Getting connected to a CanCare volunteer is simple. Ask your care team at Zangmeister Cancer Center
              about CanCare, and we&apos;ll help connect you with a volunteer who has been through a similar
              experience — matched by diagnosis type, treatment, age, or other factors that matter to you.
              From there, you connect at your own pace, on your own schedule.
            </p>

            <h2>It&apos;s Free. Always.</h2>
            <div className="cancare-free-badge">
              <p>CanCare support is completely free to all patients and families. There is no cost, ever.</p>
            </div>

            <h2>Request Support from CanCare</h2>
            <p>
              Talk to your Zangmeister care team or ask at the front desk to be connected with a CanCare
              volunteer. You can also reach CanCare directly:
            </p>
            <a
              href="https://www.cancare.org"
              target="_blank"
              rel="noopener noreferrer"
              className="cancare-cta"
            >
              Visit cancare.org
            </a>

            <h2>Have You Been There? Consider Giving Back.</h2>
            <p>
              If you are a cancer survivor or experienced caregiver and would like to volunteer with CanCare,
              your story could be the lifeline another patient needs. Visit{" "}
              <a href="https://www.cancare.org" target="_blank" rel="noopener noreferrer">
                cancare.org
              </a>{" "}
              to learn more about becoming a volunteer.
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
              <li><Link href="/american-oncology-cares">American Oncology Cares</Link></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

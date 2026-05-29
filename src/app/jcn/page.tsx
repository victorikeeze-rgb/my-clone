import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSU James Cancer Network | Zangmeister Cancer Center",
};

const qa = [
  {
    q: "Does this affiliation affect my care team?",
    a: "Your care remains rooted in Zangmeister Cancer Center, with the same physicians and care team you know and trust. The difference is that your care is now supported by a direct connection to one of the nation's leading cancer programs — giving you access to additional expertise when you need it most.",
  },
  {
    q: "Will I still be seen at Zangmeister Cancer Center?",
    a: "Yes. The vast majority of your care continues right here at Zangmeister Cancer Center. The affiliation expands what we can offer you without requiring you to travel to a different facility for routine treatment.",
  },
  {
    q: "Does this change my costs or insurance coverage?",
    a: "The affiliation is designed to expand your access to care, not to change your billing relationship. For specific questions about your coverage, our financial counselors are here to help.",
  },
];

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

  .qa-list { margin-top: 0.5rem; }
  .qa-item { border-bottom: 1px solid #e5ede7; padding: 1.1rem 0; }
  .qa-item:last-child { border-bottom: none; }
  .qa-question { color: #2c5234; font-weight: bold; font-size: 1rem; margin: 0 0 0.5rem; }
  .qa-answer { color: #444; line-height: 1.7; font-size: 0.975rem; margin: 0; }

  .jcn-highlight {
    background: #f5f9f6;
    border-left: 4px solid #2c5234;
    padding: 1rem 1.25rem;
    margin: 1.25rem 0;
    border-radius: 0 0.15rem 0.15rem 0;
  }
  .jcn-highlight p { margin: 0; font-size: 0.975rem; color: #333; line-height: 1.7; }

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

export default function JCNPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/hero.jpg" alt="OSU James Cancer Network" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">OSU James Cancer Network</h1>
        </div>

        <div className="page-body">
          <main className="page-content">
            <p>
              At Zangmeister Cancer Center, we believe patients should have access to exceptional cancer care
              locally. Our affiliation with The Ohio State University Comprehensive Cancer Center — Arthur G.
              James Cancer Hospital and Richard J. Solove Research Institute (OSUCCC – James) through The James
              Cancer Network strengthens that commitment — connecting you to the most advanced therapies and
              treatments, more clinical trials, and subspecialized, academic expertise.
            </p>

            <div className="jcn-highlight">
              <p>
                This affiliation expands your access to the expertise and resources of The James Cancer Network
                while allowing you to continue your care at Zangmeister Cancer Center. It enhances your care
                with additional treatment options, clinical trials, and specialist input — without disrupting
                the relationship you have with your local care team.
              </p>
            </div>

            <h2>Your Questions Answered</h2>
            <div className="qa-list">
              {qa.map((item) => (
                <div key={item.q} className="qa-item">
                  <p className="qa-question">{item.q}</p>
                  <p className="qa-answer">{item.a}</p>
                </div>
              ))}
            </div>

            <h2>What can I expect at my first visit?</h2>
            <p>
              If a James Cancer Network consultation is recommended for your care, your Zangmeister care team
              will coordinate all of the details. You can expect to meet with a specialist who will review your
              case and provide recommendations that are then shared directly with your local team. Your ongoing
              treatment and follow-up care will continue at Zangmeister Cancer Center.
            </p>
            <p>
              To learn more about The James Cancer Network and how this affiliation benefits you, speak with
              your care team at your next appointment.
            </p>
          </main>

          <aside className="page-sidebar">
            <span className="page-sidebar-title">About Zangmeister</span>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/your-team">Your Team</Link></li>
              <li>
                <a href="https://www.aoncology.com/apply/ZCC" target="_blank" rel="noopener noreferrer">
                  Careers
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

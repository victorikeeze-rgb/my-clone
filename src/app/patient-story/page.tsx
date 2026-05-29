import Link from "next/link";
import { patientStories } from "@/data/patient-stories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Stories | Zangmeister Cancer Center",
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

  .story-card { border-bottom: 1px solid #e5ede7; padding-bottom: 1.75rem; margin-bottom: 1.75rem; }
  .story-card:last-child { border-bottom: none; margin-bottom: 0; }
  .story-card-type { display: inline-block; background: #e8ede9; color: #2c5234; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; padding: 0.2rem 0.6rem; border-radius: 2rem; margin-bottom: 0.5rem; }
  .story-card h2 { color: #2c5234; font-size: 1.1rem; font-weight: bold; margin: 0 0 0.5rem; line-height: 1.35; }
  .story-card h2 a { color: inherit; text-decoration: none; }
  .story-card h2 a:hover { text-decoration: underline; }
  .story-card p { color: #444; line-height: 1.7; font-size: 0.975rem; margin: 0 0 0.75rem; }
  .story-read-link { color: #a3631f; text-decoration: none; font-size: 0.9rem; font-weight: 600; }
  .story-read-link:hover { text-decoration: underline; }

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

export default function PatientStoriesIndexPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/hero.jpg" alt="Patient Stories" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">Patient Stories</h1>
        </div>

        <div className="page-body">
          <main>
            {patientStories.map((story) => (
              <div key={story.slug} className="story-card">
                {story.cancerType && (
                  <span className="story-card-type">{story.cancerType}</span>
                )}
                <h2>
                  <Link href={`/patient-story/${story.slug}`}>{story.title}</Link>
                </h2>
                <p>{story.excerpt}</p>
                <Link href={`/patient-story/${story.slug}`} className="story-read-link">
                  Read full story &rsaquo;
                </Link>
              </div>
            ))}
          </main>

          <aside className="page-sidebar">
            <span className="page-sidebar-title">For Patients</span>
            <ul>
              <li><Link href="/new-patient-information">New Patient Information</Link></li>
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

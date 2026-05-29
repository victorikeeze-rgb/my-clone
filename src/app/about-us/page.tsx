import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Zangmeister Cancer Center",
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

export default function AboutUsPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/hero.jpg" alt="Zangmeister Cancer Center" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">About Us</h1>
        </div>

        <div className="page-body">
          <main className="page-content">
            <p>
              Designed for easy access and patient comfort, Zangmeister Cancer Center offers all the services patients
              need as part of their cancer care, including diagnostic imaging, chemotherapy treatment, laboratory
              services, genetic consultation, a specialty pharmacy, social support services and access to cancer
              clinical trials. Our highly skilled and compassionate physicians use the latest advancements in the
              diagnosis, treatment and prevention of cancer and blood disorders.
            </p>
            <p>
              We provide the best quality care for our patients and their families in a friendly, relaxed and
              comforting environment. We adhere to a holistic approach to patient care, providing the most advanced
              cancer care available while meeting the physical, social, emotional and spiritual needs of our patients.
              The Zangmeister Cancer Center&apos;s dedicated palliative care team serves to complement the therapeutic
              treatments available with a comprehensive approach aimed at maximizing the quality of our patients&apos;
              lives. We often serve as our patients&apos; advocate, helping them understand and manage the issues and
              problems that accompany the diagnosis and treatment of cancer.
            </p>

            <h2>Our Mission</h2>
            <p>
              For more than 30 years, Zangmeister Cancer Center has been the central Ohio region&apos;s premier
              independent cancer center. Our Board-certified physicians and dedicated staff are committed to delivering
              care that is of the highest quality and customized for the needs of each individual patient, delivered
              in a warm and supportive environment.
            </p>

            <h2>Our Affiliation</h2>
            <p>
              Zangmeister Cancer Center is affiliated with American Oncology Network (AON), a physician-led oncology
              network dedicated to preserving independent cancer care in communities across the country. This
              affiliation gives our patients access to expanded resources, cutting-edge treatments, and clinical trials
              while ensuring care remains local, personal, and focused on what matters most — you.
            </p>
          </main>

          <aside className="page-sidebar">
            <span className="page-sidebar-title">About Zangmeister</span>
            <ul>
              <li><Link href="/your-team">Your Team</Link></li>
              <li><Link href="/jcn">OSU James Cancer Network</Link></li>
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

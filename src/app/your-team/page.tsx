import Link from "next/link";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Team | Zangmeister Cancer Center",
};

const pageStyles = `
  .inner-page { font-family: inherit; min-height: 100vh; background: white; }
  .page-breadcrumb { background: #2c5234; padding: 0.6rem 2rem; }
  .page-breadcrumb a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 0.85rem; letter-spacing: 0.02em; }
  .page-breadcrumb a:hover { color: white; }
  .page-hero { position: relative; width: 100%; aspect-ratio: 19 / 4; min-height: 140px; overflow: hidden; }
  .page-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 30%; display: block; }
  .page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, transparent 30%, rgba(0,0,0,0.45) 100%); }
  .page-hero-title { position: absolute; bottom: 1.5rem; right: 2rem; color: white; font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: bold; text-align: right; text-shadow: 0 1px 6px rgba(0,0,0,0.5); line-height: 1.1; }

  .team-page-body { max-width: 80rem; margin: 0 auto; padding: 2.5rem 2rem; }
  .team-intro { color: #333; line-height: 1.7; font-size: 0.975rem; margin-bottom: 2rem; max-width: 50rem; }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  .team-card { text-align: center; }
  .team-card-photo {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
    border-radius: 0.25rem;
    display: block;
    background: #e8ede9;
  }
  .team-card-name {
    font-weight: bold;
    color: #2c5234;
    margin: 0.8rem 0 0.2rem;
    font-size: 1rem;
    line-height: 1.3;
  }
  .team-card-creds {
    color: #555;
    font-size: 0.875rem;
    margin-bottom: 0.2rem;
  }
  .team-card-specialty {
    color: #777;
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    font-style: italic;
  }
  .team-card-link {
    color: #a3631f;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
  }
  .team-card-link:hover { text-decoration: underline; }

  @media (max-width: 55rem) {
    .page-hero { aspect-ratio: 16 / 5; }
    .page-hero-title { font-size: clamp(1.1rem, 5vw, 1.6rem); bottom: 1rem; right: 1rem; }
    .team-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  }
  @media (max-width: 30rem) {
    .team-grid { grid-template-columns: 1fr; max-width: 20rem; margin: 0 auto; }
  }
`;

export default function YourTeamPage() {
  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        <div className="page-hero">
          <img src="/images/hero.jpg" alt="Zangmeister Cancer Center team" />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">Your Team</h1>
        </div>

        <div className="team-page-body">
          <p className="team-intro">
            Our Board-certified physicians bring decades of combined experience in oncology and hematology. Each
            member of the Zangmeister Cancer Center team is dedicated to delivering compassionate, personalized
            care to every patient.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.slug} className="team-card">
                <img
                  className="team-card-photo"
                  src={member.photo}
                  alt={`${member.name}, ${member.credentials}`}
                />
                <p className="team-card-name">{member.name}</p>
                <p className="team-card-creds">{member.credentials}</p>
                <p className="team-card-specialty">{member.specialty}</p>
                <Link href={`/team/${member.slug}`} className="team-card-link">
                  Read bio &rsaquo;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

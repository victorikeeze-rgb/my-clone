import { notFound } from "next/navigation";
import Link from "next/link";
import { getMemberBySlug, teamMembers } from "@/data/team";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return {};
  return {
    title: `${member.name}, ${member.credentials} | Zangmeister Cancer Center`,
  };
}

const styles = `
  .bio-page { background-color: #f4f4f4; min-height: 100vh; }

  .bio-hero {
    position: relative;
    background-image: url('/images/hero.jpg');
    background-size: cover;
    background-position: center 30%;
    min-height: 18rem;
    display: flex;
    align-items: flex-end;
  }
  .bio-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, rgba(0,0,0,0.15), rgba(0,0,0,0.55));
  }
  .bio-hero-text {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 2rem 2rem;
    text-align: right;
  }
  .bio-hero-text h1 {
    color: white;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: bold;
    margin: 0 0 0.25rem;
    line-height: 1.1;
  }
  .bio-hero-text .bio-specialty {
    color: white;
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: normal;
    margin: 0;
  }

  .bio-content {
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 20rem;
    gap: 3rem;
    align-items: start;
  }
  .bio-text p {
    margin: 0 0 1.25rem;
    line-height: 1.7;
    color: #4a453f;
    font-size: 1rem;
  }
  .bio-text p:last-child { margin-bottom: 0; }

  .bio-headshot img {
    width: 100%;
    max-width: 20rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: 50% 15%;
    border-radius: 50%;
    display: block;
  }

  .bio-back {
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.5rem 2rem 0;
  }
  .bio-back a {
    color: #a3631f;
    font-weight: bold;
    font-size: 0.95rem;
    text-decoration: none;
  }
  .bio-back a:hover { color: #94795d; }

  @media (max-width: 55rem) {
    .bio-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .bio-headshot {
      order: -1;
      display: flex;
      justify-content: center;
    }
    .bio-headshot img {
      max-width: 14rem;
    }
  }
`;

export default async function TeamBioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <style>{styles}</style>
      <div className="bio-page">
        <div className="bio-hero">
          <div className="bio-hero-text">
            <h1>{member.name}, {member.credentials}</h1>
            <p className="bio-specialty">{member.specialty}</p>
          </div>
        </div>

        <div className="bio-back">
          <Link href="/#team">← Back to Your Team</Link>
        </div>

        <div className="bio-content">
          <div className="bio-text">
            {member.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="bio-headshot">
            <img
              src={member.photo}
              alt={`${member.name}, ${member.credentials}`}
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </>
  );
}

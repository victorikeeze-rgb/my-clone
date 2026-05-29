import { notFound } from "next/navigation";
import Link from "next/link";
import { patientStories, getStoryBySlug } from "@/data/patient-stories";
import type { Metadata } from "next";

export function generateStaticParams() {
  return patientStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return { title: `${story.title} | Zangmeister Cancer Center` };
}

const pageStyles = `
  .inner-page { font-family: inherit; min-height: 100vh; background: white; }
  .page-breadcrumb { background: #2c5234; padding: 0.6rem 2rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
  .page-breadcrumb a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 0.85rem; letter-spacing: 0.02em; }
  .page-breadcrumb a:hover { color: white; }
  .page-breadcrumb span { color: rgba(255,255,255,0.4); font-size: 0.85rem; }

  .page-hero { position: relative; width: 100%; aspect-ratio: 19 / 4; min-height: 140px; overflow: hidden; }
  .page-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 35%; display: block; }
  .page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, transparent 30%, rgba(0,0,0,0.5) 100%); }
  .page-hero-title { position: absolute; bottom: 1.5rem; right: 2rem; color: white; font-size: clamp(1.1rem, 2.5vw, 2rem); font-weight: bold; text-align: right; text-shadow: 0 1px 6px rgba(0,0,0,0.5); line-height: 1.2; max-width: 50%; }

  .page-body { max-width: 80rem; margin: 0 auto; padding: 2.5rem 2rem; display: grid; grid-template-columns: 1fr 17rem; gap: 3rem; align-items: start; }

  .story-cancer-type { display: inline-block; background: #e8ede9; color: #2c5234; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.3rem 0.75rem; border-radius: 2rem; margin-bottom: 1.5rem; }

  .story-video-wrap { position: relative; width: 100%; aspect-ratio: 16 / 9; margin: 1.5rem 0; background: #000; border-radius: 0.15rem; overflow: hidden; }
  .story-video-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

  .story-quote { border-left: 4px solid #2c5234; padding: 1rem 1.25rem; margin: 1.5rem 0; background: #f5f9f6; border-radius: 0 0.15rem 0.15rem 0; }
  .story-quote p { color: #2c5234; font-size: 1.1rem; font-style: italic; line-height: 1.6; margin: 0; font-weight: 500; }

  .page-content p { color: #333; line-height: 1.75; margin: 0 0 1.1rem; font-size: 0.975rem; }

  .page-sidebar { background: #2c5234; padding: 1.25rem 1rem; border-radius: 0.1rem; }
  .page-sidebar-title { color: white; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; display: block; }
  .page-sidebar ul { list-style: none; padding: 0; margin: 0; }
  .page-sidebar li { border-top: 1px solid rgba(255,255,255,0.2); }
  .page-sidebar li:first-child { border-top: none; }
  .page-sidebar a { display: block; color: white; text-decoration: none; padding: 0.5rem 0; font-size: 0.9rem; transition: color 0.2s; line-height: 1.4; }
  .page-sidebar a:hover { color: #f38f2b; }
  .page-sidebar a.active { color: #f38f2b; font-weight: 600; }

  @media (max-width: 55rem) {
    .page-body { grid-template-columns: 1fr; gap: 2rem; }
    .page-hero { aspect-ratio: 16 / 5; }
    .page-hero-title { font-size: clamp(1rem, 4vw, 1.5rem); bottom: 1rem; right: 1rem; max-width: 70%; }
  }
`;

export default async function PatientStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const otherStories = patientStories.filter((s) => s.slug !== slug);

  return (
    <>
      <style>{pageStyles}</style>
      <div className="inner-page">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link href="/">← Back to Home</Link>
          <span>/</span>
          <Link href="/patient-story">Patient Stories</Link>
        </div>

        {/* Hero */}
        <div className="page-hero">
          <img src="/images/hero.jpg" alt={story.title} />
          <div className="page-hero-overlay" />
          <h1 className="page-hero-title">{story.title}</h1>
        </div>

        {/* Body */}
        <div className="page-body">
          <main className="page-content">
            {story.cancerType && (
              <span className="story-cancer-type">{story.cancerType}</span>
            )}

            {/* Video first if present and no paragraphs (Nick's story) */}
            {story.youtubeId && story.paragraphs.length === 0 && (
              <div className="story-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${story.youtubeId}`}
                  title={story.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Quote if present */}
            {story.quote && (
              <div className="story-quote">
                <p>&ldquo;{story.quote}&rdquo;</p>
              </div>
            )}

            {/* Paragraphs with video inserted after first paragraph if story has both */}
            {story.paragraphs.map((para, i) => (
              <>
                <p key={i}>{para}</p>
                {i === 0 && story.youtubeId && (
                  <div key="video" className="story-video-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${story.youtubeId}`}
                      title={story.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </>
            ))}
          </main>

          {/* Sidebar */}
          <aside className="page-sidebar">
            <span className="page-sidebar-title">More Patient Stories</span>
            <ul>
              {otherStories.map((s) => (
                <li key={s.slug}>
                  <Link href={`/patient-story/${s.slug}`}>
                    {s.title.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

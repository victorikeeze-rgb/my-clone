import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: `${service.name} | Zangmeister Cancer Center` };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <style>{`
        .service-page {
          font-family: inherit;
          min-height: 100vh;
          background: white;
        }

        /* Breadcrumb */
        .service-breadcrumb {
          background: #2c5234;
          padding: 0.6rem 2rem;
        }
        .service-breadcrumb a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
        }
        .service-breadcrumb a:hover {
          color: white;
        }

        /* Hero — short/wide, ~19:4 proportion */
        .service-hero {
          position: relative;
          width: 100%;
          aspect-ratio: 19 / 4;
          min-height: 140px;
          overflow: hidden;
        }
        .service-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          display: block;
        }
        .service-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            transparent 30%,
            rgba(0,0,0,0.45) 100%
          );
        }
        .service-hero-title {
          position: absolute;
          bottom: 1.5rem;
          right: 2rem;
          color: white;
          font-size: clamp(1.4rem, 3vw, 2.4rem);
          font-weight: bold;
          text-align: right;
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
          line-height: 1.1;
        }

        /* Body layout */
        .service-body {
          max-width: 80rem;
          margin: 0 auto;
          padding: 2.5rem 2rem;
          display: grid;
          grid-template-columns: 1fr 17rem;
          gap: 3rem;
          align-items: start;
        }

        /* Main content */
        .service-content h2 {
          color: #2c5234;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 1.75rem 0 0.5rem;
        }
        .service-content h2:first-child {
          margin-top: 0;
        }
        .service-content p {
          color: #333;
          line-height: 1.7;
          margin: 0 0 1rem;
          font-size: 0.975rem;
        }

        /* Sidebar */
        .service-sidebar {
          background: #2c5234;
          padding: 1.25rem 1rem;
          border-radius: 0.1rem;
        }
        .service-sidebar-title {
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
          display: block;
        }
        .service-sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-sidebar li {
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        .service-sidebar li:first-child {
          border-top: none;
        }
        .service-sidebar a {
          display: block;
          color: white;
          text-decoration: none;
          padding: 0.5rem 0;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .service-sidebar a:hover {
          color: #f38f2b;
        }

        @media (max-width: 55rem) {
          .service-body {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .service-hero {
            aspect-ratio: 16 / 5;
          }
          .service-hero-title {
            font-size: clamp(1.1rem, 5vw, 1.6rem);
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>

      <div className="service-page">
        {/* Breadcrumb */}
        <div className="service-breadcrumb">
          <Link href="/">← Back to Home</Link>
        </div>

        {/* Hero banner */}
        <div className="service-hero">
          <img src={service.hero} alt={service.name} />
          <div className="service-hero-overlay" />
          <h1 className="service-hero-title">{service.name}</h1>
        </div>

        {/* Body */}
        <div className="service-body">
          <main className="service-content">
            {service.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </main>

          <aside className="service-sidebar">
            <span className="service-sidebar-title">Other Services</span>
            <ul>
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

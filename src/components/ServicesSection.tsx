"use client";

import { useRef } from "react";

const services = [
  {
    title: "Medical Oncology",
    description:
      "We use chemotherapy, biological agents or other medications, such as targeted therapies, immunotherapy and oral (pill form) chemotherapy, to treat cancer.",
    ctaText: "View cancers we treat >",
    ctaHref: "#",
    imgSrc: "/images/service-medical-oncology.jpg",
    imgAlt: "Image for Medical Oncology",
  },
  {
    title: "Hematology",
    description:
      "We treat patients with all types of hematologic malignancies, including rare blood-based liquid tumors and autoimmune abnormalities.",
    ctaText: "Learn more about this service >",
    ctaHref: "#",
    imgSrc: "/images/service-hematology.jpg",
    imgAlt: "Image for Hematology",
  },
  {
    title: "Gynecologic Oncology",
    description:
      "We provide specialized diagnosis, treatment, and support for women with cancers of the reproductive system.",
    ctaText: "How to access this service >",
    ctaHref: "#",
    imgSrc: "/images/service-gynecologic-oncology.jpg",
    imgAlt: "Image for Gynecologic Oncology",
  },
  {
    title: "BiTE Therapy",
    description:
      "BiTE therapy links T cells to cancer cells, boosting immune response with precision and fewer side effects than traditional treatments.",
    ctaText: "See how BiTE works >",
    ctaHref: "#",
    imgSrc: "/images/service-bite-therapy.jpg",
    imgAlt: "Image for BiTE Therapy",
  },
  {
    title: "Specialty Infusion Services",
    description:
      "We offer specialty infusion therapies for patients with chronic diseases or conditions to treat anemia, Crohn's, multiple sclerosis, rheumatoid arthritis and more.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-specialty-infusion.jpg",
    imgAlt: "Image for Specialty Infusion Services",
  },
  {
    title: "Diagnostic Imaging",
    description:
      "We continue to invest in technologies that provide precise views of internal organs, bones, soft tissues and blood vessels with immense clarity and detail.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-diagnostic-imaging.jpg",
    imgAlt: "Image for Diagnostic Imaging",
  },
  {
    title: "Radioligand Therapy",
    description:
      "RLT therapy delivers radiation directly to cancer cells, reducing exposure to healthy tissue and minimizing side effects.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-radioligand-therapy.jpg",
    imgAlt: "Image for Radioligand Therapy",
  },
  {
    title: "Molecular-Targeted Therapy",
    description:
      'One of the newest and most advanced ways to help physicians assess your options is to identify the biomarkers - "targets" that are specific to your cancer.',
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-molecular-targeted.jpg",
    imgAlt: "Image for Molecular-Targeted Therapy",
  },
  {
    title: "Pathology",
    description:
      "We serve our patients' laboratory needs locally, reducing their trips to multiple locations often required for routine and specialized laboratory testing.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-pathology.jpg",
    imgAlt: "Image for Pathology",
  },
  {
    title: "Pharmacy",
    description:
      "The use of oral oncolytic medications in cancer treatment is fast growing. We provide in-house specialty pharmacy services with experienced staff.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-pharmacy.jpg",
    imgAlt: "Image for Pharmacy",
  },
  {
    title: "Care Coordination & Navigation",
    description:
      "The journey you are about to begin can be confusing and difficult. Your team will be invaluable in helping you successfully navigate the treatment process.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-care-coordination.jpg",
    imgAlt: "Image for Care Coordination & Navigation",
  },
  {
    title: "Clinical Trials",
    description:
      "Our goal is to give patients the opportunity to participate in approved and exploratory therapies without long-distance travel.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-clinical-trials.jpg",
    imgAlt: "Image for Clinical Trials",
  },
  {
    title: "Financial Support",
    description:
      "You will meet with a financial counselor during one of your initial visits and at any time that you have questions about your account or insurance coverage.",
    ctaText: "Learn more >",
    ctaHref: "#",
    imgSrc: "/images/service-financial-support.jpg",
    imgAlt: "Image for Financial Support",
  },
];

interface Service {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imgSrc: string;
  imgAlt: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card">
      <img src={service.imgSrc} alt={service.imgAlt} />
      <div className="service-card-title">
        <a href="#">{service.title}</a>
      </div>
      <div className="service-card-content">{service.description}</div>
      <div className="service-card-cta">
        <a href={service.ctaHref}>{service.ctaText}</a>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }

  return (
    <>
      <style>{`
        .home-services {
          padding: 2rem 0;
          background-color: #f4f4f4;
        }
        .section-title {
          display: block;
          text-align: center;
          color: #2c5234;
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: bold;
          padding: 0 2rem;
        }
        .service-cards {
          position: relative;
          margin: 0 auto;
          padding: 2rem 0 1rem;
          display: flex;
          flex-direction: row;
          width: max-content;
          max-width: 100%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          box-sizing: border-box;
        }
        .service-cards::-webkit-scrollbar {
          display: none;
        }
        .service-card {
          width: 20rem;
          max-width: 80vw;
          display: flex;
          flex-direction: column;
          background-color: white;
          flex-shrink: 0;
          border-radius: 0.15rem;
          overflow: hidden;
          scroll-snap-align: center;
          margin-right: 2rem;
        }
        .service-card:last-of-type {
          margin-right: 0;
        }
        .service-card img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }
        .service-card-title {
          margin: 1rem;
        }
        .service-card-title a {
          color: #2c5234;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          transition: color 0.2s ease-in-out;
        }
        .service-card-title a:hover {
          color: #00845a;
        }
        .service-card-content {
          padding: 0 1rem 1rem;
          flex-grow: 1;
          font-size: 0.9rem;
          color: #4a453f;
          line-height: 1.5;
        }
        .service-card-cta {
          margin: 0 1rem 1rem;
        }
        .service-card-cta a {
          color: #a3631f;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .service-card-cta a:hover {
          color: #94795d;
        }
        .slider-arrow {
          width: 2rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          font-size: 3rem;
          color: #a3631f;
          cursor: pointer;
          padding: 0;
          user-select: none;
          z-index: 2;
          line-height: 1;
          background: none;
          border: none;
          transition: color 0.3s;
        }
        .slider-arrow:hover {
          color: #94795d;
        }
        .slider-arrow-left {
          background: linear-gradient(to left, transparent, #f4f4f4 1rem);
          left: 0;
          margin-right: -2rem;
        }
        .slider-arrow-right {
          background: linear-gradient(to right, transparent, #f4f4f4 1rem);
          right: 0;
          margin-left: -2rem;
        }
        .slider-arrow-cover {
          width: 2rem;
          flex-shrink: 0;
          background-color: #f4f4f4;
          z-index: 1;
        }
      `}</style>
      <section className="home-services">
        <span className="section-title">Our Services</span>
        <div className="service-cards" ref={scrollRef}>
          <button
            className="slider-arrow slider-arrow-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
            type="button"
          >
            &#8249;
          </button>
          <div className="slider-arrow-cover" />
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          <div className="slider-arrow-cover" />
          <button
            className="slider-arrow slider-arrow-right"
            onClick={scrollRight}
            aria-label="Scroll right"
            type="button"
          >
            &#8250;
          </button>
        </div>
      </section>
    </>
  );
}

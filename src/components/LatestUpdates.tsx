"use client";

import { useRef, useState, useCallback } from "react";

interface Post {
  title: string;
  date: string;
  type: string;
  description: string;
  imgSrc: string;
  href: string;
}

const posts: Post[] = [
  {
    title: "Esophageal Cancer Awareness Month: Recognizing the Signs and Advancing Treatment",
    date: "Apr 6th, 2026",
    type: "Blog",
    description:
      "April is Esophageal Cancer Awareness Month. Learn about the early warning signs, risk factors, and the latest advancements in treatment.",
    imgSrc: "/images/blog-esophageal.jpg",
    href: "#",
  },
  {
    title: "Choosing Your First Oncology Practice: Academic, Hospital, or Community",
    date: "Mar 20th, 2026",
    type: "Blog",
    description:
      "Compare academic, hospital-employed, and community oncology practice settings. Learn the pros and cons of each to find the best fit.",
    imgSrc: "/images/blog-oncology-practice.jpg",
    href: "#",
  },
  {
    title: "Improving Cancer Outcomes Through Better Nutrition",
    date: "Mar 10th, 2026",
    type: "Blog",
    description:
      "Study after study confirms that healthy dietary patterns are associated with improved survival rates and better quality of life for some cancer patients.",
    imgSrc: "/images/blog-nutrition.jpg",
    href: "#",
  },
  {
    title: "Colorectal Cancer Screening: Awkward Conversations That Save Lives",
    date: "Mar 5th, 2026",
    type: "Blog",
    description:
      "March is Colorectal Cancer Awareness Month, a time to honor those who have faced or are facing this devastating disease and to spread the word about the power of prevention.",
    imgSrc: "/images/blog-colorectal.jpg",
    href: "#",
  },
  {
    title: "Celebrating The History of Female Physicians",
    date: "Feb 17th, 2026",
    type: "Blog",
    description:
      "A look back at the pioneering women who broke barriers in medicine and paved the way for future generations.",
    imgSrc: "/images/blog-women-physicians.jpg",
    href: "#",
  },
];

export function LatestUpdates() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideWidth = slider.offsetWidth;
    if (slideWidth === 0) return;
    const index = Math.round(slider.scrollLeft / slideWidth);
    setActiveIndex(Math.max(0, Math.min(index, posts.length - 1)));
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  return (
    <>
      <style>{`
        .latest-updates {
          padding: 2rem 0;
          background-color: #f4f4f4;
        }
        .latest-updates-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem;
          box-sizing: border-box;
        }
        .latest-updates-title {
          display: block;
          text-align: center;
          color: #2c5234;
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        .posts-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 38rem;
          margin: 0 auto;
        }
        .posts-slider {
          overflow-x: auto;
          width: 100%;
          display: flex;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .posts-slider::-webkit-scrollbar { display: none; }
        .post-slide {
          width: 100%;
          box-sizing: border-box;
          flex-shrink: 0;
          scroll-snap-align: start;
          padding-right: 1rem;
        }
        .post-card {
          background-color: #f4f4f4;
          padding: 1rem;
          display: grid;
          margin-bottom: 1rem;
          border-radius: 0.15rem;
          grid-template-areas:
            "date date type"
            "title title title"
            "thumbnail description description"
            "thumbnail link link";
          grid-template-columns: max-content 1fr max-content;
          gap: 0.25rem 0.5rem;
          border: 1px solid rgba(0,0,0,0.08);
        }
        .post-date {
          grid-area: date;
          font-size: 0.85rem;
          opacity: 0.8;
          line-height: 1rem;
          color: #4a453f;
        }
        .post-type {
          grid-area: type;
          font-weight: bold;
          line-height: 1rem;
          font-size: 0.85rem;
          color: #4a453f;
        }
        .post-title {
          grid-area: title;
          margin: 0.5rem 0 0.25rem;
        }
        .post-title a {
          color: #2c5234;
          text-decoration: none;
          font-size: 1rem;
          font-weight: bold;
          line-height: 1.3;
        }
        .post-title a:hover { color: #00845a; }
        .post-thumbnail {
          grid-area: thumbnail;
          width: 5rem;
          height: 5rem;
          object-fit: cover;
          border-radius: 0.15rem;
          margin-right: 0.75rem;
          display: block;
          align-self: start;
        }
        .post-description {
          grid-area: description;
          font-size: 0.875rem;
          color: #4a453f;
          line-height: 1.4;
          align-self: start;
        }
        .post-link {
          grid-area: link;
          padding-top: 0.5rem;
          align-self: end;
        }
        .post-link a {
          color: #a3631f;
          font-size: 0.875rem;
          text-decoration: none;
          font-weight: bold;
        }
        .post-link a:hover { color: #94795d; }
        .slider-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
          align-self: center;
        }
        .slider-dot {
          width: 2rem;
          height: 0.35rem;
          border-radius: 0.2rem;
          background-color: #a3631f;
          border: none;
          cursor: pointer;
          padding: 0;
          opacity: 0.35;
          transition: opacity 0.2s;
        }
        .slider-dot.active { opacity: 1; }
      `}</style>

      <section className="latest-updates">
        <div className="latest-updates-inner">
          <span className="latest-updates-title">Latest Updates</span>
          <div className="posts-section">
            <div
              className="posts-slider"
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {posts.map((post, i) => (
                <div className="post-slide" key={i}>
                  <div className="post-card">
                    <span className="post-date">{post.date}</span>
                    <span className="post-type">{post.type}</span>
                    <div className="post-title">
                      <a href={post.href}>{post.title}</a>
                    </div>
                    <img
                      className="post-thumbnail"
                      src={post.imgSrc}
                      alt={post.title}
                    />
                    <p className="post-description">{post.description}</p>
                    <div className="post-link">
                      <a href={post.href}>Read Article &gt;</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {posts.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${activeIndex === i ? " active" : ""}`}
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

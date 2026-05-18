"use client";

import { useState } from "react";

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <style>{`
        .home-main {
          display: flex;
          flex-direction: column;
        }

        /* Header banner (the photo area) */
        .header-banner {
          background-color: black;
          position: relative;
          overflow: hidden;
        }
        .header-banner-img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 42%;
          opacity: 0.5;
          display: block;
          top: 0;
          left: 0;
        }

        /* The content container inside the banner */
        .header-banner-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem;
          box-sizing: border-box;
          height: 100vw;
          max-height: 100vh;
          display: flex;
          flex-direction: column-reverse;
          justify-content: flex-start;
          align-items: flex-end;
          padding-top: 4rem;
          padding-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        /* h1 */
        .banner-h1 {
          line-height: 1.1;
          color: white;
          text-align: right;
          font-size: clamp(1.7rem, 4vw, 4rem);
          font-weight: bold;
          margin-top: 1rem;
          text-wrap: balance;
        }

        /* Overview Video button */
        .overview-video-btn {
          display: inline-block;
          line-height: 1em;
          padding: 0.5em 1em;
          background-color: #a3631f;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: bold;
          border-radius: 0.15rem;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          transition: background-color 0.2s ease-in-out;
          text-decoration: none;
        }
        .overview-video-btn:hover {
          background-color: #94795d;
        }

        /* About intro section */
        .about-content {
          padding: 2rem 0;
          background-color: #f4f4f4;
        }
        .about-blockquote {
          max-width: 60rem;
          margin: 0 auto 2rem;
          padding: 2rem;
          box-sizing: border-box;
          text-align: center;
          background-color: white;
          position: relative;
          border-radius: 0.15rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        .about-blockquote p {
          text-align: center;
          font-size: 1.25rem;
          color: #4a453f;
          line-height: 1.6;
          margin: 0;
        }

        /* Video modal */
        .video-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        .video-modal {
          position: relative;
          width: 90vw;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          background: black;
        }
        .video-modal iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .video-modal-close {
          position: absolute;
          top: -2rem;
          right: 0;
          color: white;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          font-family: inherit;
        }
      `}</style>

      <div className="home-main">
        {/* Hero banner */}
        <div className="header-banner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt="Zangmeister Cancer Center medical staff"
            className="header-banner-img"
          />

          <div className="header-banner-container">
            <h1 className="banner-h1">Patient First, Always</h1>

            <button
              className="overview-video-btn"
              onClick={() => setVideoOpen(true)}
              type="button"
            >
              OVERVIEW VIDEO
            </button>
          </div>
        </div>

        {/* About intro */}
        <div className="about-content">
          <blockquote className="about-blockquote">
            <p>
              Zangmeister Cancer Center is a community-based medical oncology,
              gynecologic oncology and hematology practice providing treatment
              for patients diagnosed with all types of cancer and blood
              disorders. Through compassionate care that centers around the
              patient, we strive to provide the best possible experience to
              patients and their families throughout the healthcare journey.
            </p>
          </blockquote>
        </div>
      </div>

      {/* YouTube modal */}
      {videoOpen && (
        <div
          className="video-modal-overlay"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setVideoOpen(false)}
              type="button"
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/vxjYAOjKBLY?autoplay=1"
              title="Zangmeister Cancer Center Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "FOR PATIENTS", href: "#" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "LOCATIONS", href: "#locations" },
  { label: "ABOUT US", href: "#" },
  { label: "CONTACT US", href: "#" },
] as const;

const headerStyles = `
  header.zcc-header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 160rem;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    transition: background-color 0.3s ease-in-out;
  }
  header.zcc-header.with-background { background-color: #2c5234; }

  .header-aon-container {
    display: grid;
    grid-template: "logo search" min-content "logo menu" min-content / auto auto;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .header-logo { grid-area: logo; padding: 1rem 0; }
  .header-logo img { object-fit: contain; object-position: left center; max-width: 17rem; width: 100%; }

  .header-search { grid-area: search; place-self: start end; margin-top: 1rem; display: flex; align-items: center; }
  .header-search input {
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.4);
    color: white;
    padding: 0.4rem 0.75rem;
    border-radius: 0.15rem 0 0 0.15rem;
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;
  }
  .header-search input::placeholder { color: rgba(255,255,255,0.7); }
  .header-search button {
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.4);
    border-left: none;
    color: white;
    padding: 0.4rem 0.6rem;
    border-radius: 0 0.15rem 0.15rem 0;
    cursor: pointer;
  }

  .header-nav { grid-area: menu; justify-self: end; margin-top: 1rem; }
  .header-nav ul { list-style: none; padding: 0; margin: 0; display: flex; gap: 0; }
  .header-nav a, .header-nav button {
    color: white;
    text-transform: uppercase;
    font-weight: normal;
    padding: 0.75rem 1rem;
    display: block;
    text-decoration: none;
    font-size: 0.9rem;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    line-height: 1em;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }
  .header-nav a:hover, .header-nav button:hover { color: rgba(255,255,255,0.75); }

  .header-mobile-dropdown {
    background-color: #2c5234;
    padding: 0.5rem 0;
  }
  .header-mobile-dropdown ul { list-style: none; padding: 0; margin: 0; }
  .header-mobile-dropdown a {
    color: white;
    text-transform: uppercase;
    font-weight: normal;
    padding: 0.75rem 1.5rem;
    display: block;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
  }
  .header-mobile-dropdown a:hover { color: rgba(255,255,255,0.75); }

  @media (max-width: 55rem) {
    .header-aon-container { display: flex; align-items: center; padding: 0 1rem; }
    .header-logo { padding: 0.5rem 1rem 0.5rem 0; flex-grow: 1; height: 4rem; box-sizing: border-box; }
    .header-logo img { height: 100%; max-width: 160px; }
    .header-nav { display: none; }
    .header-search { margin-top: 0; }
    .header-search input { width: 8rem; }
    .mobile-menu-btn { display: flex; align-items: center; padding: 0.5rem; color: white; background: none; border: none; cursor: pointer; margin-left: 0.5rem; font-size: 1.5rem; font-family: inherit; }
  }
  @media (min-width: 55rem) {
    .mobile-menu-btn { display: none; }
    .header-mobile-dropdown { display: none; }
  }
`;

export function HeaderSentinel() {
  return (
    <div
      id="header-observer"
      style={{ height: "5rem", position: "absolute", top: 0, left: 0, right: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sentinelRef = useRef<Element | null>(null);

  useEffect(() => {
    const sentinel = document.getElementById("header-observer");
    if (!sentinel) return;

    sentinelRef.current = sentinel;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is NOT intersecting, user has scrolled past it
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search handling — extend as needed
    if (searchQuery.trim()) {
      window.location.href = `#search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <style>{headerStyles}</style>
      <header className={`zcc-header${scrolled ? " with-background" : ""}`}>
        <div className="header-aon-container">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" aria-label="Zangmeister Cancer Center — Home">
              <Image
                src="/images/ZCC_logo_white.svg"
                alt="Zangmeister Cancer Center"
                width={272}
                height={64}
                priority
                unoptimized
                style={{ objectFit: "contain", objectPosition: "left center", maxWidth: "17rem", width: "100%" }}
              />
            </Link>
          </div>

          {/* Search */}
          <div className="header-search">
            <form onSubmit={handleSearch} role="search">
              <input
                type="search"
                placeholder="Search…"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" aria-label="Submit search">
                {/* Magnifying glass icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Main navigation">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown nav */}
        {menuOpen && (
          <div className="header-mobile-dropdown" id="mobile-nav">
            <nav aria-label="Mobile navigation">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

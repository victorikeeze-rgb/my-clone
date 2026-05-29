"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SubItem = { label: string; href: string; external?: boolean };
type NavItemConfig =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: SubItem[] };

const NAV_ITEMS: NavItemConfig[] = [
  {
    label: "FOR PATIENTS",
    dropdown: [
      { label: "New Patient Information", href: "/new-patient-information" },
      { label: "Patient Stories", href: "/patient-story" },
      { label: "Resources", href: "https://www.aoncology.com/patient-resources/", external: true },
      { label: "American Oncology Cares", href: "/american-oncology-cares" },
      { label: "CanCare", href: "/cancare" },
    ],
  },
  {
    label: "OUR SERVICES",
    dropdown: [
      { label: "Medical Oncology", href: "/services/medical-oncology" },
      { label: "Hematology", href: "/services/hematology" },
      { label: "Gynecologic Oncology", href: "/services/gynecologic-oncology" },
      { label: "BiTE Therapy", href: "/services/bite-therapy" },
      { label: "Specialty Infusion Services", href: "/services/specialty-infusion-services" },
      { label: "Diagnostic Imaging", href: "/services/diagnostic-imaging" },
      { label: "Radioligand Therapy", href: "/services/radioligand-therapy" },
      { label: "Molecular-Targeted Therapy", href: "/services/molecular-targeted-therapy" },
      { label: "Pathology", href: "/services/pathology" },
      { label: "Pharmacy", href: "/services/pharmacy" },
      { label: "Care Coordination & Navigation", href: "/services/care-coordination" },
      { label: "Clinical Trials", href: "/services/clinical-trials" },
      { label: "Financial Support", href: "/services/financial-support" },
    ],
  },
  { label: "LOCATIONS", href: "/#locations" },
  {
    label: "ABOUT US",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Your Team", href: "/your-team" },
      { label: "OSU James Cancer Network", href: "/jcn" },
      { label: "Careers", href: "https://www.aoncology.com/apply/ZCC", external: true },
    ],
  },
  {
    label: "CONTACT US",
    dropdown: [
      { label: "Contact Us", href: "/#locations" },
      { label: "Patient Referral", href: "https://www.aoncology.com/policies/ZCC_RF.pdf", external: true },
      { label: "Diagnostic Referral", href: "https://www.zangcenter.com/wp-content/uploads/2024/04/11430_AON_ZCC_Diagnostic-Referral-Request_Form_0822_FINAL.pdf", external: true },
    ],
  },
];

const MOBILE_FALLBACK: Record<string, string> = {
  "FOR PATIENTS": "/new-patient-information",
  "OUR SERVICES": "/services/medical-oncology",
  "LOCATIONS": "/#locations",
  "ABOUT US": "/about-us",
  "CONTACT US": "/#locations",
};

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
  .header-nav li { position: relative; }
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

  /* Dropdown chevron */
  .nav-btn-dropdown::after {
    content: ' ▾';
    font-size: 0.65em;
    vertical-align: middle;
    opacity: 0.8;
  }

  /* Dropdown panel */
  .nav-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 14rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    z-index: 200;
    border-top: 3px solid #2c5234;
  }
  .nav-dropdown a {
    color: #2c5234 !important;
    text-transform: none !important;
    font-size: 0.875rem !important;
    font-weight: normal !important;
    padding: 0.55rem 1.1rem !important;
    display: block;
    text-decoration: none;
    white-space: nowrap;
    border-bottom: 1px solid rgba(0,0,0,0.07);
    letter-spacing: 0 !important;
    line-height: 1.4 !important;
  }
  .nav-dropdown a:last-child { border-bottom: none; }
  .nav-dropdown a:hover { background: #f5f9f6; color: #2c5234 !important; }

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("header-observer");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `#search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
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
          <nav className="header-nav" aria-label="Main navigation" ref={navRef}>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="nav-btn-dropdown"
                        aria-expanded={openDropdown === item.label}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                      </button>
                      {openDropdown === item.label && (
                        <div className="nav-dropdown" role="menu">
                          {item.dropdown.map((sub) =>
                            sub.external ? (
                              <a
                                key={sub.label}
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {sub.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
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
                {NAV_ITEMS.map((item) => {
                  const href = item.href ?? MOBILE_FALLBACK[item.label] ?? "/";
                  return (
                    <li key={item.label}>
                      <a href={href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

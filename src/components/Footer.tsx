const ourServicesLinks = [
  { label: "Medical Oncology", href: "#" },
  { label: "Hematology", href: "#" },
  { label: "Gynecologic Oncology", href: "#" },
  { label: "BiTE Therapy", href: "#" },
  { label: "Specialty Infusion Services", href: "#" },
  { label: "Diagnostic Imaging", href: "#" },
  { label: "Radioligand Therapy", href: "#" },
  { label: "Molecular-Targeted Therapy", href: "#" },
  { label: "Pathology", href: "#" },
  { label: "Pharmacy", href: "#" },
  { label: "Care Coordination & Navigation", href: "#" },
  { label: "Clinical Trials", href: "#" },
  { label: "Financial Support", href: "#" },
];

const forPatientsLinks = [
  { label: "New Patient Information", href: "#" },
  { label: "Patient Portal", href: "#" },
  { label: "Make a Payment", href: "#" },
  { label: "Patient Stories", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "CanCare", href: "#" },
];

const aboutUsLinks = [
  { label: "About Us", href: "#" },
  { label: "Your Team", href: "#" },
  { label: "News", href: "#" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Notice of Privacy Practices", href: "#" },
];

export function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background-color: #635a4f;
          color: white;
          padding: 2rem 0;
        }
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem;
          box-sizing: border-box;
        }
        .footer-sitemap {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 0 2rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex: 1;
          min-width: 160px;
        }
        .footer-col-heading {
          text-transform: uppercase;
          font-size: 1.1rem;
          font-weight: bold;
          display: block;
          margin-bottom: 0.75rem;
          color: white;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col ul li {
          padding-block: 0.125rem;
        }
        .footer-col a {
          color: white;
          font-weight: normal;
          text-decoration: none;
          font-size: 0.9rem;
          border-bottom: 1.5pt solid transparent;
          transition: border-color 0.3s ease-in-out;
          display: inline-block;
          padding-block: 0.1rem;
        }
        .footer-col a:hover {
          border-color: #f38f2b;
        }
        .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 180px;
          margin-bottom: 2rem;
        }
        .footer-facebook {
          font-weight: bold;
          font-size: 1rem;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          text-decoration: none;
          color: white;
          border-bottom: none;
        }
        .footer-facebook:hover {
          border-bottom: none;
          color: rgba(255, 255, 255, 0.85);
        }
        .footer-facebook img {
          width: 2rem;
          height: auto;
          margin-right: 0.75rem;
        }
        .footer-practice-logo {
          width: 100%;
          max-width: 16rem;
          height: auto;
          max-height: 5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .footer-aon-logo {
          width: 100%;
          max-width: 16rem;
          height: auto;
          max-height: 5rem;
          display: block;
        }
        .footer-legal {
          border-top: 1pt solid rgba(255, 255, 255, 0.4);
          margin-top: 1rem;
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          align-items: center;
        }
        .footer-legal a {
          color: white;
          font-size: 0.85rem;
          text-decoration: none;
          font-weight: normal;
          border-bottom: 1.5pt solid transparent;
          transition: border-color 0.3s;
        }
        .footer-legal a:hover {
          border-color: #f38f2b;
        }
        .footer-copyright {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          margin-left: auto;
        }
        @media (max-width: 55rem) {
          .footer-sitemap {
            flex-direction: column;
          }
          .footer-col {
            min-width: 100%;
          }
          .footer-contact {
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-sitemap">
            {/* OUR SERVICES */}
            <div className="footer-col">
              <span className="footer-col-heading">Our Services</span>
              <ul>
                {ourServicesLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOR PATIENTS */}
            <div className="footer-col">
              <span className="footer-col-heading">For Patients</span>
              <ul>
                {forPatientsLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT US */}
            <div className="footer-col">
              <span className="footer-col-heading">About Us</span>
              <ul>
                {aboutUsLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT / LOGOS */}
            <div className="footer-contact">
              <a
                href="#"
                className="footer-facebook"
                aria-label="Join the conversation on Facebook"
              >
                <img
                  src="/images/facebook-round.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
                Join the conversation
              </a>
              <img
                src="/images/ZCC_logo_white.svg"
                alt="Zangmeister Cancer Center"
                className="footer-practice-logo"
              />
              <img
                src="/images/AON_Logo_White.svg"
                alt="American Oncology Network"
                className="footer-aon-logo"
              />
            </div>
          </div>

          {/* LEGAL BAR */}
          <div className="footer-legal">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <span className="footer-copyright">
              Copyright &copy; | Zangmeister Cancer Center
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

import type { ReactNode } from "react";

interface Location {
  name: string;
  address: string;
  hours: string;
  phone: string;
  directionsHref: string;
}

const locations: Location[] = [
  {
    name: "Main Location",
    address: "3100 Plaza Properties Blvd\nColumbus, OH 43219",
    hours: "Mon-Thu 7:00am-4:00pm\nFri 7:00am-3:30pm",
    phone: "(614) 383-6000",
    directionsHref:
      "https://maps.google.com/?q=3100+Plaza+Properties+Blvd+Columbus+OH+43219",
  },
  {
    name: "Grove City",
    address: "5500 North Meadows Dr, Suite 220\nGrove City, OH 43123",
    hours: "Mon-Thu 7:00am-4:00pm\nFri 7:00am-12:00pm",
    phone: "(614) 347-4939",
    directionsHref:
      "https://maps.google.com/?q=5500+North+Meadows+Dr+Suite+220+Grove+City+OH+43123",
  },
];

function renderWithLineBreaks(text: string): ReactNode {
  return text.split("\n").map((line, index, arr) => (
    <span key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));
}

export function LocationsSection() {
  return (
    <section className="home-locations">
      <style>{`
        .home-locations {
          padding-top: 2rem;
          background-color: #f4f4f4;
        }
        .locations-title {
          display: block;
          text-align: center;
          color: #2c5234;
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          padding: 0 2rem;
        }
        .locations-layout {
          display: flex;
          align-items: stretch;
          min-height: 550px;
        }
        .location-cards {
          min-width: 280px;
          width: 280px;
          flex-shrink: 0;
          background-color: #2c5234;
          color: white;
        }
        .location-card {
          padding: 1.5rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.3);
        }
        .location-name {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
          display: block;
        }
        .location-lines {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .location-lines p {
          margin: 0;
          color: white;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        .location-phone {
          color: white;
          text-decoration: none;
          font-weight: normal;
          border-bottom: none;
        }
        .location-directions {
          display: inline-block;
          margin-top: 0.5rem;
          color: white;
          font-weight: bold;
          text-decoration: none;
          font-size: 0.95rem;
          border-bottom: 1.5pt solid transparent;
          transition: border-color 0.3s;
        }
        .location-directions:hover {
          border-color: #f38f2b;
        }
        .locations-map {
          flex: 1;
          min-height: 550px;
        }
        .locations-map iframe {
          width: 100%;
          height: 100%;
          min-height: 550px;
          border: none;
          display: block;
        }
        @media (max-width: 55rem) {
          .locations-layout { flex-direction: column; }
          .location-cards { width: 100%; }
          .locations-map iframe { min-height: 300px; }
        }
      `}</style>

      <span className="locations-title">Locations</span>

      <div className="locations-layout">
        <div className="location-cards">
          {locations.map((location) => (
            <div key={location.name} className="location-card">
              <span className="location-name">{location.name}</span>
              <div className="location-lines">
                <p>{renderWithLineBreaks(location.address)}</p>
                <p>{renderWithLineBreaks(location.hours)}</p>
                <p>
                  <a
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="location-phone"
                  >
                    {location.phone}
                  </a>
                </p>
                <a
                  href={location.directionsHref}
                  className="location-directions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Driving Directions &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="locations-map">
          <iframe
            src="https://maps.google.com/maps?q=3100+Plaza+Properties+Blvd+Columbus+OH+43219&t=&z=11&ie=UTF8&iwloc=&output=embed"
            title="Zangmeister Cancer Center Locations"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

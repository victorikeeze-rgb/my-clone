interface TeamMember {
  name: string;
  specialty: string;
  imgSrc: string;
  href: string;
}

const teamMembers: TeamMember[] = [
  { name: "Tarek A. Chidiac, MD, FACP", specialty: "Oncology and Hematology", imgSrc: "/images/team-tarek-chidiac.jpg", href: "/team/tarek-a-chidiac" },
  { name: "Dr. Nicole Baldwin, MD", specialty: "Oncology and Hematology", imgSrc: "/Dr-Nicole.png", href: "/team/nicole-baldwin" },
  { name: "Mark H. Knapp, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-mark-knapp.jpg", href: "/team/mark-h-knapp" },
  { name: "Dr. Karen Y. Tang, MD", specialty: "Oncology and Hematology", imgSrc: "/Dr-Karen.jpeg", href: "/team/karen-y-tang" },
  { name: "Sam Mikhail, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-sam-mikhail.jpg", href: "/team/sam-mikhail" },
  { name: "Christa I Nagel, MD", specialty: "Gynecologic Oncology\nat Main Location", imgSrc: "/images/team-christa-nagel.jpg", href: "/team/christa-i-nagel" },
  { name: "David O'Malley, MD", specialty: "Gynecologic Oncology\nat Main Location", imgSrc: "/images/team-david-omalley.jpg", href: "/team/david-omalley" },
  { name: "Taral Patel, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-taral-patel.jpg", href: "/team/taral-patel" },
  { name: "Jorge A. Rios, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-jorge-rios.jpg", href: "/team/jorge-a-rios" },
  { name: "Hiral A. Shah, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-hiral-shah.jpg", href: "/team/hiral-a-shah" },
  { name: "P. Kothai Sundaram, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-kothai-sundaram.jpg", href: "/team/p-kothai-sundaram" },
  { name: "Emily M. Whitman, MD", specialty: "Oncology and Hematology", imgSrc: "/images/team-emily-whitman.jpg", href: "/team/emily-m-whitman" },
];

export function TeamSection() {
  return (
    <>
      <style>{`
        .home-team {
          background-color: white;
          padding: 2rem 2rem;
        }
        .home-team .section-title {
          display: block;
          text-align: center;
          color: #2c5234;
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: bold;
        }
        .team-container {
          max-width: 80rem;
          margin: 0 auto;
        }
        .team-members {
          margin-top: 2rem;
          font-size: 0;
          text-align: center;
          text-wrap: balance;
        }
        .team-member {
          max-width: 40%;
          margin-bottom: 2rem;
          margin-inline: 1rem;
          font-size: 1rem;
          display: inline-block;
          vertical-align: top;
        }
        .team-member img {
          display: block;
          width: 15rem;
          max-width: 100%;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          object-position: 50% 20%;
          border-radius: 50%;
          margin: 0 auto;
        }
        .team-member .member-name {
          display: block;
          text-align: center;
          padding-top: 1rem;
          margin-top: 0;
          font-size: clamp(1.2rem, 1.4vw, 1.4rem);
          color: #2c5234;
          font-weight: bold;
          text-wrap: balance;
        }
        .team-member .member-position {
          font-weight: normal;
          margin: 0.25rem 0 0;
          display: block;
          text-align: center;
          line-height: 1.1em;
          color: #4a453f;
          font-size: 0.95rem;
          white-space: pre-line;
        }
        .team-member .read-bio {
          margin-top: 0.25rem;
          display: block;
          text-align: center;
          color: #a3631f;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: bold;
        }
        .team-member .read-bio:hover {
          color: #94795d;
        }
        @media (max-width: 55rem) {
          .team-member {
            max-width: 100%;
            margin-inline: 0;
            display: block;
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <section className="home-team">
        <div className="team-container">
          <span className="section-title">Your Team</span>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  width={240}
                  height={240}
                />
                <span className="member-name">{member.name}</span>
                <span className="member-position">{member.specialty}</span>
                <a className="read-bio" href={member.href}>
                  Read bio &gt;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

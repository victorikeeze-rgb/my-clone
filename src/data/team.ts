export interface TeamMemberBio {
  slug: string;
  name: string;
  credentials: string;
  specialty: string;
  photo: string;
  bio: string[];
}

export const teamMembers: TeamMemberBio[] = [
  {
    slug: "tarek-a-chidiac",
    name: "Tarek A. Chidiac",
    credentials: "MD, FACP",
    specialty: "Oncology and Hematology",
    photo: "/images/team-tarek-chidiac.jpg",
    bio: [
      "Dr. Chidiac is a diplomate of the American Board of Hematology, Medical Oncology and Internal Medicine. After receiving his medical degree from Saint Joseph University in Beirut, Lebanon, he completed his residency in internal medicine at Mount Carmel Medical Center and his fellowship in hematology/medical oncology at the Cleveland Clinic Foundation. He is an adjunct assistant professor at The Ohio State University and is a teaching faculty member at the Mount Carmel West Hospital Internal Medicine Residency Program.",
      "Dr. Chidiac served as director of medical oncology for Mount Carmel West from 2000 to 2007. Dr. Chidiac treats all cancer and blood disorders and has a special interest in melanoma, lung, breast and gastrointestinal malignancies. He is a principal investigator of multiple phase II/III trials, author of many peer-reviewed publications and book chapters and an investigator and active member of NCI Community Oncology Research Program for SWOG, ECOG, NSABP, RTOG, MDACC, URCC and GOG. Dr. Chidiac is a fellow of the American College of Physicians and a member of the American Society of Clinical Oncology, Community Oncology Alliance and Ohio State Medical Association.",
    ],
  },
  {
    slug: "mark-h-knapp",
    name: "Mark H. Knapp",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-mark-knapp.jpg",
    bio: [
      "A graduate of the University of Cincinnati College of Medicine, Dr. Knapp completed his internship and residency in internal medicine at St. Vincent Hospital in Indianapolis and his fellowship in hematology/medical oncology at the University of Cincinnati School of Medicine.",
      "Dr. Knapp has an interest in research and serves as primary investigator on a number of studies at the Zangmeister Cancer Center. He also has served as a consultant to the International Oncology Network Research Advisory Board and is currently a consultant to the Clinical Research Committee of Columbus NCI Community Oncology Research Program. He is Board-certified by the American Board of Internal Medicine, American Board of Medical Oncology and American Board of Hematology. Dr. Knapp is a member of the American Society of Hematology, American Society of Clinical Oncology, Community Oncology Alliance, Columbus Medical Association, Ohio State Medical Association and the Ohio Hematology Oncology Society.",
    ],
  },
  {
    slug: "karen-y-tang",
    name: "Karen Y. Tang",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/Dr-Karen.jpeg",
    bio: [
      "Dr. Karen Tang is a graduate of the University of Cincinnati College of Medicine, where she completed her internship and residency in internal medicine, followed by fellowship training in hematology and medical oncology.",
      "She is actively involved in clinical research as a principal investigator at the Zangmeister Cancer Center and has served in advisory and committee roles within national oncology research networks. Dr. Tang is board-certified in internal medicine, medical oncology, and hematology.",
      "In her leadership role, she oversees oncology patient services and coordinates prescription management, including the organization and distribution of cancer medications for patients in treatment.",
      "She is a member of several professional organizations, including the American Society of Hematology and the American Society of Clinical Oncology.",
    ],
  },
  {
    slug: "sam-mikhail",
    name: "Sam Mikhail",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-sam-mikhail.jpg",
    bio: [
      "Dr. Mikhail joined the Zangmeister Cancer Center in September 2016. He was most recently a medical oncologist and faculty member at The Ohio State University Comprehensive Cancer Center – Arthur G. James Cancer Hospital and Richard J. Solove Research Institute.",
      "Dr. Mikhail has authored numerous articles in medical oncology and hematology. Additionally, he has served as a peer reviewer for multiple medical journals and was selected as an editorial board member for the prestigious journal Nature Scientific Reports. Dr. Mikhail was also selected to be a reviewer for the ASCO University board review questions.",
      "Dr. Mikhail completed his internship and residency at Rochester General Hospital in Rochester, New York, where he was subsequently selected as chief resident. He went on to complete his fellowship and was selected as chief fellow in the Division of Hematology and Oncology at the Georgetown University's Lombardi Comprehensive Cancer Center in Washington, D.C.",
      "He has mentored multiple students in medical research and cancer prevention. He was recognized by a major insurance company for his high-quality and cost-effective patient care. Dr. Mikhail is actively engaged in research that focuses on improving patient outcomes and using targeted therapies and genomic medicine. He continues to maintain his interest in clinical research at the Zangmeister Cancer Center.",
      "Dr. Mikhail is Board-certified in hematology and medical oncology. He evaluates and treats all blood and cancer disorders with a special interest in gastrointestinal cancers. He is a member of the American Society of Clinical Oncology, American Association for Cancer Research, and International Society of Gastrointestinal Oncology, as well as Community Oncology Alliance, Ohio State Medical Association and Ohio Hematology Oncology Society.",
      "Dr. Mikhail enjoys bike riding and kayaking. He lives in Upper Arlington, Ohio, with his wife and three children.",
    ],
  },
  {
    slug: "christa-i-nagel",
    name: "Christa I Nagel",
    credentials: "MD",
    specialty: "Gynecologic Oncology",
    photo: "/images/team-christa-nagel.jpg",
    bio: [
      "Dr. Nagel is currently providing patient care at The Ohio State University Comprehensive Cancer Center – Arthur G. James Cancer Hospital and Richard J. Solove Research Institute (OSUCCC – James) as well as the Zangmeister Cancer Center, through a patient services agreement between these institutions. She is an associate professor in the Division of Gynecologic Oncology at The Ohio State University College of Medicine.",
      "Dr. Nagel earned her medical degree and completed her residency at The Ohio State University. She further pursued a fellowship in Gynecologic Oncology at the University of Texas Southwestern Medical Center.",
      "A national leader in minimally invasive procedures, Dr. Nagel specializes in laparoscopic and robotic surgery. With a robust interest in ovarian cancer, she has also led quality and compliance initiatives at both local and national levels. Her research focuses on improving the quality of care in gynecologic oncology patients, the treatment and outcomes of various gynecologic cancers, and fertility-sparing treatments. Dr. Nagel's commitment to advancing gynecologic oncology makes her a distinguished figure in her field.",
    ],
  },
  {
    slug: "david-omalley",
    name: "David O'Malley",
    credentials: "MD",
    specialty: "Gynecologic Oncology",
    photo: "/images/team-david-omalley.jpg",
    bio: [
      "Dr. O'Malley is presently treating patients at The Ohio State University Comprehensive Cancer Center – Arthur G. James Cancer Hospital and Richard J. Solove Research Institute (OSUCCC – James) and the Zangmeister Cancer Center as part of a patient services agreement between the two centers. Dr. O'Malley is a professor in the Department of Obstetrics and Gynecology at The Ohio State University College of Medicine and is also the director of the Division of Gynecologic Oncology at the OSUCCC – James.",
      "Dr. O'Malley's training includes a fellowship at Yale University and a residency at Case Western Reserve University and the Cleveland Clinic Foundation. His extensive clinical and research work has been published in over 100 prestigious scientific journals. He is highly regarded for his patient care, consistently receiving top-tier patient satisfaction ratings.",
      "He is active in national committees and leads pioneering research in novel therapies and surgical techniques for gynecologic cancers. He is celebrated for his contributions and dedication to the field.",
    ],
  },
  {
    slug: "taral-patel",
    name: "Taral Patel",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-taral-patel.jpg",
    bio: [
      "Dr. Patel is a diplomate of the American Board of Internal Medicine in Medical Oncology. He received his M.B.B.S. from Baroda Medical College at The Maharaja Sayajirao University in Gujarat, India, where he completed his internship and residency in pathology. Formerly a research associate at the University of Illinois at Chicago, he completed his residency in internal medicine at Chicago's Cook County Hospital and his fellowship in hematology/medical oncology at the University of Cincinnati. The author of many peer-reviewed publications, Dr. Patel is a member of the Community Oncology Alliance, Columbus Medical Association, The Ohio State Medical Association, Ohio Hematology Oncology Society and the American Society of Clinical Oncology.",
    ],
  },
  {
    slug: "jorge-a-rios",
    name: "Jorge A. Rios",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-jorge-rios.jpg",
    bio: [
      "Dr. Rios received his medical degree from San Marcos National Major University in Lima, Peru. He completed his internal medicine residency as chief medical resident at the University of Pittsburgh Medical Center and his fellowship in hematology/medical oncology at the University of Pittsburgh Cancer Institute. Prior to joining The Zangmeister Cancer Center, Dr. Rios held the position of assistant professor of medicine at the University of Louisville School of Medicine, Division of Medical Oncology & Hematology.",
      "Board-certified in internal medicine and medical oncology, Dr. Rios treats all types of cancer and blood disorders and has a special interest in lung cancer and other thoracic malignancies. His research focus is on developing innovative strategies aimed at overcoming the barriers that are currently preventing many patients from benefiting from both already-available effective treatments and therapies under study that might be available in the future. He participates in medical missions to Peru and assisted in relief efforts following the earthquake there in 2008. An avid runner, dancer and barbecue aficionado, Dr. Rios speaks Spanish and French.",
      "Dr. Rios is a member of the American Society of Clinical Oncology, Peruvian American Medical Society, Community Oncology Alliance, Ohio State Medical Association, Columbus Medical Association and the Ohio Hematology Oncology Society.",
    ],
  },
  {
    slug: "hiral-a-shah",
    name: "Hiral A. Shah",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-hiral-shah.jpg",
    bio: [
      "Dr. Shah received her medical degree from Northeastern Ohio College of Medicine in Rootstown, Ohio. She completed an internal medicine residency at Loyola University Medical Center in Maywood, Illinois. She completed her fellowship in hematology and medical oncology at the University of Illinois at Chicago and completed an additional advanced fellowship in developmental therapeutics at the Northwestern University Feinberg School of Medicine. Dr. Shah is Board-certified in internal medicine, hematology and medical oncology.",
      "Prior to joining the Zangmeister Cancer Center, she worked as a medical oncologist and hematologist at OhioHealth Physician Group in Mansfield, Ohio. Additionally, Dr. Shah has held the position of assistant professor in The Ohio State University Comprehensive Cancer Center – Arthur G. James Cancer Hospital and Richard J. Solove Research Institute in Columbus, Ohio.",
      "She is an active member of the American Society of Clinical Oncology and American Society of Hematology.",
    ],
  },
  {
    slug: "p-kothai-sundaram",
    name: "P. Kothai Sundaram",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-kothai-sundaram.jpg",
    bio: [
      "Dr. Sundaram is Board-certified in medical oncology and internal medicine by the American Board of Internal Medicine. She received her medical degree from Coimbatore Medical College in India, where she completed a rotatory internship. Dr. Sundaram completed a clinical rotatory externship at East Carolina University in Greenville, North Carolina, where she also completed her residency and internship in internal medicine. Her clinical fellowship was completed in the Division of Hematology & Oncology at The Ohio State University Comprehensive Cancer Center – Arthur G. James Cancer Hospital and Richard J. Solove Research Institute, where she was awarded the Amgen Fellowship.",
      "Dr. Sundaram enjoys traveling, cooking and reading in her spare time. She is a member of the American Society of Hematology, American Society of Clinical Oncology, Community Oncology Alliance, Columbus Medical Association, Ohio State Medical Association and the Ohio Hematology Oncology Society.",
    ],
  },
  {
    slug: "emily-m-whitman",
    name: "Emily M. Whitman",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/team-emily-whitman.jpg",
    bio: [
      "Dr. Whitman graduated summa cum laude from The University of Pittsburgh with a bachelor's degree in economics and political science. A member of Phi Beta Kappa, she received her medical degree from Drexel University College of Medicine in Philadelphia. She completed her residency in internal medicine and women's health at the University of Pittsburgh Medical Center, where she completed her fellowship in hematology and medical oncology. Dr. Whitman treats all cancers and blood disorders, with a specific interest in breast and gynecologic malignancies. Dr. Whitman serves as the medical oncologist on the Mount Carmel Multidisciplinary Committee for gynecologic cancer. She is active in research and has contributed to multiple peer-reviewed publications.",
      "Dr. Whitman is Board-certified in hematology, medical oncology and internal medicine by the American Board of Internal Medicine. She is a member of the American College of Physicians, American Society of Hematology, American Society of Clinical Oncology, Community Oncology Alliance, Ohio State Medical Association, Columbus Medical Association and the Ohio Hematology Oncology Society.",
      "In her free time, Dr. Whitman enjoys all things food as well as spending time outdoors with her husband, daughters and two dogs.",
    ],
  },
  {
    slug: "nicole-baldwin",
    name: "Nicole Baldwin",
    credentials: "MD",
    specialty: "Oncology and Hematology",
    photo: "/images/dr-nicole.jpeg",
    bio: [
      "Dr. Nicole Baldwin graduated summa cum laude from The Ohio State University with bachelor's degrees in chemistry and molecular genetics. She received her medical degree from the Ohio State University College of Medicine and completed her internship and residency in internal medicine at the Ohio State University Wexner Medical Center. Dr. Baldwin then completed a fellowship in hematology and oncology at the University of Illinois Chicago.",
      "Prior to joining the Zangmeister Cancer Center, Dr. Baldwin worked as a medical oncologist and hematologist at OhioHealth Physician Group, where she treated a wide range of cancers and benign hematologic conditions. During her time there, she worked alongside senior oncology specialists, gaining extensive clinical experience and developing a patient-centered approach to cancer care.",
      "Board-certified in hematology, medical oncology, and internal medicine by the American Board of Internal Medicine, Dr. Baldwin specializes in the treatment of cancer and blood disorders, with a particular interest in cardio-oncology. She currently serves as the Head of the Department overseeing oncology patient services and prescription coordination, including the management and shipment of cancer medications to patients undergoing treatment. Dr. Baldwin is also actively involved in clinical research and has contributed to multiple peer-reviewed publications in the field of oncology.",
    ],
  },
];

export function getMemberBySlug(slug: string): TeamMemberBio | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

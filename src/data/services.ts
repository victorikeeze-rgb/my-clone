export interface ServiceSection {
  heading?: string;
  body: string;
  contactEmail?: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  hero: string;
  sections: ServiceSection[];
}

export const services: ServiceData[] = [
  {
    slug: "medical-oncology",
    name: "Medical Oncology",
    hero: "/images/services/medical-oncology.jpg",
    sections: [
      {
        body: "Medical oncology uses chemotherapy, biological agents or other medications, such as targeted therapies, immunotherapy and oral (pill form) chemotherapy, to treat cancer. Chemotherapy can be used alone or as part of a cancer treatment plan that may also include surgery, radiation therapy, hormonal therapies or biological therapies. It may be used to cure cancer or to treat unpleasant symptoms the cancer is causing such as pain or bleeding. Each patient's treatment time varies and depends on the specific cancer treatment plan. Treatment ranges from a single day to several consecutive days or continuously in an outpatient or inpatient setting.",
      },
      {
        heading: "Collaborative Approach to Care",
        body: "Zangmeister Cancer Center's Board-certified medical oncologists and hematologists provide the highest level of clinical care and treatment. Extensively trained in their fields, our physicians take a collaborative team approach, ensuring each patient receives the latest diagnostic studies and therapies. Our advanced practitioners work in close partnership with our medical oncologists and hematologists as members of your healthcare team.",
      },
      {
        heading: "Cancers We Treat",
        body: "Cancers we treat include bladder cancer, brain cancer, breast cancer, cervical cancer, colorectal cancer, head and neck cancer, hematologic cancer, kidney cancer, liver cancer, lung cancer, melanoma, pancreatic cancer, prostate cancer, sarcoma and more.",
      },
      {
        heading: "Exceptional Care, Close to Home",
        body: "Our cancer center provides an in-house laboratory performing all routine blood work and an in-house specialty pharmacy providing convenient dispensing and delivery of oral cancer drugs. Patients have access to a diverse range of support services including 24/7 pharmacy assistance and nutritional and financial counseling that provides unparalleled access to comprehensive, integrated cancer care close to home.",
      },
    ],
  },
  {
    slug: "hematology",
    name: "Hematology",
    hero: "/images/services/hematology.jpg",
    sections: [
      {
        body: "Hematology is the study of blood, blood disorders and the blood-forming organs and problems with the red and white blood cells, platelets, blood vessels, bone marrow, lymph nodes, spleen and the blood clotting process. If you are diagnosed with a blood condition, your doctor may refer you to a hematologist.",
      },
      {
        body: "Zangmeister Cancer Center specializes in the diagnosis and treatment of blood cancers, benign blood disorders and autoimmune blood disorders, and we are dedicated to providing exceptional care by developing a tailored treatment plan for each patient.",
      },
      {
        body: "We treat patients with all types of hematologic malignancies, including rare blood-based liquid tumors and autoimmune abnormalities. As such, patients can benefit from our expertise in the management of conditions such as lymphoma, leukemia and myelodysplastic syndromes (MDS), as well as multiple myeloma, myeloproliferative syndromes, aplastic anemia and other hematological malignancies.",
      },
    ],
  },
  {
    slug: "gynecologic-oncology",
    name: "Gynecologic Oncology",
    hero: "/images/services/gynecologic-oncology.jpg",
    sections: [
      {
        body: "Cancer that starts in a woman's reproductive organs is called gynecologic cancer, and includes ovarian, cervical, uterine, vaginal, vulvar and endometrial cancer, among others. They can be treated with a variety of therapies, including chemotherapy, radiation, minimally invasive surgical techniques, advanced laparoscopy and robotic surgery, as well as complex gynecologic surgery and pelvic reconstruction.",
      },
      {
        body: "The gynecologic oncologists at Zangmeister Cancer Center specialize in the diagnosis and treatment of cancers of the female reproductive organs. Following a referral from another treating physician, our practice may provide consultation and management of complex benign gynecologic conditions as well.",
      },
    ],
  },
  {
    slug: "bite-therapy",
    name: "BiTE Therapy",
    hero: "/images/services/bite-therapy.jpg",
    sections: [
      {
        body: "Our practice is proud to provide bispecific antibody (BiTE) therapy—an advanced treatment that helps your immune system fight cancer more effectively.",
      },
      {
        heading: "What Are Bispecific Antibodies?",
        body: "Bispecific antibodies are proteins engineered to connect two different types of cells: your immune cells and cancer cells. By linking them together, these antibodies help your immune system find and destroy cancer cells more efficiently.",
      },
      {
        heading: "How Do They Work?",
        body: "Think of bispecific antibodies as a bridge. One side attaches to your immune cells, and the other side attaches to cancer cells. This connection helps your immune system recognize and attack the cancer.",
      },
      {
        heading: "How We Use Bispecific Antibodies",
        body: "At our practice, we use bispecific antibody therapy to treat certain types of blood cancers and solid tumors. This therapy is part of our commitment to providing the latest and most effective cancer treatments. Our team works closely with each patient to determine if this therapy is the right choice for their specific type of cancer.",
      },
      {
        heading: "Talk to Your Doctor",
        body: "If you're interested in learning more about bispecific antibody therapy and whether it's suitable for you, please speak with your doctor. They can provide detailed information and help decide the best treatment plan for your needs.",
      },
      {
        heading: "Treatment Considerations",
        body: "When using bispecific antibodies, it's important to consider several factors to optimize treatment outcomes and minimize risks. These factors include patient eligibility, potential side effects, and the need for monitoring during therapy.\n\nPatient Eligibility – Bispecific antibody therapies are typically prescribed for certain types of blood cancers such as leukemia, lymphoma and multiple myeloma. They are also used for certain solid tumor cancers such as lung cancer. Our oncologists can determine if you are eligible for treatment with BiTE therapy based on your specific type of cancer and your previous treatments.\n\nSafety Considerations – Bispecific antibody therapies can cause potentially serious or life-threatening side effects, including cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity syndrome (ICANS). Symptoms of CRS may include fever, low blood pressure, difficulty breathing, and chills. Neurological symptoms may include confusion, difficulty speaking, seizures, and altered consciousness. These side effects typically occur during initial treatment and require immediate medical attention. Patients receiving bispecific antibody therapy are closely monitored, particularly during step-up dosing, and specific protocols are in place to manage these complications.",
      },
    ],
  },
  {
    slug: "specialty-infusion-services",
    name: "Specialty Infusion Services",
    hero: "/images/services/specialty-infusion-services.jpg",
    sections: [
      {
        heading: "Providing Infusion-Based Therapies Beyond Those Specific to Cancer",
        body: "We offer specialty infusion therapies for patients with chronic diseases or conditions to treat anemia, Crohn's, multiple sclerosis, rheumatoid arthritis and more. Under the supervision of our Board-certified physicians, our dedicated teams of oncology-certified nurses and pharmacy technicians are trained in preparing and managing complex infusions and addressing side effects that may occur.",
      },
      {
        heading: "Expert Care Delivery",
        body: "Our pharmacy staff are highly knowledgeable in preparing biologic infusions. Every patient receiving infusion is under the care of a licensed and certified nurse with expertise in administering infusion-based medications and identifying and managing reactions.",
      },
      {
        heading: "Cost-Effective Option",
        body: "We provide high quality, infusion therapy at a lower cost to patients and payers. Patients who receive infusion treatment in a hospital outpatient setting often incur higher costs than patients receiving treatment in a community-based practice.",
      },
      {
        heading: "Comfortable and Convenient",
        body: "With care that centers around the patient, our physicians and nurses take the time to get to know each patient – care is personal and delivered safely with compassion and comfort in mind. With offices conveniently located within the community, patients do not have to go far to get the very best in care.",
      },
      {
        heading: "Integrated Patient Care",
        body: "We work with the patients' referring physician to ensure a seamless patient experience. Our process includes collecting records, information and other needs before the patient arrives for treatment, so we are ready to provide care.",
      },
    ],
  },
  {
    slug: "diagnostic-imaging",
    name: "Diagnostic Imaging",
    hero: "/images/services/diagnostic-imaging.jpg",
    sections: [
      {
        body: "Medical imaging procedures, such as computed tomography scans (CT) and positron emission tomography scans (PET), are used to identify and diagnose many different cancers and conditions. Zangmeister Cancer Center continues to invest in next-generation technologies that provide precise views of internal organs, bones, soft tissues and blood vessels with immense clarity and detail. These scans and other imaging tests are performed and reviewed on-site.",
      },
      {
        heading: "What is a CT scan?",
        body: "A Computed Tomography (CT) scan uses a combination of x-rays and computers to give the radiologist an advanced but non-invasive way to view your body's internal anatomy. A CT scan rapidly acquires 2-dimensional pictures of your anatomy which are then reconstructed by a computer into 3-dimensional images for in-depth clinical evaluation.",
      },
      {
        heading: "What is a PET/CT scan?",
        body: "A PET/CT combines functional information from a positron emission tomography (PET) exam with anatomical information from a CT scan into one single exam. A PET scan detects changes in how your cells are using nutrients such as sugar and oxygen. Since these functional changes often take place before physical changes occur, PET can provide information that often allows your physician to make an earlier diagnosis.\n\nThe PET exam identifies metabolic activity in the cells, and the CT scan provides an anatomical reference or \"roadmap\". When these two scans are fused together, physicians can view metabolic changes seen on PET in the proper anatomical context with your body as seen on the CT scan.",
      },
      {
        heading: "Why do I need this exam?",
        body: "Your exam results may have a major impact on your physician's diagnosis of a potential health problem and how a treatment plan is developed and managed in the event that a health issue is discovered. These tests not only help your physician diagnose a problem, they also help establish the extent and severity of that disease. Additionally, scan results help predict the likely outcome of various treatment alternatives, identify the best approach for treatment and help monitor your progress. That way, if you're not responding as well as expected, you can be switched to a more effective treatment as soon as possible.",
      },
      {
        heading: "How should I prepare for my exam?",
        body: "CT (Abdomen/Pelvis): Nothing to eat or drink except water after midnight or 4 hours prior to exam. Please drink as much water as you can the day of your scan just prior to your appointment.\n\nAll Other Contrast CT's: Nothing to eat or drink except water 4 hours prior to exam.\n\nPET/CT Preparation: Refrain from heavy exercise 48 hours prior to exam. Eat a low-carb meal (no sugar, fruit, breads, desserts) for the 2 meals before your exam and drink extra water the night before and the day of the exam. You are required to fast 4 hours prior to your exam (no food, drinks, snacks, candy, mints, etc., other than plenty of water). You may take any medication you need to take with water. Wear warm comfortable clothing preferably with no metal or jewelry. Arrive on time for your appointment to ensure the injectable glucose does not expire.",
      },
      {
        heading: "What should I expect when I arrive?",
        body: "We will review your history and past exams. Depending on your procedure you may be asked to drink an oral contrast to help visualize your digestive tract. If you are having a PET/CT scan we will also take a small blood sample to ensure your blood glucose levels are within normal limits.\n\nFor the PET scan, you will receive an injection of a radioactive tracer similar to glucose in the vein. For most PET Scan studies you will wait one hour for the glucose-like injection to distribute itself evenly throughout your body. During this time, you will be asked to relax in an easy chair.",
      },
      {
        heading: "Safety of PET/CT exams",
        body: "Both the PET/CT and CT exams are safe and effective diagnostic procedures. Although both involve exposure to diagnostic level radiation, your physician has determined that the risk of this exposure outweighs the risk of not having the scans. The radiopharmaceuticals used in a PET/CT scan do not remain in your system for long so there is no reason to avoid interacting with other people once you have left our facility.",
      },
    ],
  },
  {
    slug: "radioligand-therapy",
    name: "Radioligand Therapy",
    hero: "/images/services/radioligand-therapy.jpg",
    sections: [
      {
        body: "At Zangmeister Cancer Center, we specialize in providing innovative treatment options and personalized care for cancer patients. Radioligand, or RLT, therapeutics is a cutting-edge approach to cancer treatment that targets tumors with precision radiopharmaceuticals. Unlike traditional chemotherapy or radiation therapy, which can harm healthy cells along with cancerous ones, RLT therapy delivers radiation directly to cancer cells, reducing exposure to healthy tissue and minimizing side effects.",
      },
      {
        body: "Our experienced oncologists will work closely with you to determine if RLT therapy is the right option for your specific type and stage of cancer. We understand that each patient is unique, and we tailor our treatment plans to meet your individual needs and preferences.",
      },
      {
        heading: "Benefits of Radioligand Therapeutics",
        body: "Precision Targeting: Depending on the cancer type, radioligand therapy specifically targets cancer cells, leading to more effective treatment and fewer side effects.\n\nMinimal Impact on Healthy Tissue: Healthy tissues surrounding the tumor are far less likely to be damaged from RLT exposure, reducing the risk of long-term complications.\n\nPersonalized Approach: Our team will create a customized treatment plan based on your medical history, tumor characteristics, and treatment goals.\n\nPotential for Improved Outcomes: Radioligand therapy has shown promising results in shrinking tumors, managing symptoms, and extending survival for many cancer patients.",
      },
      {
        body: "Radioligand therapy may not be suitable for all cancer patients. Talk to your physician to determine the most appropriate treatment options.",
      },
    ],
  },
  {
    slug: "molecular-targeted-therapy",
    name: "Molecular-Targeted Therapy",
    hero: "/images/services/molecular-targeted-therapy.jpg",
    sections: [
      {
        body: "A cancer diagnosis can produce great uncertainty. If you or a loved one have been diagnosed with cancer, you might feel overwhelmed by all of the questions you have and all of the information you are being given. However, information is the key to finding options in your fight against cancer.",
      },
      {
        body: "One of the newest and most advanced ways to help physicians assess your options is to identify the biomarkers – \"targets\" that are specific to your cancer. Today, tumor profiling, or also called molecular profiling, makes this possible, and at the Zangmeister Cancer Center we use this new oncology service to do just that.",
      },
      {
        heading: "Tumor Profiling",
        body: "Tumor profiling, which is a term that emerged from the Human Genome Project, is an alternative to the one-size-fits-all approach to cancer treatment and uses a focused approach to treatment that specifically targets an individual patient's tumor. Most importantly, the type of personalized cancer care brought about by tumor profiling may increase the likelihood that patients will benefit from cancer therapy.\n\nTumor profiling marks an important step forward in oncology and reflects a trend toward personalized cancer care. The Zangmeister Cancer Center uses tumor profiling to identify the specific genetic aspects of a person's tumor, called biomarkers, which we can then potentially target. Targeting a tumor means attacking attributes of the tumor that are allowing it to grow and spread and customizing a treatment plan specifically designed to alter the growth and development of a specific patient's tumor.\n\nTumor profiling helps us to know which treatments are more likely to be effective, as well as those that may not be effective, and it can also help us to identify important treatment options that might not have otherwise been considered.",
      },
      {
        heading: "How it Works: Evidence-Guided Tumor Profiling",
        body: "Tumor profiling begins with an analysis of a tumor and the biomarkers or \"targets.\" The information can then be matched to published studies from the world's leading cancer researchers to identify therapies with a potentially higher likelihood of clinical benefit, as well as therapies that may be unlikely to create benefit. Since new research in cancer and biomarkers continually emerges, a medical and scientific literature search that correlates biomarker expression to therapy is critically important.",
      },
      {
        heading: "How it Can Help You",
        body: "This type of tumor profiling service is well suited for people affected by a wide variety of cancers, including people with aggressive disease, rare cancers, those with limited treatment options, as well as those who may have multiple options to choose from.\n\nWhile some of our patients have seen their cancer treated successfully with targeted therapy, others have benefitted from increased progression-free survival rates and improved quality of life, both of which are very important factors to patients with advanced forms of the disease.\n\nThrough tumor profiling, we are able to increase the possibility that our patients will respond favorably to therapy, and thereby avoid the potential side effects and the costs associated with a therapy that may be less likely to help the patient.",
      },
    ],
  },
  {
    slug: "pathology",
    name: "Pathology",
    hero: "/images/services/pathology.jpg",
    sections: [
      {
        body: "Zangmeister Cancer Center is committed to providing high-quality, timely and friendly laboratory services for our patients. We serve our patients' laboratory needs locally, reducing their trips to multiple locations often required for routine and specialized laboratory testing.\n\nCentralized pathology services provide complete, accurate and timely diagnostic reports. Our centralized pathology lab is a state-of-the-art facility staffed with highly specialized laboratory scientists, hematopathologists and surgical pathologists to serve the needs of our practice.",
      },
      {
        heading: "Integrated Patient Care",
        body: "Lab and staff are seamlessly integrated into daily patient care. Our physicians connect instantly with our pathologists via phone, email or secure text to discuss special testing requests, review lab reports or answer general pathology questions.",
      },
      {
        heading: "Exceptional Turnaround Times",
        body: "Through consistent use of Lean and Six Sigma tools to engineer process improvements and efficiencies, turnaround times are superior to industry norms enabling quicker diagnosis, earlier patient treatment and a decrease in patient anxiety.",
      },
      {
        heading: "Cancer Expertise",
        body: "Our pathologists are recognized leaders in oncologic pathology and bring extensive experience in diagnostic testing and treatment advice. They play an active role in identifying additional testing needed to obtain a more precise diagnosis and minimizing unnecessary testing, which ultimately improves the quality of patient care.",
      },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    hero: "/images/services/pharmacy.jpg",
    sections: [
      {
        body: "The use of oral oncolytic medications in cancer treatment is fast growing. Approximately 30% of all cancer drugs are available in pill form, including the newer targeted therapies.",
      },
      {
        heading: "In-House Specialty Pharmacy Services",
        body: "We provide in-house specialty pharmacy services with experienced staff who will provide you with:\n\n• Answers to your specialty medication questions from experienced oncology pharmacists who are available 24/7\n• Assistance with insurance issues, such as prior authorizations\n• Reminder calls to refill prescriptions\n• Fast, convenient FedEx delivery of medications at no additional charge\n• Financial assistance that may be available to help pay for medications",
        contactEmail: "zangmeisterrx@gmail.com",
      },
    ],
  },
  {
    slug: "care-coordination",
    name: "Care Coordination & Navigation",
    hero: "/images/services/care-coordination.jpg",
    sections: [
      {
        body: "Cancer care involves more than medical treatment alone. Our care coordination team is here to guide and support you throughout your entire care journey—helping ensure you receive the right care at the right time.\n\nOngoing care coordination is provided by experienced oncology clinicians and dedicated support staff who work closely with you during treatment and beyond. Your care coordinator serves as your primary point of contact, helping you manage not only your medical needs, but also the physical, emotional, and practical challenges that may arise along the way.",
      },
      {
        heading: "Our Care Coordination Services Include",
        body: "• Symptom monitoring and management, with timely support to address side effects and improve comfort.\n• Medication and diagnosis education, so you feel informed and confident in your care.\n• Nutritional guidance and support, helping you maintain strength and overall well-being.\n• Identification and support for barriers to care, including transportation, financial concerns, and access to community resources.\n• Personalized care planning, ensuring your treatment plan aligns with your needs and goals.\n• Care navigation and communication, helping coordinate between your oncologist, specialists, and other providers.",
      },
      {
        heading: "Survivorship Care",
        body: "Your care doesn't end when treatment does. Our survivorship program supports your long-term health and quality of life after active cancer treatment.\n\nWe provide individualized survivorship care plans, ongoing monitoring, and guidance to help you transition with confidence. Our team also connects you with community-based resources that support physical wellness, emotional health, and survivorship-related needs—so you feel supported every step of the way.\n\nFrom diagnosis through survivorship, our goal is to care for the whole person—helping you feel supported, informed, and never alone in your care.",
      },
      {
        heading: "Meet Your Social Worker",
        body: "Dana Zager, MA, ATR-BC, MSW, LISW-S, OSW-C, ACHP-SW\n\nAfter receiving a bachelor's degree from Washington University in St. Louis, Dana earned her master's degree in social work from The Ohio State University. She is a Board-certified oncology social worker with over 30 years of experience in mental health and end-of-life care. She is a valuable resource for Zangmeister Cancer patients as a Board-certified art therapist with qualifications in hospice and palliative care.\n\nDana is here to help guide patients through the variety of programs and services available to support them and their loved ones. She will provide emotional support while answering your questions and concerns.",
      },
    ],
  },
  {
    slug: "clinical-trials",
    name: "Clinical Trials",
    hero: "/images/services/clinical-trials.jpg",
    sections: [
      {
        body: "Clinical trials are studies that evaluate the effectiveness of drugs or treatment routines. Our goal is to give patients the opportunity to participate in approved and exploratory therapies without long-distance travel. Clinical trials are not available for every condition. Talk to your physician to discuss your options.",
      },
      {
        body: "Zangmeister Cancer Center participates in a broad range of research studies in cooperation with National Cancer Institute (NCI) cooperative groups including Southwest Oncology Group, Eastern Cooperative Oncology Group, and the Gynecologic Oncology Group through the NCI Community Oncology Research Program in association with Mount Carmel Health System.\n\nIn addition, we participate in many studies with both nationally and internationally recognized pharmaceutical companies. Our research department at any time is actively involved in over 100 national clinical trials.",
      },
      {
        heading: "Why Participate in Clinical Trials?",
        body: "Clinical trials are designed to evaluate the effectiveness of new treatment interventions. The objective of clinical trials is to test new therapies in patients who have cancer. Patients participate in clinical trials for several reasons:\n\n• The potential to benefit from a new drug or treatment procedure\n• Improved management of symptoms resulting from the treatment of cancer\n• The opportunity to directly contribute to improving the understanding of how to treat specific cancers and ultimately, benefit other patients",
      },
      {
        body: "Patients who participate in clinical trials receive either a promising new treatment or the best available conventional treatment. If a new treatment option is proven to work, participating patients will be among the first to benefit. While there is no guarantee that any treatment will be successful, clinical trials have been proven to offer some of the most effective cancer treatments currently available.\n\nBoth standard care and clinical trials have risks, side effects and benefits that vary depending on the individual. However, there are rigorous guidelines in place to protect the well-being and safety of clinical trial participants. The physician and research nurse conducting the study will explain any known or anticipated risks ahead of time.",
      },
    ],
  },
  {
    slug: "financial-support",
    name: "Financial Support",
    hero: "/images/services/financial-support.jpg",
    sections: [
      {
        body: "Our experienced financial counselors are available on-site from 7:30 a.m. to 4:30 p.m. Monday through Friday. We can answer any questions you may have regarding prior authorizations for radiology scans, chemotherapy, and other services. Prior insurance approval must be received before any testing or services are rendered. All payments are due at time of service including, but not limited to copayments, coinsurance, deductibles, out-of-pocket costs, and payment for services not covered by insurance.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

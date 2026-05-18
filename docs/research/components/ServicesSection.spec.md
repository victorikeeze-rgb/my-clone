# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Interaction model:** scroll-driven horizontal scroll-snap slider

## DOM Structure
```
<section id="services" class="home-services">
  <h2 class="section-title">Our Services</h2>
  <div class="service-cards slider">
    <div class="slider-arrow left">‹</div>
    <div class="slider-arrow-cover" />
    <div class="service-card">...</div>  × 13
    <div class="slider-arrow right">›</div>
  </div>
</section>
```

### Each `.service-card`
```
<div class="service-card">
  <img src="/images/service-xxx.jpg" alt="Image for X" />
  <div class="title"><a href="...">Medical Oncology</a></div>
  <div class="content"><p>Description text...</p></div>
  <div class="cta"><a href="...">View cancers we treat ></a></div>
</div>
```

## Computed Styles

### `section.home-services`
- padding: 2rem 0

### `.section-title`
- display: block
- text-align: center
- color: #2c5234
- text-transform: uppercase
- font-size: 2rem
- font-weight: bold
- padding: 0 var(--aon-gap)

### `.service-cards`
- position: relative
- margin: 0 auto
- padding: 2rem 0 1rem
- display: flex
- flex-direction: row
- width: max-content
- max-width: 100%
- overflow: auto
- scroll-snap-type: x mandatory
- scrollbar: hidden (display: none)

### `.service-card`
- width: 20rem
- max-width: 80vw
- display: flex
- flex-direction: column
- background-color: white
- flex-shrink: 0
- border-radius: 0.15rem
- overflow: hidden
- scroll-snap-align: center
- margin-right: var(--aon-gap) (not last)

### `.service-card img`
- width: 100%
- aspect-ratio: 16/9
- object-fit: cover

### `.service-card .title`
- margin: 1rem

### `.service-card .title a`
- color: #2c5234 (--primary-compliant-color)
- font-size: 1.2rem

### `.service-card .title a:hover`
- color: #00845a

### `.service-card .content`
- margin: 0
- padding: 0 1rem 1rem
- flex-grow: 1
- font-size: 0.9rem
- color: #4a453f

### `.service-card .cta`
- margin: 0 1rem 1rem

### `.service-card .cta a`
- color: #a3631f
- font-size: 0.9rem

### `.slider-arrow`
- width: 2rem
- flex-shrink: 0
- display: flex
- align-items: center
- justify-content: center
- scroll-snap-align: start
- position: sticky
- font-size: 3rem
- color: #a3631f
- cursor: pointer
- padding: 0

### `.slider-arrow.left`
- background: linear-gradient(to left, transparent, #f4f4f4 1rem)
- left: 0
- margin-right: -2rem

### `.slider-arrow.right`
- background: linear-gradient(to right, transparent, #f4f4f4 1rem)
- right: 0
- margin-left: -2rem

## Service Cards Data (all 13)
1. **Medical Oncology** — "We use chemotherapy, biological agents or other medications, such as targeted therapies, immunotherapy and oral (pill form) chemotherapy, to treat cancer." — CTA: "View cancers we treat >" — img: `/images/service-medical-oncology.jpg`
2. **Hematology** — "We treat patients with all types of hematologic malignancies, including rare blood-based liquid tumors and autoimmune abnormalities." — CTA: "Learn more about this service >" — img: `/images/service-hematology.jpg`
3. **Gynecologic Oncology** — "We provide specialized diagnosis, treatment, and support for women with cancers of the reproductive system." — CTA: "How to access this service >" — img: `/images/service-gynecologic-oncology.jpg`
4. **BiTE Therapy** — "BiTE therapy links T cells to cancer cells, boosting immune response with precision and fewer side effects than traditional treatments." — CTA: "See how BiTE works >" — img: `/images/service-bite-therapy.jpg`
5. **Specialty Infusion Services** — "We offer specialty infusion therapies for patients with chronic diseases or conditions to treat anemia, Crohn's, multiple sclerosis, rheumatoid arthritis and more." — img: `/images/service-specialty-infusion.jpg`
6. **Diagnostic Imaging** — "We continue to invest in technologies that provide precise views of internal organs, bones, soft tissues and blood vessels with immense clarity and detail." — img: `/images/service-diagnostic-imaging.jpg`
7. **Radioligand Therapy** — "RLT therapy delivers radiation directly to cancer cells, reducing exposure to healthy tissue and minimizing side effects." — img: `/images/service-radioligand-therapy.jpg`
8. **Molecular-Targeted Therapy** — "One of the newest and most advanced ways to help physicians assess your options is to identify the biomarkers - "targets" that are specific to your cancer." — img: `/images/service-molecular-targeted.jpg`
9. **Pathology** — "We serve our patients' laboratory needs locally, reducing their trips to multiple locations often required for routine and specialized laboratory testing." — img: `/images/service-pathology.jpg`
10. **Pharmacy** — "The use of oral oncolytic medications in cancer treatment is fast growing. We provide in-house specialty pharmacy services with experienced staff." — img: `/images/service-pharmacy.jpg`
11. **Care Coordination & Navigation** — "The journey you are about to begin can be confusing and difficult. Your team will be invaluable in helping you successfully navigate the treatment process." — img: `/images/service-care-coordination.jpg`
12. **Clinical Trials** — "Our goal is to give patients the opportunity to participate in approved and exploratory therapies without long-distance travel." — img: `/images/service-clinical-trials.jpg`
13. **Financial Support** — "You will meet with a financial counselor during one of your initial visits and at any time that you have questions about your account or insurance coverage." — img: `/images/service-financial-support.jpg`

## Responsive Behavior
- Cards scroll horizontally at all widths
- `max-width: 80vw` prevents cards from being too wide on mobile
- Arrows remain visible as sticky elements

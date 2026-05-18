# TeamSection Specification

## Overview
- **Target file:** `src/components/TeamSection.tsx`
- **Interaction model:** static (hover states on links only)

## DOM Structure
```
<section id="team" class="home-team">
  <div class="aon-container">
    <h2 class="section-title">Your Team</h2>
    <div class="team-members">
      <article class="team-member">
        <a href="/physician/...">
          <img src="/images/team-xxx.jpg" alt="" />
          <span class="title">Dr. Name, MD</span>
          <span class="position">Specialty</span>
        </a>
        <a href="/physician/..." class="read-bio">Read bio ></a>
      </article>
    </div>
  </div>
</section>
```

## Computed Styles

### `section.home-team`
- background-color: white
- padding: 2rem var(--aon-gap)

### `.team-members`
- margin-top: 2rem
- margin-inline: calc(-1 * var(--aon-gap))
- font-size: 0 (removes inline-block gaps)
- text-align: center
- text-wrap: balance

### `article.team-member`
- max-width: 40%
- margin-bottom: 2rem
- margin-inline: var(--aon-gap)
- font-size: 1rem
- display: inline-block
- vertical-align: top

### `.team-member img`
- display: block
- width: 15rem
- max-width: 100%
- height: auto
- aspect-ratio: 1/1
- object-fit: cover
- object-position: 50% 20%
- border-radius: 50%
- margin: 0 auto

### `.team-member .title` (name)
- display: block
- text-align: center
- text-wrap: balance
- padding-top: 1rem
- margin-top: 0
- font-size: clamp(1.2rem, 1.4vw, 1.4rem)
- color: #2c5234 (--primary-compliant-color)
- font-weight: bold

### `.team-member .position` (specialty)
- font-weight: normal
- margin: 0.25rem 0 0
- display: block
- text-align: center
- line-height: 1.1em
- color: #4a453f (--font-color)

### `.team-member .read-bio`
- margin-top: 0.25rem
- display: block
- text-align: center
- color: #a3631f
- font-size: 0.9rem

## Team Members Data (all 12)
1. **Tarek A. Chidiac, MD, FACP** — Oncology and Hematology — img: `/images/team-tarek-chidiac.jpg`
2. **Katherine Exten, MD** — Oncology and Hematology — img: `/images/team-katherine-exten.jpg`
3. **Mark H. Knapp, MD** — Oncology and Hematology — img: `/images/team-mark-knapp.jpg`
4. **Jeanna L. Knoble, MD** — Oncology and Hematology — img: `/images/team-jeanna-knoble.jpg`
5. **Sam Mikhail, MD** — Oncology and Hematology — img: `/images/team-sam-mikhail.jpg`
6. **Christa I Nagel, MD** — Gynecologic Oncology at Main Location — img: `/images/team-christa-nagel.jpg`
7. **David O'Malley, MD** — Gynecologic Oncology at Main Location — img: `/images/team-david-omalley.jpg`
8. **Taral Patel, MD** — Oncology and Hematology — img: `/images/team-taral-patel.jpg`
9. **Jorge A. Rios, MD** — Oncology and Hematology — img: `/images/team-jorge-rios.jpg`
10. **Hiral A. Shah, MD** — Oncology and Hematology — img: `/images/team-hiral-shah.jpg`
11. **P. Kothai Sundaram, MD** — Oncology and Hematology — img: `/images/team-kothai-sundaram.jpg`
12. **Emily M. Whitman, MD** — Oncology and Hematology — img: `/images/team-emily-whitman.jpg`

## Responsive Behavior
- Desktop: 2 per row (max-width 40% each, inline-block)
- Mobile: 1 per row (max-width 100%)
- Images shrink proportionally with container

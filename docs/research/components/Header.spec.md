# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** scroll-driven (transparent → dark green on scroll)

## DOM Structure
```
<header class="with-background">
  <div class="aon-container">
    <div class="logo">
      <a href="/"><img src="/images/ZCC_logo_white.svg" alt="Zangmeister Cancer Center Logo" /></a>
    </div>
    <form class="searchform">
      <input type="text" placeholder="Search" />
      <button type="submit" aria-label="Search" />
    </form>
    <nav class="menu-main-container">
      <ul>
        <li>For Patients (dropdown)</li>
        <li>Our Services (dropdown)</li>
        <li>Locations</li>
        <li>About US</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </div>
</header>
```

## Computed Styles

### `header` element
- position: fixed
- top: 0
- left: 50%; transform: translateX(-50%)
- max-width: 160rem
- width: 100%
- z-index: 10
- transition: background-color 0.3s ease-in-out
- background-color: transparent (default) → #2c5234 (with-background)

### Desktop `.aon-container` (inside header, >55rem)
- display: grid
- grid-template: "logo search" min-content "logo menu" min-content / auto auto
- height: min-content

### `.logo`
- grid-area: logo
- padding: 1rem 0

### `.logo img`
- object-fit: contain
- object-position: left center
- max-width: 17rem

### Search form
- grid-area: search
- place-self: start end
- margin-top: 1rem
- Input: standard text input with placeholder "Search"
- Submit button: has search icon (magnifying glass)

### `.menu-main-container`
- grid-area: menu
- justify-self: end
- margin-top: 1rem

### Nav items (`#menu-main > li > a/button`)
- color: white
- text-transform: uppercase
- font-weight: normal
- padding: 0.75rem 1rem
- background-color: var(--primary-compliant-color) = #2c5234
- display: block
- line-height: 1em
- text-decoration: none

## States & Behaviors

### Scroll-triggered background
- **Trigger:** IntersectionObserver on a sentinel div (#header-observer, height 5rem, at page top)
- **State A (visible sentinel = at top):** no background (transparent)
- **State B (sentinel not visible = scrolled):** background-color: #2c5234
- **Transition:** background-color 0.3s ease-in-out
- **Implementation:** useEffect with IntersectionObserver; toggle `withBackground` state

## Assets
- Logo: `/images/ZCC_logo_white.svg` (300x77)
- Search icon: magnifying glass SVG (inline or lucide)

## Text Content
Nav items: "FOR PATIENTS", "OUR SERVICES", "LOCATIONS", "ABOUT US", "CONTACT US"

## Responsive Behavior
- **Desktop (>55rem = 880px):** grid layout as described above
- **Mobile (<880px):** flex row, hamburger icon, search icon; nav collapses to overlay
- For clone simplicity: implement desktop layout; mobile can use basic hamburger toggle

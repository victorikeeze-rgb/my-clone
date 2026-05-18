# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static (button click opens YouTube modal)

## DOM Structure
```
<section class="post home-main">
  <div class="header-banner">
    <img src="/images/hero.jpg" style="object-position: 50% 42%" />
    <div class="aon-container">
      <h1>Patient First, Always</h1>
      <button class="overview-video-button">Overview Video</button>
    </div>
  </div>
  <div class="content">
    <div class="aon-container">
      <blockquote>
        <p>Zangmeister Cancer Center is a community-based medical oncology, gynecologic oncology and hematology practice providing treatment for patients diagnosed with all types of cancer and blood disorders. Through compassionate care that centers around the patient, we strive to provide the best possible experience to patients and their families throughout the healthcare journey.</p>
      </blockquote>
    </div>
  </div>
</section>
```

## Computed Styles

### `.header-banner`
- background-color: black
- position: relative
- overflow: hidden

### `.header-banner img`
- position: absolute
- width: 100%
- height: 100%
- object-fit: cover
- object-position: 50% 42%
- opacity: 0.5
- z-index: 0

### `.home-main .header-banner .aon-container`
- height: 100vw
- max-height: 100vh
- display: flex
- flex-direction: column-reverse
- justify-content: flex-start
- align-items: flex-end
- padding-top: 4rem
- padding-bottom: var(--aon-gap) = 1rem/2rem
- position: relative
- z-index: 1

### `h1` inside banner
- color: white
- text-align: right
- font-size: clamp(1.7rem, 4vw, 4rem)
- font-weight: bold
- line-height: 1.1
- margin-top: 1rem
- text-wrap: balance

### Overview Video button
- display: inline-block
- background-color: #a3631f (--secondary-compliant-color)
- color: white
- text-transform: uppercase
- letter-spacing: 0.05em
- padding: 0.5em 1em
- font-weight: bold
- border-radius: 0.15rem
- transition: background-color 0.2s ease-in-out
- hover: background-color #94795d

### About intro `.content blockquote`
- background-color: white (after ::after pseudo)
- text-align: center
- padding: var(--aon-gap)
- max-width: 60rem
- margin: 0 auto 2rem
- position: relative
- box-shadow: rgba(0,0,0,0.5) 0 0 1rem 0 (via ::before pseudo, bottom shadow)

### Blockquote `p`
- text-align: center
- font-size: 20px (1.25rem)
- color: #4a453f

## Text Content (verbatim)
**h1:** Patient First, Always

**Button:** OVERVIEW VIDEO

**About intro:** Zangmeister Cancer Center is a community-based medical oncology, gynecologic oncology and hematology practice providing treatment for patients diagnosed with all types of cancer and blood disorders. Through compassionate care that centers around the patient, we strive to provide the best possible experience to patients and their families throughout the healthcare journey.

## Assets
- Hero image: `/images/hero.jpg`
- object-position: 50% 42%

## Responsive Behavior
- Desktop: hero is 100vw tall capped at 100vh
- Mobile: same behavior — full viewport height hero

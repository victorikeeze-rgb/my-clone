# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static (hover states on links)

## DOM Structure
```
<footer>
  <div class="aon-container">
    <div class="site-map">
      <ul class="footer-main">
        <li>OUR SERVICES column with sub-links</li>
        <li>FOR PATIENTS column with sub-links</li>
        <li>ABOUT US column with sub-links</li>
      </ul>
      <div class="other-footer contact-points">
        <a class="facebook" href="#">Facebook icon + Join the conversation</a>
        <img class="practice-logo" src="/images/ZCC_logo_white.svg" />
        <img class="aon-logo" src="/images/AON_Logo_White.svg" />
      </div>
    </div>
    <div class="legal">
      <ul class="footer-legal">
        <li><a>Privacy Policy</a></li>
        <li><a>Terms and Conditions</a></li>
        <li><a>Notice of Privacy Practices</a></li>
      </ul>
      <span>Copyright © | Zangmeister Cancer Center</span>
    </div>
  </div>
</footer>
```

## Computed Styles

### `footer`
- background-color: #635a4f (--footer-color)
- color: white
- padding: 2rem 0

### `footer a`
- color: white
- font-weight: normal
- border-bottom: 1.5pt solid transparent
- transition: border-color 0.3s ease-in-out

### `footer a:hover`
- border-color: #f38f2b (--tertiary-color)

### `footer .site-map`
- display: flex
- flex-wrap: wrap
- justify-content: center

### `footer .site-map > *`
- margin-right: var(--aon-gap)

### `footer .site-map > :not(:last-child)`
- flex-grow: 1

### `.footer-main`
- list-style: none
- padding: 0; margin: 0
- display: flex (wrapped in site-map)

### `.footer-main > li`
- display: flex
- flex-direction: column
- align-items: flex-start
- margin-bottom: 2rem

### `.footer-main > li > span` (heading: OUR SERVICES, FOR PATIENTS, ABOUT US)
- text-transform: uppercase
- font-size: 1.3rem
- font-weight: bold
- display: block
- margin-right: auto
- margin-bottom: 0.25rem
- color: white

### `.footer-main > li > ul`
- list-style: none
- padding: 0; margin: 0

### `.footer-main ul > li > a`
- padding-block: 0.125rem
- display: inline-block

### `.contact-points`
- display: flex
- flex-direction: column
- align-items: center

### `.facebook` (link)
- font-weight: bold
- font-size: 1.2rem
- display: flex
- align-items: center
- margin-bottom: 1rem
- padding-bottom: 0.5rem

### `.facebook img`
- width: 2rem
- height: auto
- margin-right: 1rem

### `.practice-logo`
- width: 100%
- max-height: 5rem
- max-width: 16rem
- height: auto

### `.aon-logo`
- width: 100%
- max-height: 5rem
- margin-top: 1rem

### `.legal`
- display: flex
- flex-wrap: wrap
- justify-content: center
- border-top: 1pt solid white (via ::before pseudo)
- margin-top: 1rem
- padding-top: 1rem

### `.footer-legal`
- list-style: none
- margin: 0; padding: 0
- display: flex
- flex-wrap: wrap

### `.footer-legal > *`
- margin-right: 1rem

## Content

### OUR SERVICES links
Medical Oncology, Hematology, Gynecologic Oncology, BiTE Therapy, Specialty Infusion Services, Diagnostic Imaging, Radioligand Therapy, Molecular-Targeted Therapy, Pathology, Pharmacy, Care Coordination & Navigation, Clinical Trials, Financial Support

### FOR PATIENTS links
New Patient Information, Patient Portal, Make a Payment, Patient Stories, Blogs, CanCare

### ABOUT US links
About Us, Your Team, News, Careers

### Contact/Social
- Facebook: "Join the conversation" with facebook-round.svg icon
- ZCC Logo: /images/ZCC_logo_white.svg
- AON Logo: /images/AON_Logo_White.svg

### Legal bar
Privacy Policy | Terms and Conditions | Notice of Privacy Practices | Copyright © | Zangmeister Cancer Center

## Assets
- `/images/facebook-round.svg`
- `/images/ZCC_logo_white.svg`
- `/images/AON_Logo_White.svg`

## Responsive Behavior
- Desktop: 3 columns + contact column, flex-wrap
- Mobile: columns stack vertically

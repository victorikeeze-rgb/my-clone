# Page Topology — Zangmeister Cancer Center

## Sections (top to bottom)

1. **Header** (`<header class="with-background">`) — FIXED overlay, z-index 10
   - Transparent when at top of page (no class), dark green (#2c5234) when scrolled (class: `with-background`)
   - Contains: logo (left), search (top-right), nav (bottom-right)
   - Desktop: grid layout "logo search / logo menu"
   - Mobile (<55rem): flex row with hamburger menu

2. **Hero** (`.post.home-main .header-banner`) — full-viewport flow content
   - Background: black with image at 50% opacity
   - Image: hero.jpg covering full area
   - Content (bottom-right aligned, then reversed to top-left): h1 "Patient First, Always", "OVERVIEW VIDEO" button
   - Height: 100vw up to 100vh

3. **About Intro** (`.post.home-main .content`) — white background, centered
   - Single blockquote with centered paragraph text

4. **Our Services** (`#services .home-services`) — horizontal scroll slider
   - Section title "OUR SERVICES" (green, uppercase)
   - Scroll-snap horizontal cards, 20rem wide each
   - Left/right arrow navigation

5. **Your Team** (`#team .home-team`) — white background, grid
   - Section title "YOUR TEAM"
   - Circular headshot photos, name, specialty, "Read bio >" link
   - 2-column grid (inline-block at 40% max-width)

6. **Locations** (`#locations .home-locations`) — two-column
   - Section title "LOCATIONS"
   - Left: location cards (Main + Grove City) with address, hours, phone, directions
   - Right: embedded Google Map iframe

7. **Latest Updates** (`#latest-updates`) — horizontal blog slider
   - Section title "LATEST UPDATES"
   - Scrolling blog post cards with grid layout (date, type, title, thumbnail, description, link)
   - Dot navigation

8. **Footer** (`<footer>`) — dark brown (#635a4f), full width
   - 3 link columns: OUR SERVICES, FOR PATIENTS, ABOUT US
   - Right: Facebook "Join the conversation", ZCC logo, AON logo
   - Legal bar: Privacy Policy | Terms | Notice | Copyright

## Layout
- Max width: 160rem (effectively full-width at any screen)
- Content container: max-width 80rem, centered with padding var(--aon-gap)
- Breakpoint: 55rem (880px) mobile vs desktop
- Header: fixed, centered via left:50% + translateX(-50%)
- No horizontal scroll at page level; sections stack vertically

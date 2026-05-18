# Behaviors — Zangmeister Cancer Center

## Header Scroll Behavior
- **Trigger:** Intersection observer on `#header-observer` element (5rem tall, at top of page)
- **State A (top of page):** `header` — no background (transparent)
- **State B (scrolled past hero):** `header.with-background` — background-color: #2c5234
- **Transition:** background-color 0.3s ease-in-out (CSS transition on header)
- **Implementation:** IntersectionObserver on a sentinel div at page top; add/remove `with-background` class

## Services Slider
- **Interaction model:** scroll-driven (horizontal scroll-snap)
- Left/right arrow buttons for JS-driven scroll assist
- `scroll-snap-type: x mandatory` on container
- `scroll-snap-align: center` on each card
- Cards are 20rem wide, hidden scrollbar
- Arrow buttons are sticky-positioned within the flex container

## Team Section
- **Interaction model:** static (no interactive states beyond hover)
- Circular images via `border-radius: 50%`
- "Read bio >" link on hover: color changes (secondary-compliant → secondary-contrast)

## Latest Updates Slider
- **Interaction model:** horizontal scroll-snap
- Dot indicators below slider
- Each post card uses CSS grid layout

## Navigation Dropdowns
- **Interaction model:** hover-driven (onmouseover/onmouseout)
- Desktop: dropdown appears below nav items on hover
- Mobile: hamburger menu toggles nav open/close

## Overview Video Button
- Clicking opens YouTube video (ID: vxjYAOjKBLY) — for clone, show modal or link

## Responsive Behavior
- **Breakpoint:** 55rem (880px)
- Desktop: header grid layout, full nav visible, service cards in row
- Mobile: hamburger menu, search icon, stacked sections

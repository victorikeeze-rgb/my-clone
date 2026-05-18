# LocationsSection Specification

## Overview
- **Target file:** `src/components/LocationsSection.tsx`
- **Interaction model:** static (Google Map placeholder — use iframe or static map)

## DOM Structure
```
<section id="locations" class="home-locations">
  <div class="aon-container">
    <h2 class="section-title">Locations</h2>
  </div>
  <div class="location-map-container">
    <div class="location-cards">
      <div class="location-card">Main Location data</div>
      <div class="location-card">Grove City data</div>
    </div>
    <div class="map">
      <!-- Google Map iframe -->
    </div>
  </div>
</section>
```

## Computed Styles

### `section.home-locations`
- padding-top: 2rem

### `.location-map-container` (the wrapper below the title)
- display: grid or flex
- Two columns: location list (~280px) + map (rest of width)
- The location cards are on the LEFT, map on the RIGHT

### `.location-cards`
- margin-top: 2rem
- background-color: #2c5234 (primary-compliant — dark green)
- color: white

### `.location-card`
- padding: 1rem
- border-bottom: 1px solid white

### `.location-card .lines`
- display: flex
- flex-direction: column
- gap: 0.5rem

### `.location-card .lines > p`
- margin: 0

### Location card headings (location name)
- font-size: 1.5rem
- font-weight: bold
- color: white

### Location card links (phone, directions)
- color: white (inside dark green card)
- font-weight: bold

## Location Data

### Main Location
- **Name:** Main Location
- **Address:** 3100 Plaza Properties Blvd\nColumbus, OH 43219
- **Hours:** Mon-Thu 7:00am-4:00pm\nFri 7:00am-3:30pm
- **Phone:** (614) 383-6000
- **Directions:** "Driving Directions >"

### Grove City
- **Name:** Grove City
- **Address:** 5500 North Meadows Dr, Suite 220\nGrove City, OH 43123
- **Hours:** Mon-Thu 7:00am-4:00pm\nFri 7:00am-12:00pm
- **Phone:** (614) 347-4939
- **Directions:** "Driving Directions >"

## Map
- Use a Google Maps embed iframe centered on Columbus, OH area
- Embed URL (static): `https://maps.google.com/maps?q=3100+Plaza+Properties+Blvd+Columbus+OH+43219&t=&z=11&ie=UTF8&iwloc=&output=embed`
- Map fills the right column
- Height: ~550px

## Responsive Behavior
- Desktop: two-column (left: location cards ~280px, right: map fills rest)
- Mobile: stack (location cards above, map below or hide map)

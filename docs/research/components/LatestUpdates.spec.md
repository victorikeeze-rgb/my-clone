# LatestUpdates Specification

## Overview
- **Target file:** `src/components/LatestUpdates.tsx`
- **Interaction model:** horizontal scroll-snap slider

## DOM Structure
```
<section id="latest-updates">
  <div class="aon-container home-featured">
    <section class="posts">
      <h2>Latest Updates</h2>
      <div class="aon-slides">
        <article class="post aon-slide">
          <div class="title"><h3><a href="...">Title</a></h3></div>
          <div class="date">Apr 6th, 2026</div>
          <div class="type">Blog</div>
          <div class="description">Excerpt text...</div>
          <img class="thumbnail" src="/images/blog-xxx.jpg" />
          <div class="link"><a href="...">Read Article ></a></div>
        </article>
      </div>
    </section>
  </div>
</section>
```

## Computed Styles

### `.home-featured .aon-container`
- display: grid
- gap: 2rem
- grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr))

### `.home-featured .posts`
- display: flex
- flex-direction: column
- align-items: flex-start

### `.home-featured h2` (section title "LATEST UPDATES")
- color: #2c5234
- text-transform: uppercase
- font-size: 2rem
- font-weight: bold
- margin-bottom: 1rem

### `.aon-slides`
- overflow-x: auto
- width: 100%
- display: flex
- scroll-snap-type: x
- max-width: 30rem

### `.aon-slide` (each post card)
- width: 100%
- box-sizing: border-box
- flex-shrink: 0
- scroll-snap-align: start

### `.home-featured .post`
- background-color: #f4f4f4 (--light-gray)
- padding: 1rem
- display: grid
- margin-bottom: 1rem
- border-radius: 0.15rem
- grid-template:
  "date date type"
  "title title title"
  "thumbnail description description"
  "thumbnail link link"
  / max-content 1fr max-content

### `.home-featured .post .date`
- grid-area: date
- font-size: 0.85rem
- opacity: 0.8
- line-height: 1rem

### `.home-featured .post .type`
- grid-area: type
- font-weight: bold
- line-height: 1rem
- color: #4a453f

### `.post h3` (title)
- grid-area: title
- font-size: 1.1rem
- color: #2c5234
- margin: 0.5rem 0

### `.post img.thumbnail`
- grid-area: thumbnail
- width: 5rem
- height: 5rem
- object-fit: cover
- border-radius: 0.15rem
- margin-right: 1rem
- align-self: start

### `.post .description`
- grid-area: description
- font-size: 0.9rem
- color: #4a453f

### `.post .link`
- grid-area: link
- padding-top: 0.5rem

### `.post .link a`
- color: #a3631f
- font-size: 0.9rem

## Blog Posts Data (5 posts)
1. **Esophageal Cancer Awareness Month: Recognizing the Signs and Advancing Treatment**
   - Date: Apr 6th, 2026 | Type: Blog
   - Desc: "April is Esophageal Cancer Awareness Month. Learn about the early warning signs, risk factors, and the latest advancements in treatment."
   - img: `/images/blog-esophageal.jpg` | Link: "Read Article >"

2. **Choosing Your First Oncology Practice: Academic, Hospital, or Community**
   - Date: Mar 20th, 2026 | Type: Blog
   - Desc: "Compare academic, hospital-employed, and community oncology practice settings. Learn the pros and cons of each to find the best fit."
   - img: `/images/blog-oncology-practice.jpg` | Link: "Read Article >"

3. **Improving Cancer Outcomes Through Better Nutrition**
   - Date: Mar 10th, 2026 | Type: Blog
   - Desc: "Study after study confirms that healthy dietary patterns are associated with improved survival rates and better quality of life for some cancer patients."
   - img: `/images/blog-nutrition.jpg` | Link: "Read Article >"

4. **Colorectal Cancer Screening: Awkward Conversations That Save Lives**
   - Date: Mar 5th, 2026 | Type: Blog
   - Desc: "March is Colorectal Cancer Awareness Month, a time to honor those who have faced or are facing this devastating disease and to spread the word about the power of prevention."
   - img: `/images/blog-colorectal.jpg` | Link: "Read Article >"

5. **Celebrating The History of Female Physicians**
   - Date: Feb 17th, 2026 | Type: Blog
   - Desc: "A look back at the pioneering women who broke barriers in medicine and paved the way for future generations."
   - img: `/images/blog-women-physicians.jpg` | Link: "Read Article >"

## Responsive Behavior
- Posts scroll horizontally within max-width 30rem container
- Grid section may show posts + reviews side by side on desktop

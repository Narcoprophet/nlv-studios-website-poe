# Karabo Studios Website Development Log

---

## Introduction

This repository contains the complete development log and documentation for the Karabo Studios website project. The project was created as part of a Proof of Evidence (POE) submission and demonstrates advanced web development techniques including responsive design, JavaScript interactivity, SEO optimization, accessibility compliance, and professional academic documentation. The repository includes all source files (HTML, CSS, JavaScript), assets (images, screenshots, and diagrams), and supporting documentation (README, references, and research notes).

The website is structured around a multi‑page design that reflects a professional studio brand identity. Each page has been carefully developed to meet rubric requirements and to showcase technical mastery in HTML5, CSS3, and JavaScript. The documentation is divided into three parts, corresponding to feedback corrections and improvements across the development phases.

---

## How to Use This Project

### 1. Getting Started
- Clone or download this repository from GitHub.
- Open the project folder.
- Launch `index.html` in your browser to start exploring.

### 2. Navigation Guide
The site contains seven main pages:
- **Homepage (`index.html`)** — Hero section, featured products, and brand introduction.
- **Shop Now (`shop now.html`)** — Full product listings with product cards and lightbox gallery.
- **About (`about.html`)** — Brand story, mission statement, and team information.
- **Enquiry (`enquiry.html`)** — Form for product and sponsorship enquiries with JavaScript validation.
- **Contact (`contact.html`)** — General contact form and embedded interactive Google Map.
- **FAQ (`accordion.html`)** — Frequently asked questions implemented with accordion functionality.
- **Sign Up / Sign In (`register.html`)** — User registration and login form with tabbed interface and validation.

### 3. Features
- Responsive design with media queries for mobile, tablet, and desktop.
- Navigation bar consistent across all pages.
- Product cards styled with hover effects and pseudo‑classes.
- Forms styled with `:focus` states and validated with JavaScript.
- Accordion FAQ for user guidance.
- Gallery lightbox for product images.
- Interactive Google Map embed.
- Search feature for product filtering.
- User registration/login functionality.
- Dynamic content (clock widget, product filtering).
- SEO meta tags and descriptive titles.
- Accessibility features including alt text, semantic HTML, and contrast ratios.

### 4. Running the Site
- No installation required — open the `.html` files directly in a browser.
- For live testing, visit the deployed site:  
  **Live Demo:** []

### 5. Repository & Live Server
- **GitHub Repository:** [Visit GitHub](https://github.com/Narcoprophet/nlv-studios-website-poe.git)  

### 6. Documentation
- Development log is tracked in this README under Part 1, Part 2, and Part 3.
- Changelog includes screenshots demonstrating responsiveness and interactivity.
- References are listed in Harvard style at the end of this document.

---

## Part 1 — Feedback Corrections and Completed Improvements

The first development phase was primarily about establishing a professional foundation and correcting structural issues identified in the initial feedback. Each correction was carefully documented to demonstrate responsiveness to critique and alignment with rubric standards.

- **Inline CSS removed**  
  Internal stylesheets were used in multiple pages (`about.html`, `contact.html`, `shop now.html`). This created inconsistency and made maintenance difficult. Correction: All styling was consolidated into external `CSS/style.css` and `CSS/register.css`. This ensures modularity, easier updates, and professional practice in separating concerns.

- **Navigation consistency**  
  The navigation bar was previously inconsistent, with missing links and different structures across pages. Correction: A standardized `<nav>` element was implemented across all seven pages, ensuring uniformity. Each link was tested to confirm correct routing. This correction improves usability and accessibility.

- **Semantic HTML usage**  
  Semantic tags were not consistently applied. Correction: Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) were applied across all pages. This improves accessibility, SEO, and readability of the codebase.

- **Documentation clarity**  
  The initial README lacked detail and did not explain project purpose or corrections. Correction: README.md was expanded into a comprehensive guide, including project overview, usage instructions, navigation guide, features, changelog, and references. This ensures clarity for both academic evaluators and future developers.

- **Folder structure**  
  The repository previously contained ambiguous file placement and duplicates. Correction: Files were reorganized into clear subfolders: `ASSETS/` for images and screenshots, `CSS/` for stylesheets, `JS/` for scripts, and `research/` for planning documents. This correction demonstrates professional project organization.

- **Visual planning**  
  Sitemap and planning artifacts were missing. Correction: A sitemap diagram was created to illustrate site navigation and structure. Wireframes were also drafted to guide responsive design. These artifacts were included in the proposal and referenced in documentation.

- **Referencing**  
  External resources were not properly cited in the initial submission. Correction: Harvard‑style references were added in `references.md` and expanded in README. This demonstrates academic integrity and proper attribution of sources.

---

## Part 2 — Feedback Corrections and Completed Improvements

The second development phase focused on styling, responsiveness, and user experience. Feedback was addressed comprehensively, and additional improvements were made to elevate the project’s professionalism.

- **External CSS consistency**  
  Internal stylesheets were still present in some pages. Correction: All styles were moved into external `CSS/style.css`. Each page now links to the same stylesheet, ensuring consistency and easier maintenance. A separate `CSS/register.css` was created for modularity in authentication styling.

- **Screenshots in changelog**  
  The changelog did not include screenshots to demonstrate responsiveness. Correction: Screenshots showing mobile, tablet, and desktop layouts were added to `ASSETS/screenshots/` and embedded in README. This provides visual evidence of responsive design.

### Additional Improvements
- **Styling & Branding**  
  A consistent colour scheme was applied, using dark gradients with purple highlights to reflect brand identity. Google Fonts (`Poppins` for headings, `Roboto` for body text) were integrated. Hover effects, button states, and subtle animations were added to enhance interactivity.

- **Responsive Design**  
  Media queries were implemented for multiple breakpoints (phones, tablets, laptops, TVs). A hamburger menu was added for mobile navigation. Layouts were tested across devices to ensure consistency. This correction demonstrates mastery of responsive design principles.

- **User Experience Enhancements**  
  Spacing, padding, and alignment were improved for readability. Alt text was added to all images for accessibility. Contrast ratios were increased to meet WCAG standards. Smooth hover transitions were applied to product cards and navigation links. These corrections improve usability and accessibility.

- **Documentation Updates**  
  README.md was expanded with Part 2 changelog, references, and screenshots. The sitemap diagram was updated to reflect responsive navigation. References for CSS responsiveness and accessibility were added. Screenshots were embedded to demonstrate responsiveness. This correction ensures comprehensive documentation.

---

## Part 3 — POE Checklist and Final Submission Features

The final development phase focused on interactivity, advanced CSS techniques, JavaScript functionality, SEO, and accessibility. All items from the POE checklist were implemented and documented.

### 3.1 JavaScript Interactivity and Dynamic Content
- Hamburger menu toggle for mobile navigation.
- Accordion FAQ in `accordion.html`.
- Gallery lightbox in `shop now.html`.
- Google Map integration in `contact.html`.
- Search feature for product filtering.
- Form validation with real‑time feedback for `enquiry.html` and `contact.html`.
- User registration and login functionality in `register.html`.
- Dynamic product card structure for future JSON/JavaScript content.
- Clock widget in footer for real‑time dynamic content.

### 3.2 SEO and Accessibility
- Unique SEO `<title>` tags on each page.
- Meta tags for description, keywords, Open Graph, and Twitter Cards.
- Proper image naming and `alt` text applied to all images.
- Accessible colour contrast and font readability ensured.

### 3.3 Final POE Checklist Compliance
- Implemented and documented changes from Part 2 feedback.
- JavaScript interactive elements (accordions, lightbox, hamburger menu).
- Interactive Google Map.
- Gallery lightbox.
- Dynamic (real‑time) content.
- Search feature.
- SEO title tags.
- SEO meta tags (keywords, description, Open Graph, Twitter).
- Images — proper naming and alt text.
- Enquiry form with JavaScript validation and feedback.
- Contact form with JavaScript validation and feedback.
- Sign up / Sign In functionality.
- GitHub commit history.
- README completeness.
- Changelog record.
- Updated references.
- GitHub repository link.
- Live server link.

---

## Screenshots

Screenshots are stored in `ASSETS/screenshots/` and referenced in README:

- Mobile hamburger menu toggle  
- Shop page image gallery lightbox  
- Embedded Google Map (Contact page)  
- Responsive layouts (mobile, tablet, desktop)  

---

## Browser Support

The site has been tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

The site is fully responsive across devices: mobile, tablet, laptop, and desktop.

---

## References (Harvard Style)

- Google Developers. (2025). *Google Maps Embed API*. Available at: https://developers.google.com/maps/documentation/embed [Accessed 19 Nov 2025].  
- W3Schools. (2025). *JavaScript Form Validation*. Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 19 Nov 2025].  
- Mozilla Developer Network (MDN). (2025). *JavaScript DOM Manipulation*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model [Accessed 19 Nov 2025].  
- Google Fonts. (2025). *Poppins and Roboto*. Available at: https://fonts.google.com [Accessed 19 Nov 2025].  
- W3C. (2025). *Web Content Accessibility Guidelines (WCAG) 2.1*. Available at: https://www.w3.org/TR/WCAG21/ [Accessed 19 Nov 2025].  
- Netlify. (2025). *Deploying Websites with Netlify*. Available at: https://www.netlify.com/docs/ [Accessed 19 Nov 2025]. 
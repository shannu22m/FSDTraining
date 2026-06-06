# Online Course Registration Portal

A responsive, high-performance web portal built for **Apex Tech Institute** where students can browse available courses, check curriculum details, and register online.

## Preview Mockup
![Apex Tech Portal Preview](assets/homepage_preview.png)

## Core Files
- [index.html](index.html) - Main home page with navbar, hero carousel, 6 course summaries, and student testimonials.
- [courses.html](courses.html) - Dedicated search-filtered courses archive.
- [register.html](register.html) - Interactive online enrollment form.
- [about.html](about.html) - Mission, vision, and faculty directory cards.
- [contact.html](contact.html) - Address info, interactive contact form, and Google Maps location.
- [custom.css](css/custom.css) - Customized clean design system and hover interactions.
- [main.js](js/main.js) - JavaScript logic for pre-fill selection, dynamic modal injection, and success triggers.

## Functional Requirements Fulfilled

### 1. Home Page (`index.html`)
- **Navbar**: Features logo branding, responsive links, and a Login button triggering a modal.
- **Hero Carousel**: Automatic transitioning slides with institute tagline, introduction, and call-to-actions.
- **Featured Grid**: 6 Bootstrap cards showcasing courses with custom details modal connections.
- **Testimonials**: Styled review cards representing student feedback.
- **Footer**: Social media anchors and office navigation guides.

### 2. Courses Page (`courses.html`)
- Search bar filtering course categories in real-time.
- Card grid rendering durations, price points, and details.

### 3. Registration Page (`register.html`)
- Enrollment form with built-in validation.
- Fields: Name, Email, Phone, Gender, Course Selection, Qualification, Address, Resume Upload, Terms checkbox.
- Success confirmation banner upon form completion.

### 4. About Us Page (`about.html`)
- Vision, Mission, and History breakdown.
- Faculty profiles displayed inside cards.

### 5. Contact Us Page (`contact.html`)
- Validation-equipped feedback form.
- Real Google Maps location iframe.

## Technologies Used
- HTML5
- Bootstrap 5.3 (via CDN)
- Bootstrap Icons (via CDN)
- Vanilla JavaScript
- Vanilla CSS

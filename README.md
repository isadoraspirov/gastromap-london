# Isadora Nascimento 

## Explore the Gastronomy in London

Explore the Gastronomy in London is a concept website project designed to highlight key front-end development skills such as HTML, CSS, and JavaScript integration. The website aims to provide users with an interactive and informative platform to discover the best restaurants and attractions across London.

It focuses on usability, responsive design, and dynamic content generation, allowing users to explore categories, view locations on an interactive map, and connect through a contact form.
The project is educational and portfolio-based, not linked to a real business or tourism organization.

The purpose of this project is to demonstrate how a simple city guide website can deliver dynamic functionality using JavaScript and APIs. The site connects users with local food and culture through clean UI design and interactive map integration. It showcases web development skills such as DOM manipulation, data rendering, and responsive layouts.

**Project Focus**

- Creating a responsive and accessible design.
- Implementing interactive JavaScript features like filtering, searching, and Google Maps API integration.
- Practicing data management with JavaScript arrays or JSON.
- Providing an engaging user experience with a clear layout and smooth navigation.

## Business Goals

- Present London as a vibrant culinary destination.
- Provide useful restaurant and attraction recommendations.
- Demonstrate use of interactive web components and APIs.

## User Goals 

- Easily find popular restaurants and attractions in London.
- View restaurant locations on an interactive Google Map.
- Contact the site to suggest new locations or report outdated information.

## Strategy 

The strategy focuses on creating a visually engaging and intuitive website that allows users to navigate and interact with restaurant data efficiently. The design combines simplicity and functionality, ensuring smooth transitions between pages and mobile responsiveness. JavaScript features will enhance interactivity and create a real-world application feel.

## Scope

**Must have**

- Homepage with a hero section and “Explore Now” button.
- Restaurant/Attraction listing page with filter and search functionality.
- Interactive Google Map integration using API.
- Contact page with JavaScript form validation.
- Responsive design (mobile-first approach).

**Nice to Have**

- Save favourite restaurants using localStorage.
- Animated transitions when new cards appear.
- Dark/light mode toggle.
- Weather widget using OpenWeather API.

## Structure

The website structure guides users from curiosity to exploration:

### 1. Homepage:

- Hero image of London with a call to action (“Discover the best spots to eat and visit in London”).
- Overview of the project and categories (Food, Coffee, Attractions).
- “Explore Now” button linking to the restaurants page.

### 2. Restaurants page:

- Filter bar.
- Search bar.
- Dynamically generated restaurant cards with images, names, ratings, and short descriptions.
- Google Map displaying markers for each restaurant.

### 3. Contact Page:

- Simple form for user messages and suggestions.
- JavaScript form validation with feedback alerts.
- Optional embedded map or city photo background.

### 4. Footer:

- Copyright, social links, and contact details.

## Information Architecture

**Navigation:**

- Sticky top navigation bar with:

Home | Restaurants | Attractions | Contact

**Page Hierarchy:**

- Homepage: Introduction, categories, CTA.
- Restaurants: Interactive list + Google Map.
- Contact: Form.

**Interaction:**

- Filters and search powered by JavaScript.
- Map updates dynamically when users click “View on Map.”
- Smooth scrolling and hover effects for better engagement.

## User Stories

### User Story 1 — The Curious Tourist

**Story:**

As a visitor exploring London for the first time, I want to see a list of restaurants and attractions with images and short descriptions, so that I can choose places that interest me easily.

**Acceptance Criteria:**

- Homepage introduces London and links to the restaurant page via “Explore Now.”
- Restaurant cards show name, image, short description, and “View on Map.”
- Cards load dynamically from JavaScript data.
- Layout is responsive across devices.

### User Story 2 — The Food Lover

**Story:**

As a food enthusiast, I want to filter restaurants by category (like Italian, Café, Pub, Desserts) and see their locations on a map, so I can quickly find what I’m craving nearby.

**Acceptance Criteria:**

- Filter bar updates visible restaurant cards dynamically.
- Search bar filters by name or keyword.
- Google Map updates markers according to filters.
- “View on Map” centers the map on the selected restaurant.

### User Story 3 — The Local Sharer

**Story:**

As a London resident, I want to send suggestions or corrections through a contact form, so I can help improve the guide for other users.

**Acceptance Criteria:**

- Contact form includes name, email, and message fields.
- JavaScript validation checks that all fields are filled and email is valid.
- Success message appears when form is submitted correctly.
- Optional embedded map or London image displayed on the contact page.
/* jshint esversion: 11 */
/* global google */

// --- FILTER BUTTONS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const restaurantCards = document.querySelectorAll('.restaurant-card');
const searchInput = document.getElementById('searchInput');

// Loop through each filter button 
filterButtons.forEach(button => {

 /*  Handles category filtering when a filter button is clicked.
 * This function =
 * - Updates the active state of filter buttons
 * - Reads the selected category from data attributes
 * - Shows or hides restaurant cards based on the selected category
 * - Clears the search input when a filter is applied */

  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter.toLowerCase();

    restaurantCards.forEach(card => {
      const category = card.dataset.category.toLowerCase();
      const match = filter === 'all' || category === filter;
      card.style.display = match ? 'block' : 'none';
    });

    searchInput.value = ''; // clear search when changing filters
  });
});

// --- SEARCH ---

/* Filters restaurant cards based on user search input.
 * This function runs every time the user types in the search field.
 * It compares the input value with restaurant names and updates
 * the displayed cards accordingly */
searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase();

  // Loop through restaurant cards 
  restaurantCards.forEach(card => {
    // Get restaurant name from <h3>
    const name = card.querySelector('h3').textContent.toLowerCase();
    const visible = name.includes(query);
    card.style.display = visible ? 'block' : 'none';
  });

  filterButtons.forEach(btn => btn.classList.remove('active')); // clear filter highlight
});

// --- VIEW ON MAP ---

const IMAGE_BASE_PATH = "assets/images/";

document.querySelectorAll('.view-map-btn').forEach(btn => {
 
/* Centers the Google Map on the selected restaurant.
 * This function =
 * - Scrolls smoothly to the map section
 * - Centers and zooms the map on the selected location
 * - Resets all markers to default state
 * - Highlights the selected marker and displays an info window */
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;
    const restaurant = window.restaurants[index];
    const marker = window.mapMarkers[index];

    if (!window.map || !restaurant || !marker) {
      console.warn("Map or marker not ready yet");
      return;
    }

    // Scroll to map section
    const mapSection = document.getElementById("map-section");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }

    // Center map
    window.map.setCenter(restaurant.position);
    window.map.setZoom(16);

    // Reset all markers first
    window.mapMarkers.forEach(m => {
      if (m) {
        m.setAnimation(null);
      m.setIcon(null); // reset to default icon
      }
    });

    // Highlight selected marker
  
    marker.setIcon("https://maps.google.com/mapfiles/ms/icons/green-dot.png");
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 1800);

    // Info window with image
    new google.maps.InfoWindow({
      content: `
        <div style="max-width:200px">
          <img src="${IMAGE_BASE_PATH}${restaurant.image}" style="width:100%; border-radius:6px; margin-bottom:6px;">
          <strong>${restaurant.name}</strong><br>
          <small>${restaurant.category}</small>
        </div>
      `
    }).open(window.map, marker);
  });
});

// Restaurant Suggestion Form

// Load existing suggestions from localStorage

let suggestedRestaurants =
  JSON.parse(localStorage.getItem("suggestedRestaurants")) || [];

const form = document.getElementById("restaurantForm");

if (form) {

  /* Handles restaurant suggestion form submission.
 * This function =
 * - Prevents the default form submission behavior
 * - Validates user input
 * - Stores the submitted data in localStorage
 * - Redirects the user to a confirmation page */

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("resName").value.trim();
    const rating = Number(document.getElementById("resRating").value);
    const category = document.getElementById("resCategory").value;
    const mapped = document.getElementById("resMap").value;

    // Validation
    if (name.length < 3) {
      alert("Name is too short!");
      return;
    }

    if (rating < 0 || rating > 5) {
      alert("Rating must be between 0 and 5.");
      return;
    }

    const newRestaurant = {
      name,
      rating,
      category,
      mapped
    };

    suggestedRestaurants.push(newRestaurant);

    localStorage.setItem(
      "suggestedRestaurants",
      JSON.stringify(suggestedRestaurants)
    );

    // Redirect to confirmation page
    window.location.href = "submit.html";
  });
}

/* Executes once the DOM content has fully loaded.
 * This function =
 * - Enables smooth scrolling for navigation links
 * - Collapses the mobile navigation menu after selection
 * - Updates the footer year dynamically */

document.addEventListener("DOMContentLoaded", function () {
  // --- NAVBAR SMOOTH SCROLL + COLLAPSE ---
  document
    .querySelectorAll(".navbar-collapse .nav-link")
    .forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = e.target.getAttribute("href");
        const section = document.querySelector(targetId);

        if (section) {
          e.preventDefault();

          const navbarHeight =
            document.querySelector(".navbar-toggler")?.offsetHeight || 0;

          window.scroll({
            top: section.offsetTop - navbarHeight,
            behavior: "smooth",
          });

          document
            .querySelector(".navbar-collapse")
            .classList.remove("show");
        }
      });
    });

  // --- YEAR ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

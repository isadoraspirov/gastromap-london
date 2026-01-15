// --- FILTER BUTTONS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const restaurantCards = document.querySelectorAll('.restaurant-card');
const searchInput = document.getElementById('searchInput');

filterButtons.forEach(button => {
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
searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase();

  restaurantCards.forEach(card => {
    const name = card.querySelector('h5').textContent.toLowerCase();
    const visible = name.includes(query);
    card.style.display = visible ? 'block' : 'none';
  });

  filterButtons.forEach(btn => btn.classList.remove('active')); // clear filter highlight
});

// --- VIEW ON MAP ---
document.querySelectorAll('.view-map-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;
    const restaurant = window.restaurants[index];
    const marker = window.mapMarkers[index];

    // Center map
    window.map.setCenter(restaurant.position);
    window.map.setZoom(16);

    // Bounce animation
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 1800);

    // Info window with image
    new google.maps.InfoWindow({
      content: `
        <div style="max-width:200px">
          <img src="${restaurant.image}" style="width:100%; border-radius:6px; margin-bottom:6px;">
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

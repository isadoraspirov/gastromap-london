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


let suggestedRestaurants = []; // array to store submissions

document.getElementById("restaurantForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Variables collecting form values

  const name = document.getElementById("resName").value;           // string
  const rating = Number(document.getElementById("resRating").value); // number
  const category = document.getElementById("resCategory").value;   // string
  const onMapValue = document.getElementById("resMap").value;      // "yes" or "no"

  // Convert string to final value stored in object

  const onMap = onMapValue === "yes" ? "Yes" : "No";

  // Validation using if/else

  if (name.length < 3) {
    alert("Name is too short!");
    return;
  }

  if (rating < 0 || rating > 5) {
    alert("Rating must be between 0 and 5.");
    return;
  }

  // Create restaurant object

  const newRestaurant = {
    name: name,
    rating: rating,
    category: category,
    mapped: onMap
  };

  suggestedRestaurants.push(newRestaurant); // Save to array
  displaySuggestions(); // update UI
  this.reset(); // clear form
});

// Function to render list

function displaySuggestions() {
  const listContainer = document.getElementById("suggestList");
  listContainer.innerHTML = "<h4>Submitted Suggestions:</h4>";

  // Loop through submitted restaurants
  
  for (let i = 0; i < suggestedRestaurants.length; i++) {
    const item = suggestedRestaurants[i];
    listContainer.innerHTML += `
      <div class="card p-3 my-2 shadow-sm">
        <strong>${item.name}</strong> <br>
        Category: ${item.category} <br>
        Rating: ⭐ ${item.rating} <br>
        On Map: ${item.mapped}
      </div>`;
  }
}

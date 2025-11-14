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

  // Search 

  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();

    restaurantCards.forEach(card => {
      const name = card.querySelector('h5').textContent.toLowerCase();
      const visible = name.includes(query);
      card.style.display = visible ? 'block' : 'none';
    });

    filterButtons.forEach(btn => btn.classList.remove('active')); // clear filter highlight
  });

  // View on Map

  document.querySelectorAll('.view-map-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const index = btn.dataset.index;
    const restaurant = window.restaurants[index];
    const marker = window.mapMarkers[index];

    // Center map
    window.map.setCenter(restaurant.position);
    window.map.setZoom(16);

    // Open info window
    new google.maps.InfoWindow({
      content: `<strong>${restaurant.name}</strong>`
    }).open(window.map, marker);
  });
});

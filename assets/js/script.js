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
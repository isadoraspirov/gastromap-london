window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.511, lng: -0.13 },
    zoom: 14,
  });

  const restaurants = [
    {
      name: "Hélène Darroze at The Connaught",
      category: "Restaurant",
      position: { lat: 51.5115, lng: -0.1630 },
    },
    {
      name: "Drury Covent Garden | Cafe & Brunch",
      category: "Coffee Shop",
      position: { lat: 51.5120, lng: -0.1225 },
    },
    {
      name: "Old Shades",
      category: "Pub",
      position: { lat: 51.5101, lng: -0.1157 },
    },
  ];

  // Add markers
  for (let place of restaurants) {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: place.position,
      title: place.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${place.name}</strong><br>${place.category}`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }
};

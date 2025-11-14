window.map = null;
window.mapMarkers = [];
window.restaurants = restaurants;

window.initMap = function () {
  window.map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.511, lng: -0.13 },
    zoom: 14,
  });

  // Restautants data stored globally

  window.restaurants = [
    {
      name: "Hélène Darroze at The Connaught",
      category: "Restaurant",
      position: { lat: 51.51029, lng: -0.14975 },
      image: "assets/images/helene-darroze.webp"
    },
    {
      name: "Drury Covent Garden | Cafe & Brunch",
      category: "Coffee Shop",
      position: { lat: 51.51624, lng: -0.12400 },
      image: "assets/images/drury-coffee.webp"
    },
    {
      name: "Old Shades",
      category: "Pub",
      position: { lat: 51.50660, lng: -0.12698 },
      image: "assets/images/oldshades-pub.webp"
    },
  ];

  // Markers saved globally

  window.mapMarkers = window.restaurants.map((place) => {
    const marker = new google.maps.Marker({
      map: window.map,
      position: place.position,
      title: place.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${place.name}</strong><br>${place.category}`,
    });

    marker.addListener("click", () => {
      infoWindow.open(window.map, marker);
    });

    return marker; // store it in the array
  });
};

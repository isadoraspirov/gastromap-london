window.map = null;
window.mapMarkers = [];

/*
 * Initializes the Google Map and restaurant markers.
 * This function:
 * - Creates the map centered on London
 * - Loads restaurant data globally
 * - Generates map markers for each restaurant
 * - Attaches click events to markers
 *
 * NOTE: This function is required to be global
 * and is called automatically by the Google Maps API.
 */

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
      image: "helene-darroze.webp"
    },
    {
      name: "Drury Covent Garden | Cafe & Brunch",
      category: "Coffee Shop",
      position: { lat: 51.51624, lng: -0.12400 },
      image: "drury.webp"
    },
    {
      name: "Old Shades",
      category: "Pub",
      position: { lat: 51.50660, lng: -0.12698 },
      image: "oldshades-pub.webp"
    },
    {
      name: "SMOKESTAK",
      category: "Steakhouse",
      position: { lat: 51.52378 , lng: -0.07288 },
      image: "SMOKESTAK.webp"
    },
    {
      name: "Sky Pod Bar",
      category: "Pub",
      position: { lat: 51.51203 , lng: -0.08331 },
      image: "skypodbar.webp"
    },
    {
      name: "Savoy Grill",
      category: "Restaurant",
      position: { lat: 51.51078, lng: -0.12058 },
      image: "savoygrill.webp"
    },
  ];

  // Markers saved globally

  window.mapMarkers = window.restaurants.map((place) => {
    const marker = new google.maps.Marker({
      map: window.map,
      position: place.position,
      title: place.name,
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${place.name}</strong><br>${place.category}`,
    });

    /*
 * Handles marker click events.
 * This function:
 * - Resets all markers to their default appearance
 * - Highlights the selected marker with animation
 * - Displays an information window with restaurant details
 */

    marker.addListener("click", () => {
      window.mapMarkers.forEach(m => {
      if (m) {
        m.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
        m.setAnimation(null);
      }
    });

    marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 1800);

      infoWindow.open(window.map, marker);
    });

    return marker; 
  });
};

let restaurants = [];

async function fetchRestaurants() {
  try {
    const res = await fetch('http://localhost:3000/restaurants');
    restaurants = await res.json();
    showRestaurantSelector();
  } catch (err) {
    console.error("Error fetching restaurants:", err);
  }
}


fetchRestaurants();

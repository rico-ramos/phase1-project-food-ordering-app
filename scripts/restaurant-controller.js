function showRestaurantSelector() {
  const container = document.getElementById('restaurantSelector');
  container.innerHTML = '';

  restaurants.forEach(r => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition hover:shadow-xl';
    card.innerHTML = `
      <img src="${r.img}" class="w-full h-40 object-cover" />
      <div class="p-3">
        <h3 class="text-lg font-bold">${r.name}</h3>
        <p class="text-sm text-gray-600">${r.cuisine}</p>
      </div>
    `;
    card.onclick = () => {
      loadMenuForRestaurant(r.id);
    };
    container.appendChild(card);
  });
}

function loadMenuForRestaurant(id) {
  const restaurant = restaurants.find(r => r.id === id);
  if (!restaurant) return;

  // Store selection for later
  currentRestaurant = restaurant;

  // Hide selector, show app
  document.getElementById('restaurantSelector').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');

  // Load restaurant-specific menu
  loadRestaurantMenu(restaurant.id);
}

let currentMenu = null;
let currentRestaurant = null;
let allCategories = [];

function loadRestaurantMenu(restaurantId) {
            const r = restaurants.find(r => r.id === restaurantId);
            if (!r) return;

            currentMenu = r.menu;
            currentRestaurant = r;

            document.getElementById('categories').innerHTML = '';

            allCategories = [
                { id: 'starters', label: 'Starters', items: currentMenu.starters },
                { id: 'entrees', label: 'Entrees', items: currentMenu.entrees },
                { id: 'desserts', label: 'Desserts', items: currentMenu.desserts },
                { id: 'drinks', label: 'Drinks', items: currentMenu.drinks }
            ];
            const categoriesContainer = document.getElementById('categories');

            allCategories.forEach(category => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = `
        <div class="bg-red-50 rounded-md p-3 hover:bg-red-100 transition cursor-pointer flex justify-between items-center"
             onclick="toggleCategory('${category.id}')">
          <h3 class="text-base md:text-lg font-semibold">${category.label}</h3>
          <span id="${category.id}-arrow" class="text-xl transform transition-transform duration-300">^</span>
        </div>
        <div id="${category.id}" class="collapsible mt-2">
          <div class="flex space-x-4 overflow-x-auto pb-2" id="${category.id}-items"></div>
        </div>
      `;
                categoriesContainer.appendChild(wrapper);

                const container = document.getElementById(`${category.id}-items`);
                category.items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'relative w-28 md:w-32 lg:w-36 text-center flex-shrink-0';
                    card.innerHTML = `
          <div id="badge-${item.id}" class="absolute top-0 left-0 bg-black text-white text-xs px-2 py-0.5 rounded-full z-10 hidden">1</div>
          <img src="${item.img}" class="mx-auto rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 border-2 border-transparent cursor-pointer transition"
               onclick="openModal(${item.id})" id="img-${item.id}" />
          <button onclick="addToCart(${item.id}, this)"
                  class="mt-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto transition-transform">+</button>
        `;
                    container.appendChild(card);
                });
            });
        }
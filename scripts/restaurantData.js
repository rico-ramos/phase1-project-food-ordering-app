const restaurants = [
  {
    id: 'tacos-rico',
    name: 'Tacos Rico',
    cuisine: 'Mexican',
    img: 'https://source.unsplash.com/400x300/?mexican,food',
    menu: {
      starters: [
        { id: 101, name: 'Chips & Salsa', desc: 'Fresh made with pico de gallo.', price: 3.99, img: 'https://source.unsplash.com/300x300/?chips' },
        { id: 102, name: 'Guacamole Dip', desc: 'Made fresh daily.', price: 4.99, img: 'https://source.unsplash.com/300x300/?guacamole' }
      ],
      entrees: [
        { id: 103, name: 'Beef Tacos', desc: '3 street-style tacos.', price: 8.99, img: 'https://source.unsplash.com/300x300/?tacos' }
      ],
      desserts: [
        { id: 104, name: 'Churros', desc: 'Cinnamon sugar and chocolate.', price: 3.50, img: 'https://source.unsplash.com/300x300/?churros' }
      ],
      drinks: [
        { id: 105, name: 'Jarritos', desc: 'Assorted flavors.', price: 2.00, img: 'https://source.unsplash.com/300x300/?jarritos' }
      ]
    }
  },
  {
    id: 'pasta-parlor',
    name: 'Pasta Parlor',
    cuisine: 'Italian',
    img: 'https://source.unsplash.com/400x300/?pasta',
    menu: {
      starters: [
        { id: 201, name: 'Garlic Bread', desc: 'Buttery & toasted.', price: 3.25, img: 'https://source.unsplash.com/300x300/?garlic-bread' }
      ],
      entrees: [
        { id: 202, name: 'Spaghetti Bolognese', desc: 'Classic red sauce & meat.', price: 10.99, img: 'https://source.unsplash.com/300x300/?spaghetti' }
      ],
      desserts: [
        { id: 203, name: 'Tiramisu', desc: 'Rich & creamy coffee cake.', price: 4.75, img: 'https://source.unsplash.com/300x300/?tiramisu' }
      ],
      drinks: [
        { id: 204, name: 'Italian Soda', desc: 'Fizzy & fruity.', price: 2.50, img: 'https://source.unsplash.com/300x300/?italian-soda' }
      ]
    }
  },
  {
    id: 'dragon-bowl',
    name: 'Dragon Bowl',
    cuisine: 'Asian Fusion',
    img: 'https://source.unsplash.com/400x300/?asian,food',
    menu: {
      starters: [
        { id: 301, name: 'Edamame', desc: 'Steamed soybeans with sea salt.', price: 3.99, img: 'https://source.unsplash.com/300x300/?edamame' }
      ],
      entrees: [
        { id: 302, name: 'Orange Chicken', desc: 'Sweet, tangy, and crispy.', price: 9.99, img: 'https://source.unsplash.com/300x300/?orange-chicken' }
      ],
      desserts: [
        { id: 303, name: 'Mochi Ice Cream', desc: 'Sweet rice dough wrapped ice cream.', price: 3.75, img: 'https://source.unsplash.com/300x300/?mochi' }
      ],
      drinks: [
        { id: 304, name: 'Green Tea', desc: 'Hot or iced.', price: 2.25, img: 'https://source.unsplash.com/300x300/?green-tea' }
      ]
    }
  }
];

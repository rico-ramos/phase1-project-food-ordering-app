const restaurants = [
  {
    id: 'tacos-rico',
    name: 'Tacos Rico',
    cuisine: 'Mexican',
    img: 'images/tacos-rico/tacos-rico.png',
    menu: {
      starters: [
        { id: 101, name: 'Chips & Salsa', desc: 'Crispy tortilla chips with fresh tomato salsa.', price: 3.99, img: 'images/tacos-rico/chips-salsa.jpg' },
        { id: 102, name: 'Guacamole', desc: 'Creamy avocado dip with lime and cilantro.', price: 4.99, img: 'images/tacos-rico/guacamole.jpg' },
        { id: 103, name: 'Elote', desc: 'Grilled street corn with cheese and chili powder.', price: 3.50, img: 'images/tacos-rico/elote.jpg' }
      ],
      entrees: [
        { id: 104, name: 'Carne Asada Tacos', desc: '3 tacos with marinated steak.', price: 9.99, img: 'images/tacos-rico/carne-asada-tacos.jpg' },
        { id: 105, name: 'Chicken Enchiladas', desc: 'Topped with verde sauce and cheese.', price: 10.50, img: 'images/tacos-rico/chicken-enchiladas.jpg' },
        { id: 106, name: 'Burrito Bowl', desc: 'Rice, beans, chicken, and toppings.', price: 8.95, img: 'images/tacos-rico/burrito-bowl.jpg' }
      ],
      desserts: [
        { id: 107, name: 'Churros', desc: 'Crispy cinnamon sticks with chocolate dip.', price: 3.25, img: 'images/tacos-rico/churros.jpg'},
        { id: 108, name: 'Flan', desc: 'Rich caramel custard dessert.', price: 4.25, img: 'images/tacos-rico/flan.jpg' },
        { id: 109, name: 'Tres Leches Cake', desc: 'Soaked vanilla cake with whipped cream.', price: 4.50, img: 'images/tacos-rico/tres-leches.jpg' }
      ],
      drinks: [
        { id: 110, name: 'Jarritos', desc: 'Popular Mexican soda.', price: 2.00, img: 'images/tacos-rico/jarritos.jpg' },
        { id: 111, name: 'Horchata', desc: 'Cinnamon rice drink served chilled.', price: 2.25, img: 'images/tacos-rico/horchata.jpg' },
        { id: 112, name: 'Agua Fresca', desc: 'Fruit-infused water.', price: 2.50, img: 'images/tacos-rico/agua-fresca.jpg' }
      ]
    }
  },
  {
    id: 'pasta-parlor',
    name: 'Pasta Parlor',
    cuisine: 'Italian',
    img: 'images/pasta-parlor/pasta-parlor.png',
    menu: {
      starters: [
        { id: 201, name: 'Garlic Bread', desc: 'Toasted with herbs and butter.', price: 3.25, img: 'images/pasta-parlor/garlic-bread.jpg' },
        { id: 202, name: 'Caprese Skewers', desc: 'Tomato, mozzarella & basil.', price: 4.75, img: 'images/pasta-parlor/caprese-skewers.jpg' },
        { id: 203, name: 'Bruschetta', desc: 'Grilled bread with tomato topping.', price: 4.50, img: 'images/pasta-parlor/bruschetta.jpg' }
      ],
      entrees: [
        { id: 204, name: 'Spaghetti Carbonara', desc: 'Pasta with bacon, egg, and cheese.', price: 11.50, img: 'images/pasta-parlor/carbonara.jpg' },
        { id: 205, name: 'Lasagna', desc: 'Layers of pasta, meat, and cheese.', price: 12.00, img: 'images/pasta-parlor/lasagna.jpg' },
        { id: 206, name: 'Fettuccine Alfredo', desc: 'Creamy white sauce pasta.', price: 10.99, img: 'images/pasta-parlor/fettuccine-alfredo.jpg' }
      ],
      desserts: [
        { id: 207, name: 'Tiramisu', desc: 'Coffee-soaked sponge with mascarpone.', price: 4.75, img: 'images/pasta-parlor/tiramisu.jpg' },
        { id: 208, name: 'Gelato', desc: 'Italian-style ice cream.', price: 3.95, img: 'images/pasta-parlor/gelato.jpg' },
        { id: 209, name: 'Panna Cotta', desc: 'Creamy custard with berry coulis.', price: 4.50, img: 'images/pasta-parlor/panna-cotta.jpg' }
      ],
      drinks: [
        { id: 210, name: 'Italian Soda', desc: 'Fruity and fizzy.', price: 2.50, img: 'images/pasta-parlor/italian-soda.jpg' },
        { id: 211, name: 'Espresso', desc: 'Strong and small.', price: 2.00, img: 'images/pasta-parlor/espresso.jpg' },
        { id: 212, name: 'Sparkling Water', desc: 'Served with lemon.', price: 1.75, img: 'images/pasta-parlor/sparkling-water.jpg' }
      ]
    }
  },
  {
    id: 'dragon-bowl',
    name: 'Dragon Bowl',
    cuisine: 'Asian Fusion',
    img: 'images/dragon-bowl/dragon-bowl.png',
    menu: {
      starters: [
        { id: 301, name: 'Edamame', desc: 'Steamed soybeans with sea salt.', price: 3.99, img: 'images/dragon-bowl/edamame.jpg' },
        { id: 302, name: 'Potstickers', desc: 'Crispy dumplings with soy dip.', price: 4.50, img: 'images/dragon-bowl/potstickers.jpg' },
        { id: 303, name: 'Seaweed Salad', desc: 'Savory and refreshing.', price: 3.75, img: 'images/dragon-bowl/seaweed-salad.jpg' }
      ],
      entrees: [
        { id: 304, name: 'Orange Chicken', desc: 'Tangy crispy chicken.', price: 9.99, img: 'images/dragon-bowl/orange-chicken.jpg' },
        { id: 305, name: 'Beef Teriyaki', desc: 'With rice and veggies.', price: 10.50, img: 'images/dragon-bowl/beef-teriyaki.jpg' },
        { id: 306, name: 'Tofu Stir Fry', desc: 'Colorful veggies and tofu.', price: 9.25, img: 'images/dragon-bowl/tofu-stirfry.jpg' }
      ],
      desserts: [
        { id: 307, name: 'Mochi Ice Cream', desc: 'Chewy shell and sweet inside.', price: 3.75, img: 'images/dragon-bowl/mochi.jpg' },
        { id: 308, name: 'Sesame Balls', desc: 'Fried dough with sweet bean.', price: 3.25, img: 'images/dragon-bowl/sesame-balls.jpg' },
        { id: 309, name: 'Green Tea Cake', desc: 'Soft and lightly sweet.', price: 4.00, img: 'images/dragon-bowl/green-tea-cake.jpg' }
      ],
      drinks: [
        { id: 310, name: 'Green Tea', desc: 'Hot or iced.', price: 2.25, img: 'images/dragon-bowl/green-tea.jpg' },
        { id: 311, name: 'Thai Iced Tea', desc: 'Sweet orange tea.', price: 2.75, img: 'images/dragon-bowl/thai-iced-tea.jpg' },
        { id: 312, name: 'Bubble Tea', desc: 'Milk tea with boba.', price: 3.50, img: 'images/dragon-bowl/bubble-tea.jpg' }
      ]
    }
  },
  {
    id: 'burger-bay',
    name: 'Burger Bay',
    cuisine: 'American',
    img: 'images/burger-bay/burger-bay.png',
    menu: {
      starters: [
        { id: 401, name: 'Onion Rings', desc: 'Crispy battered golden onion rings.', price: 3.99, img: 'images/burger-bay/onion-rings.jpg' },
        { id: 406, name: 'Mozzarella Sticks', desc: 'Fried and gooey with marinara.', price: 4.50, img: 'images/burger-bay/mozzarella-sticks.jpg' },
        { id: 407, name: 'Fried Pickles', desc: 'Crunchy, salty and tangy bites.', price: 3.75, img: 'images/burger-bay/fried-pickles.jpg' }
      ],
      entrees: [
        { id: 402, name: 'Cheeseburger', desc: 'Grilled patty with cheddar, lettuce, and tomato.', price: 7.99, img: 'images/burger-bay/cheeseburger.jpg' },
        { id: 403, name: 'Double Bacon Burger', desc: 'Two patties with crispy bacon and melted cheese.', price: 9.99, img: 'images/burger-bay/bacon-burger.jpg' },
        { id: 408, name: 'Veggie Burger', desc: 'Plant-based patty with avocado and sprouts.', price: 8.50, img: 'images/burger-bay/veggie-burger.jpg' }
      ],
      desserts: [
        { id: 404, name: 'Milkshake', desc: 'Choose chocolate, vanilla, or strawberry.', price: 3.50, img: 'images/burger-bay/milkshake.jpg' },
        { id: 409, name: 'Apple Pie', desc: 'Classic slice with cinnamon.', price: 3.95, img: 'images/burger-bay/apple-pie.jpg' },
        { id: 410, name: 'Brownie Sundae', desc: 'Warm brownie with vanilla ice cream.', price: 4.50, img: 'images/burger-bay/brownie-sundae.jpg' }
      ],
      drinks: [
        { id: 405, name: 'Cola', desc: 'Classic chilled soft drink.', price: 1.99, img: 'images/burger-bay/cola.jpg' },
        { id: 411, name: 'Root Beer Float', desc: 'With vanilla ice cream on top.', price: 2.95, img: 'images/burger-bay/root-beer-float.jpg' },
        { id: 412, name: 'Lemonade', desc: 'Fresh squeezed and sweetened.', price: 2.25, img: 'images/burger-bay/lemonade.jpg' }
      ]
    }
  }
  ,
  {
    id: 'green-garden',
    name: 'Green Garden',
    cuisine: 'Vegan',
    img: 'images/green-garden/green-garden.png',
    menu: {
      starters: [
        { id: 501, name: 'Stuffed Mushrooms', desc: 'Walnuts, garlic, and herbs.', price: 4.25, img: 'images/green-garden/stuffed-mushroom.jpg' },
        { id: 506, name: 'Zucchini Fritters', desc: 'Pan-fried and crispy.', price: 3.95, img: 'images/green-garden/zucchini-fritters.jpg' },
        { id: 507, name: 'Vegan Spring Rolls', desc: 'Veggie-stuffed rice wraps.', price: 4.50, img: 'images/green-garden/vegan-spring-rolls.jpg' }
      ],
      entrees: [
        { id: 502, name: 'Lentil Stew', desc: 'Hearty and rich with root vegetables.', price: 8.25, img: 'images/green-garden/lentil-stew.jpg' },
        { id: 503, name: 'Grilled Tofu Bowl', desc: 'Quinoa, kale, and tahini drizzle.', price: 9.00, img: 'images/green-garden/grilled-tofu.jpg' },
        { id: 508, name: 'Vegan Mac & Cheese', desc: 'Cashew cheese over elbow pasta.', price: 8.50, img: 'images/green-garden/vegan-mac-and-cheese.jpg' }
      ],
      desserts: [
        { id: 504, name: 'Avocado Mousse', desc: 'Silky and rich chocolate flavor.', price: 3.95, img: 'images/green-garden/avocado-dessert.jpg' },
        { id: 509, name: 'Fruit Parfait', desc: 'Seasonal berries with coconut whip.', price: 4.25, img: 'images/green-garden/fruit-parfait.jpg' },
        { id: 510, name: 'Vegan Brownie', desc: 'Dark chocolate and walnut.', price: 3.75, img: 'images/green-garden/vegan-brownie.jpg' }
      ],
      drinks: [
        { id: 505, name: 'Kombucha', desc: 'Bubbly probiotic tea.', price: 2.95, img: 'images/green-garden/kombucha.jpg' },
        { id: 511, name: 'Matcha Latte', desc: 'Earthy and lightly sweet.', price: 3.25, img: 'images/green-garden/matcha-latte.jpg' },
        { id: 512, name: 'Cucumber Mint Water', desc: 'Chilled and refreshing.', price: 2.00, img: 'images/green-garden/cucumber-water.jpg' }
      ]
    }
  }


];

// Centralized business content configuration
// Edit these values to update the website content

// Helper function to generate menu item slug from name
function generateMenuItemSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/hnd\s+/gi, '') // Remove HND prefix
    .replace(/special\s+/gi, '') // Remove special
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Helper function to get menu item image path
function getMenuItemImage(name: string): string {
  const slug = generateMenuItemSlug(name);
  return `/assets/generated/menu-item-${slug}.dim_512x512.jpg`;
}

// Menu category image mapping - Updated with HND branding
const menuImages = {
  tandoor: "/assets/generated/menu-thumb-tandoor-hnd.dim_256x256.jpg",
  handi: "/assets/generated/menu-thumb-handi-hnd.dim_256x256.jpg",
  karahi: "/assets/generated/menu-thumb-karahi-hnd.dim_256x256.jpg",
  chinese: "/assets/generated/menu-thumb-chinese-hnd.dim_256x256.jpg",
  bbq: "/assets/generated/menu-thumb-bbq-hnd.dim_256x256.jpg",
  fastfood: "/assets/generated/menu-thumb-fastfood-hnd.dim_256x256.jpg",
  deals: "/assets/generated/menu-thumb-deals-hnd.dim_256x256.jpg",
  drinks: "/assets/generated/menu-thumb-drinks-hnd.dim_256x256.jpg",
  default: "/assets/generated/menu-thumb-default-hnd.dim_256x256.jpg"
};

// Export default menu image for fallback
export const defaultMenuImage = menuImages.default;

export const businessContent = {
  name: "HOTEL NASRA DA",
  tagline: "Family Restaurant - Since 1992",
  description: "We believe in purity. Experience authentic Pakistani and Chinese cuisine with our extensive menu featuring BBQ, Karahi, Chinese dishes, fast food, and more. Serving delicious meals with quality ingredients since 1992.",
  
  // Social media links
  social: {
    facebookUrl: "https://www.facebook.com/share/189s9DRTtK/",
    tiktokUrl: "https://www.tiktok.com/@hotel.nasry.da?_r=1&_t=ZS-93vS7fFgyn4"
  },
  
  // WhatsApp configuration for ordering
  whatsapp: {
    phoneNumber: "+923014259333", // International format
    messageTemplate: "Hello! I would like to order: {itemName} - {price}"
  },
  
  hours: {
    monday: "10:00 AM - 2:00 AM",
    tuesday: "10:00 AM - 2:00 AM",
    wednesday: "10:00 AM - 2:00 AM",
    thursday: "10:00 AM - 2:00 AM",
    friday: "10:00 AM - 2:00 AM",
    saturday: "10:00 AM - 2:00 AM",
    sunday: "10:00 AM - 2:00 AM"
  },
  
  address: {
    street: "Kumharan Wala Chowk",
    city: "Arifwala",
    state: "Punjab",
    zip: "",
    country: "Pakistan"
  },
  
  contact: {
    phone: "0301 4259333",
    email: "info@hotelnasrada.com"
  },
  
  mapsUrl: "https://maps.app.goo.gl/NdbP8XBnMzZHEdmM8",
  
  // Embedded map URL (Google Maps embed format)
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.98823!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTcuNiJX!5e0!3m2!1sen!2sus!4v1234567890",
  
  menu: [
    {
      category: "Tandoor",
      image: menuImages.tandoor,
      items: [
        { name: "Tandoori Roti", full: 20, image: getMenuItemImage("Tandoori Roti"), alt: "HND Tandoori Roti" },
        { name: "Khamiri Roti", full: 30, image: getMenuItemImage("Khamiri Roti"), alt: "HND Khamiri Roti" },
        { name: "Tandoor Paratha", full: 50, image: getMenuItemImage("Tandoor Paratha"), alt: "HND Tandoor Paratha" },
        { name: "Plain Nan", full: 30, image: getMenuItemImage("Plain Nan"), alt: "HND Plain Nan" },
        { name: "Butter Nan", full: 40, image: getMenuItemImage("Butter Nan"), alt: "HND Butter Nan" },
        { name: "Roghni Nan", full: 70, image: getMenuItemImage("Roghni Nan"), alt: "HND Roghni Nan" },
        { name: "Garlic Nan", full: 80, image: getMenuItemImage("Garlic Nan"), alt: "HND Garlic Nan" },
        { name: "Kalwanji Nan", full: 80, image: getMenuItemImage("Kalwanji Nan"), alt: "HND Kalwanji Nan" },
        { name: "Ginger Nan", full: 80, image: getMenuItemImage("Ginger Nan"), alt: "HND Ginger Nan" },
        { name: "Zera Nan", full: 80, image: getMenuItemImage("Zera Nan"), alt: "HND Zera Nan" },
        { name: "Afghani Nan", full: 200, image: getMenuItemImage("Afghani Nan"), alt: "HND Afghani Nan" },
        { name: "Kashmiri Nan", full: 250, image: getMenuItemImage("Kashmiri Nan"), alt: "HND Kashmiri Nan" },
        { name: "Cheese Nan", full: 300, image: getMenuItemImage("Cheese Nan"), alt: "HND Cheese Nan" },
        { name: "Chicken Cheese Nan", full: 400, image: getMenuItemImage("Chicken Cheese Nan"), alt: "HND Chicken Cheese Nan" },
        { name: "Beef Qeema Nan", full: 350, image: getMenuItemImage("Beef Qeema Nan"), alt: "HND Beef Qeema Nan" },
        { name: "Mutton Qeema Nan", full: 350, image: getMenuItemImage("Mutton Qeema Nan"), alt: "HND Mutton Qeema Nan" }
      ]
    },
    {
      category: "Handi Special",
      image: menuImages.handi,
      items: [
        { name: "HND Special Chicken Handi", full: 1790, half: 890, image: getMenuItemImage("HND Special Chicken Handi"), alt: "HND Special Chicken Handi" },
        { name: "Chicken Makhni Handi", full: 1750, half: 850, image: getMenuItemImage("Chicken Makhni Handi"), alt: "HND Chicken Makhni Handi" },
        { name: "Chicken Achari Handi", full: 1690, half: 830, image: getMenuItemImage("Chicken Achari Handi"), alt: "HND Chicken Achari Handi" },
        { name: "Chicken Boneless Handi", full: 1590, half: 790, image: getMenuItemImage("Chicken Boneless Handi"), alt: "HND Chicken Boneless Handi" },
        { name: "Chicken Hara Masala Handi", full: 1750, half: 850, image: getMenuItemImage("Chicken Hara Masala Handi"), alt: "HND Chicken Hara Masala Handi" },
        { name: "Chicken Ginger", full: 1750, half: 850, image: getMenuItemImage("Chicken Ginger"), alt: "HND Chicken Ginger" },
        { name: "Chicken Jalfrezi", full: 1750, half: 850, image: getMenuItemImage("Chicken Jalfrezi"), alt: "HND Chicken Jalfrezi" }
      ]
    },
    {
      category: "Chinese Rice",
      image: menuImages.chinese,
      items: [
        { name: "HND Special Rice", full: 990, half: 490, image: getMenuItemImage("HND Special Rice"), alt: "HND Special Rice" },
        { name: "Chicken Fried Rice", full: 790, half: 390, image: getMenuItemImage("Chicken Fried Rice"), alt: "HND Chicken Fried Rice" },
        { name: "Chicken Masala Rice", full: 850, half: 450, image: getMenuItemImage("Chicken Masala Rice"), alt: "HND Chicken Masala Rice" },
        { name: "Egg Fried Rice", full: 590, half: 290, image: getMenuItemImage("Egg Fried Rice"), alt: "HND Egg Fried Rice" },
        { name: "Vegetable Rice", full: 590, half: 290, image: getMenuItemImage("Vegetable Rice"), alt: "HND Vegetable Rice" },
        { name: "Nanglee Pulao", full: 590, half: 290, image: getMenuItemImage("Nanglee Pulao"), alt: "HND Nanglee Pulao" },
        { name: "Beef Pulao", full: 850, half: 450, image: getMenuItemImage("Beef Pulao"), alt: "HND Beef Pulao" },
        { name: "Chicken Biryani", full: 790, half: 390, image: getMenuItemImage("Chicken Biryani"), alt: "HND Chicken Biryani" }
      ]
    },
    {
      category: "Desi Food - Chicken",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Chicken Karahi", full: 1800, half: 900, image: getMenuItemImage("HND Special Chicken Karahi"), alt: "HND Special Chicken Karahi" },
        { name: "Chicken Karahi", full: 1600, half: 800, image: getMenuItemImage("Chicken Karahi"), alt: "HND Chicken Karahi" },
        { name: "Chicken White Karahi", full: 1700, half: 850, image: getMenuItemImage("Chicken White Karahi"), alt: "HND Chicken White Karahi" },
        { name: "Chicken Makhni Karahi", full: 1700, half: 850, image: getMenuItemImage("Chicken Makhni Karahi"), alt: "HND Chicken Makhni Karahi" },
        { name: "Chicken Achari Karahi", full: 1700, half: 850, image: getMenuItemImage("Chicken Achari Karahi"), alt: "HND Chicken Achari Karahi" },
        { name: "Chicken Murgh Makhan Karahi", full: 1800, half: 850, image: getMenuItemImage("Chicken Murgh Makhan Karahi"), alt: "HND Chicken Murgh Makhan Karahi" }
      ]
    },
    {
      category: "Chinese Gravy",
      image: menuImages.chinese,
      items: [
        { name: "Chicken Manchurian with Rice", full: 690, image: getMenuItemImage("Chicken Manchurian with Rice"), alt: "HND Chicken Manchurian with Rice" },
        { name: "Chicken Shashlik with Rice", full: 690, image: getMenuItemImage("Chicken Shashlik with Rice"), alt: "HND Chicken Shashlik with Rice" },
        { name: "Chicken with Black Paper Sauce", full: 890, image: getMenuItemImage("Chicken with Black Paper Sauce"), alt: "HND Chicken with Black Paper Sauce" },
        { name: "Chicken with Almond Sauce", full: 690, image: getMenuItemImage("Chicken with Almond Sauce"), alt: "HND Chicken with Almond Sauce" },
        { name: "Chicken with Garlic Sauce", full: 590, image: getMenuItemImage("Chicken with Garlic Sauce"), alt: "HND Chicken with Garlic Sauce" },
        { name: "Sichon Chicken Sauce", full: 650, image: getMenuItemImage("Sichon Chicken Sauce"), alt: "HND Sichon Chicken Sauce" },
        { name: "Chicken Pacheda Sauce", full: 650, image: getMenuItemImage("Chicken Pacheda Sauce"), alt: "HND Chicken Pacheda Sauce" },
        { name: "Chicken with Pineapple Sauce", full: 650, image: getMenuItemImage("Chicken with Pineapple Sauce"), alt: "HND Chicken with Pineapple Sauce" },
        { name: "Chicken Chilli Sauce", full: 650, image: getMenuItemImage("Chicken Chilli Sauce"), alt: "HND Chicken Chilli Sauce" },
        { name: "Beef Chilli Dry Sauce", full: 690, image: getMenuItemImage("Beef Chilli Dry Sauce"), alt: "HND Beef Chilli Dry Sauce" }
      ]
    },
    {
      category: "Desi Food - Beef",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Beef Karahi", full: 1990, half: 990, image: getMenuItemImage("HND Special Beef Karahi"), alt: "HND Special Beef Karahi" },
        { name: "Beef Karahi", full: 1790, half: 890, image: getMenuItemImage("Beef Karahi"), alt: "HND Beef Karahi" },
        { name: "Beef Achari Karahi", full: 1890, half: 950, image: getMenuItemImage("Beef Achari Karahi"), alt: "HND Beef Achari Karahi" },
        { name: "Beef White Karahi", full: 1890, half: 950, image: getMenuItemImage("Beef White Karahi"), alt: "HND Beef White Karahi" },
        { name: "Beef Makhni Karahi", full: 1890, half: 950, image: getMenuItemImage("Beef Makhni Karahi"), alt: "HND Beef Makhni Karahi" },
        { name: "Namkeen Beef Karahi", full: 1890, half: 950, image: getMenuItemImage("Namkeen Beef Karahi"), alt: "HND Namkeen Beef Karahi" },
        { name: "Beef Boneless Handi", full: 2600, half: 1300, image: getMenuItemImage("Beef Boneless Handi"), alt: "HND Beef Boneless Handi" }
      ]
    },
    {
      category: "Steaks",
      image: menuImages.bbq,
      items: [
        { name: "HND Special Steak", beef: 1950, chicken: 1950, note: "Beef and Chicken is mainly composed of tender meat and moist-marinated fillet, present in an environmentally friendly manner.", image: getMenuItemImage("HND Special Steak"), alt: "HND Special Steak" },
        { name: "Black Pepper Steak", beef: 1050, chicken: 1200, note: "Tender beef and chicken cooked with black peppers, onion, capsicum, and soy sauce.", image: getMenuItemImage("Black Pepper Steak"), alt: "HND Black Pepper Steak" },
        { name: "Mushroom Steak", beef: 1150, chicken: 1050, note: "Tender grilled chicken breast infused with mushroom and capsicum sauce.", image: getMenuItemImage("Mushroom Steak"), alt: "HND Mushroom Steak" },
        { name: "BBQ Steak", beef: 1150, chicken: 1050, note: "Tender Grilled beef served with soothed vegetable & tomato red sauce.", image: getMenuItemImage("BBQ Steak"), alt: "HND BBQ Steak" }
      ]
    },
    {
      category: "Desi Food - Mutton",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Mutton", full: 3500, half: 1800, single: 500, image: getMenuItemImage("HND Special Mutton"), alt: "HND Special Mutton" },
        { name: "Mutton Karahi", full: 3300, half: 1650, image: getMenuItemImage("Mutton Karahi"), alt: "HND Mutton Karahi" },
        { name: "Mutton White Karahi", full: 3400, half: 1700, image: getMenuItemImage("Mutton White Karahi"), alt: "HND Mutton White Karahi" },
        { name: "Mutton Achari Karahi", full: 3400, half: 1700, image: getMenuItemImage("Mutton Achari Karahi"), alt: "HND Mutton Achari Karahi" },
        { name: "Ramkeen Mutton Karahi", full: 3400, half: 1700, image: getMenuItemImage("Ramkeen Mutton Karahi"), alt: "HND Ramkeen Mutton Karahi" },
        { name: "Mutton Boneless Handi", full: 4600, half: 2300, image: getMenuItemImage("Mutton Boneless Handi"), alt: "HND Mutton Boneless Handi" }
      ]
    },
    {
      category: "Lawazmat (Salads)",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Green Salad", full: 200, image: getMenuItemImage("HND Special Green Salad"), alt: "HND Special Green Salad" },
        { name: "Mint Raita", full: 100, image: getMenuItemImage("Mint Raita"), alt: "HND Mint Raita" },
        { name: "Special Raita", full: 120, image: getMenuItemImage("Special Raita"), alt: "HND Special Raita" },
        { name: "Fresh Salad", full: 150, image: getMenuItemImage("Fresh Salad"), alt: "HND Fresh Salad" },
        { name: "Kachumer Salad", full: 250, image: getMenuItemImage("Kachumer Salad"), alt: "HND Kachumer Salad" }
      ]
    },
    {
      category: "Hot & Cold Bar",
      image: menuImages.drinks,
      items: [
        { name: "Pinacolada", price: 490, image: getMenuItemImage("Pinacolada"), alt: "HND Pinacolada" },
        { name: "Mint Margarita", price: 256, image: getMenuItemImage("Mint Margarita"), alt: "HND Mint Margarita" },
        { name: "Pink Lady", price: 450, image: getMenuItemImage("Pink Lady"), alt: "HND Pink Lady" },
        { name: "Fresh Lime", price: 200, image: getMenuItemImage("Fresh Lime"), alt: "HND Fresh Lime" },
        { name: "Cold Coffee", price: 450, image: getMenuItemImage("Cold Coffee"), alt: "HND Cold Coffee" },
        { name: "Hot Coffee", price: 350, image: getMenuItemImage("Hot Coffee"), alt: "HND Hot Coffee" },
        { name: "Cappuccino", price: 400, image: getMenuItemImage("Cappuccino"), alt: "HND Cappuccino" },
        { name: "Dodh Patti", price: 100, image: getMenuItemImage("Dodh Patti"), alt: "HND Dodh Patti" },
        { name: "Karak Chay", price: 120, image: getMenuItemImage("Karak Chay"), alt: "HND Karak Chay" },
        { name: "Elaichi Chay", price: 130, image: getMenuItemImage("Elaichi Chay"), alt: "HND Elaichi Chay" },
        { name: "Oreo Shake", price: 390, image: getMenuItemImage("Oreo Shake"), alt: "HND Oreo Shake" },
        { name: "Kulfa Shake", price: 290, image: getMenuItemImage("Kulfa Shake"), alt: "HND Kulfa Shake" },
        { name: "Mango Shake", price: 280, image: getMenuItemImage("Mango Shake"), alt: "HND Mango Shake" },
        { name: "Pineapple Shake", price: 290, image: getMenuItemImage("Pineapple Shake"), alt: "HND Pineapple Shake" }
      ]
    },
    {
      category: "Desserts",
      image: menuImages.drinks,
      items: [
        { name: "Special Kheer", price: null, image: getMenuItemImage("Special Kheer"), alt: "HND Special Kheer" },
        { name: "Gulab Jaman", price: null, image: getMenuItemImage("Gulab Jaman"), alt: "HND Gulab Jaman" },
        { name: "Gajar Halwa", price: null, image: getMenuItemImage("Gajar Halwa"), alt: "HND Gajar Halwa" },
        { name: "Ice Cream", price: null, image: getMenuItemImage("Ice Cream"), alt: "HND Ice Cream" }
      ]
    },
    {
      category: "Fresh Juice Seasonal",
      image: menuImages.drinks,
      items: [
        { name: "Apple Juice", price: 290, image: getMenuItemImage("Apple Juice"), alt: "HND Apple Juice" },
        { name: "Musammi Juice", price: 190, image: getMenuItemImage("Musammi Juice"), alt: "HND Musammi Juice" },
        { name: "Grav Fruit Juice", price: 190, image: getMenuItemImage("Grav Fruit Juice"), alt: "HND Grav Fruit Juice" },
        { name: "Orange Juice", price: 190, image: getMenuItemImage("Orange Juice"), alt: "HND Orange Juice" },
        { name: "Pineapple Juice", price: 290, image: getMenuItemImage("Pineapple Juice"), alt: "HND Pineapple Juice" }
      ]
    },
    {
      category: "Salad",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Salad", large: 1400, medium: 900, small: 500, image: getMenuItemImage("HND Special Salad"), alt: "HND Special Salad" },
        { name: "Russian Salad", large: 1300, medium: 600, small: 400, image: getMenuItemImage("Russian Salad"), alt: "HND Russian Salad" },
        { name: "Pine Apple Salad", large: 1200, medium: 600, small: 400, image: getMenuItemImage("Pine Apple Salad"), alt: "HND Pine Apple Salad" },
        { name: "Chicken Pineapple Salad", large: 1300, medium: 650, small: 450, image: getMenuItemImage("Chicken Pineapple Salad"), alt: "HND Chicken Pineapple Salad" },
        { name: "Mix Fruit Salad", large: 1100, medium: 650, small: 450, image: getMenuItemImage("Mix Fruit Salad"), alt: "HND Mix Fruit Salad" },
        { name: "Birgudh Salad", large: 1800, medium: 650, small: 450, image: getMenuItemImage("Birgudh Salad"), alt: "HND Birgudh Salad" }
      ]
    },
    {
      category: "Soup",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Soup", family: 1200, single: 400, image: getMenuItemImage("HND Special Soup"), alt: "HND Special Soup" },
        { name: "Lyal Soup", family: 1100, single: 390, image: getMenuItemImage("Lyal Soup"), alt: "HND Lyal Soup" },
        { name: "Chicken Corn Soup", family: 1000, single: 350, image: getMenuItemImage("Chicken Corn Soup"), alt: "HND Chicken Corn Soup" },
        { name: "Hot & Sour Soup", family: 1000, single: 350, image: getMenuItemImage("Hot & Sour Soup"), alt: "HND Hot & Sour Soup" },
        { name: "Manchow Soup", family: 1000, single: 350, image: getMenuItemImage("Manchow Soup"), alt: "HND Manchow Soup" },
        { name: "Vegetable Soup", family: 900, single: 300, image: getMenuItemImage("Vegetable Soup"), alt: "HND Vegetable Soup" }
      ]
    },
    {
      category: "BBQ",
      image: menuImages.bbq,
      items: [
        { name: "HND Special BBQ Platter", price: 3500, note: "A grand platter featuring our finest BBQ selections", image: getMenuItemImage("HND Special BBQ Platter"), alt: "HND Special BBQ Platter" },
        { name: "Chicken Tikka", full: 1200, half: 600, image: getMenuItemImage("Chicken Tikka"), alt: "HND Chicken Tikka" },
        { name: "Malai Boti", full: 1300, half: 650, image: getMenuItemImage("Malai Boti"), alt: "HND Malai Boti" },
        { name: "Seekh Kabab", full: 1400, half: 700, image: getMenuItemImage("Seekh Kabab"), alt: "HND Seekh Kabab" },
        { name: "Reshmi Kabab", full: 1300, half: 650, image: getMenuItemImage("Reshmi Kabab"), alt: "HND Reshmi Kabab" },
        { name: "Chicken Boti", full: 1200, half: 600, image: getMenuItemImage("Chicken Boti"), alt: "HND Chicken Boti" },
        { name: "Beef Seekh Kabab", full: 1500, half: 750, image: getMenuItemImage("Beef Seekh Kabab"), alt: "HND Beef Seekh Kabab" },
        { name: "Mutton Seekh Kabab", full: 1600, half: 800, image: getMenuItemImage("Mutton Seekh Kabab"), alt: "HND Mutton Seekh Kabab" }
      ]
    },
    {
      category: "Fast Food",
      image: menuImages.fastfood,
      items: [
        { name: "HND Special Burger", price: 450, image: getMenuItemImage("HND Special Burger"), alt: "HND Special Burger" },
        { name: "Zinger Burger", price: 350, image: getMenuItemImage("Zinger Burger"), alt: "HND Zinger Burger" },
        { name: "Chicken Burger", price: 300, image: getMenuItemImage("Chicken Burger"), alt: "HND Chicken Burger" },
        { name: "Beef Burger", price: 320, image: getMenuItemImage("Beef Burger"), alt: "HND Beef Burger" },
        { name: "Club Sandwich", price: 400, image: getMenuItemImage("Club Sandwich"), alt: "HND Club Sandwich" },
        { name: "Chicken Pizza", small: 650, medium: 1200, large: 1800, image: "/assets/generated/menu-item-chicken-pizza.dim_512x512.jpg", alt: "HND Chicken Pizza" },
        { name: "Beef Pizza", small: 700, medium: 1300, large: 1900, image: "/assets/generated/menu-item-beef-pizza.dim_512x512.jpg", alt: "HND Beef Pizza" },
        { name: "Fries", regular: 150, large: 250, image: getMenuItemImage("Fries"), alt: "HND Fries" },
        { name: "Chicken Nuggets", price: 350, image: getMenuItemImage("Chicken Nuggets"), alt: "HND Chicken Nuggets" },
        { name: "Chicken Wings", price: 450, image: getMenuItemImage("Chicken Wings"), alt: "HND Chicken Wings" }
      ]
    },
    {
      category: "Deals",
      image: menuImages.deals,
      items: [
        { name: "HND Family Deal", price: 3500, note: "Complete family meal with variety of items", image: getMenuItemImage("HND Family Deal"), alt: "HND Family Deal" },
        { name: "Couple Deal", price: 1800, note: "Perfect for two people", image: getMenuItemImage("Couple Deal"), alt: "HND Couple Deal" },
        { name: "Student Deal", price: 500, note: "Budget-friendly meal for students", image: getMenuItemImage("Student Deal"), alt: "HND Student Deal" },
        { name: "Midnight Deal", price: 1200, note: "Special late-night offer", image: getMenuItemImage("Midnight Deal"), alt: "HND Midnight Deal" }
      ]
    },
    {
      category: "Drinks",
      image: menuImages.drinks,
      items: [
        { name: "Coca Cola", price: 100, image: getMenuItemImage("Coca Cola"), alt: "HND Coca Cola" },
        { name: "Pepsi", price: 100, image: getMenuItemImage("Pepsi"), alt: "HND Pepsi" },
        { name: "Sprite", price: 100, image: getMenuItemImage("Sprite"), alt: "HND Sprite" },
        { name: "Fanta", price: 100, image: getMenuItemImage("Fanta"), alt: "HND Fanta" },
        { name: "7UP", price: 100, image: getMenuItemImage("7UP"), alt: "HND 7UP" },
        { name: "Mineral Water", price: 50, image: getMenuItemImage("Mineral Water"), alt: "HND Mineral Water" },
        { name: "Dew", price: 100, image: getMenuItemImage("Dew"), alt: "HND Dew" }
      ]
    }
  ]
};

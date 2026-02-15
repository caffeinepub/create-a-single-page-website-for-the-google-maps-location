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

// Helper function to get menu item image path - Updated for Ultra HD 4K
function getMenuItemImage(name: string): string {
  const slug = generateMenuItemSlug(name);
  return `/assets/generated/menu-item-${slug}.dim_3840x2160.jpg`;
}

// Menu category image mapping - Updated with HND branding (Deals removed)
const menuImages = {
  tandoor: "/assets/generated/menu-thumb-tandoor-hnd.dim_256x256.jpg",
  handi: "/assets/generated/menu-thumb-handi-hnd.dim_256x256.jpg",
  karahi: "/assets/generated/menu-thumb-karahi-hnd.dim_256x256.jpg",
  chinese: "/assets/generated/menu-thumb-chinese-hnd.dim_256x256.jpg",
  bbq: "/assets/generated/menu-thumb-bbq-hnd.dim_256x256.jpg",
  fastfood: "/assets/generated/menu-thumb-fastfood-hnd.dim_256x256.jpg",
  drinks: "/assets/generated/menu-thumb-drinks-hnd.dim_256x256.jpg",
  default: "/assets/generated/menu-thumb-default-hnd.dim_256x256.jpg"
};

// Category banner images - Wide format for section headers
const categoryBannerImages: Record<string, string> = {
  tandoor: "/assets/generated/menu-category-tandoor.dim_1600x900.jpg",
  handi: "/assets/generated/menu-category-handi.dim_1600x900.jpg",
  karahi: "/assets/generated/menu-category-karahi.dim_1600x900.jpg",
  chinese: "/assets/generated/menu-category-chinese.dim_1600x900.jpg",
  bbq: "/assets/generated/menu-category-bbq.dim_1600x900.jpg",
  burger: "/assets/generated/menu-category-burger.dim_1600x900.jpg",
  pizza: "/assets/generated/menu-category-pizza.dim_1600x900.jpg",
  drinks: "/assets/generated/menu-category-drinks.dim_1600x900.jpg",
  desserts: "/assets/generated/menu-category-desserts.dim_1600x900.jpg",
  salad: "/assets/generated/menu-category-salad.dim_1600x900.jpg",
  soup: "/assets/generated/menu-category-soup.dim_1600x900.jpg"
};

// Export default menu image for fallback and category banner images
export const defaultMenuImage = menuImages.default;
export { categoryBannerImages };

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
      image: categoryBannerImages.tandoor,
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
      image: categoryBannerImages.handi,
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
      image: categoryBannerImages.chinese,
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
      image: categoryBannerImages.karahi,
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
      image: categoryBannerImages.chinese,
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
      image: categoryBannerImages.karahi,
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
      image: categoryBannerImages.bbq,
      items: [
        { name: "HND Special Steak", beef: 1950, chicken: 1950, note: "Beef and Chicken is mainly composed of tender meat and moist-marinated fillet, present in an environmentally friendly manner.", image: getMenuItemImage("HND Special Steak"), alt: "HND Special Steak" },
        { name: "Black Pepper Steak", beef: 1050, chicken: 1200, note: "Tender beef and chicken cooked with black peppers, onion, capsicum, and soy sauce.", image: getMenuItemImage("Black Pepper Steak"), alt: "HND Black Pepper Steak" },
        { name: "Mushroom Steak", beef: 1150, chicken: 1050, note: "Tender grilled chicken breast infused with mushroom and capsicum sauce.", image: getMenuItemImage("Mushroom Steak"), alt: "HND Mushroom Steak" },
        { name: "BBQ Steak", beef: 1150, chicken: 1050, note: "Tender Grilled beef served with soothed vegetable & tomato red sauce.", image: getMenuItemImage("BBQ Steak"), alt: "HND BBQ Steak" }
      ]
    },
    {
      category: "Desi Food - Mutton",
      image: categoryBannerImages.karahi,
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
      image: categoryBannerImages.salad,
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
      image: categoryBannerImages.drinks,
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
      image: categoryBannerImages.desserts,
      items: [
        { name: "Special Kheer", price: null, image: getMenuItemImage("Special Kheer"), alt: "HND Special Kheer" },
        { name: "Gulab Jaman", price: null, image: getMenuItemImage("Gulab Jaman"), alt: "HND Gulab Jaman" },
        { name: "Gajar Halwa", price: null, image: getMenuItemImage("Gajar Halwa"), alt: "HND Gajar Halwa" },
        { name: "Ice Cream", price: null, image: getMenuItemImage("Ice Cream"), alt: "HND Ice Cream" }
      ]
    },
    {
      category: "Fresh Juice Seasonal",
      image: categoryBannerImages.drinks,
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
      image: categoryBannerImages.salad,
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
      image: categoryBannerImages.soup,
      items: [
        { name: "HND Special Soup", family: 1200, single: 400, image: getMenuItemImage("HND Special Soup"), alt: "HND Special Soup" },
        { name: "Lyal Soup", family: 1100, single: 390, image: getMenuItemImage("Lyal Soup"), alt: "HND Lyal Soup" },
        { name: "Chicken Corn Soup", family: 1000, single: 350, image: getMenuItemImage("Chicken Corn Soup"), alt: "HND Chicken Corn Soup" },
        { name: "Hot & Sour Soup", family: 1000, single: 350, image: getMenuItemImage("Hot & Sour Soup"), alt: "HND Hot & Sour Soup" },
        { name: "Manchow Soup", family: 1000, single: 350, image: getMenuItemImage("Manchow Soup"), alt: "HND Manchow Soup" }
      ]
    },
    {
      category: "BBQ",
      image: categoryBannerImages.bbq,
      items: [
        { name: "HND Special BBQ", full: 2500, half: 1250, image: getMenuItemImage("HND Special BBQ"), alt: "HND Special BBQ" },
        { name: "Chicken Tikka", full: 1200, half: 600, image: getMenuItemImage("Chicken Tikka"), alt: "HND Chicken Tikka" },
        { name: "Chicken Malai Boti", full: 1300, half: 650, image: getMenuItemImage("Chicken Malai Boti"), alt: "HND Chicken Malai Boti" },
        { name: "Chicken Seekh Kabab", full: 1200, half: 600, image: getMenuItemImage("Chicken Seekh Kabab"), alt: "HND Chicken Seekh Kabab" },
        { name: "Beef Seekh Kabab", full: 1300, half: 650, image: getMenuItemImage("Beef Seekh Kabab"), alt: "HND Beef Seekh Kabab" },
        { name: "Mutton Seekh Kabab", full: 1800, half: 900, image: getMenuItemImage("Mutton Seekh Kabab"), alt: "HND Mutton Seekh Kabab" },
        { name: "Chicken Reshmi Kabab", full: 1300, half: 650, image: getMenuItemImage("Chicken Reshmi Kabab"), alt: "HND Chicken Reshmi Kabab" },
        { name: "Chicken Bihari Kabab", full: 1400, half: 700, image: getMenuItemImage("Chicken Bihari Kabab"), alt: "HND Chicken Bihari Kabab" },
        { name: "Beef Bihari Kabab", full: 1500, half: 750, image: getMenuItemImage("Beef Bihari Kabab"), alt: "HND Beef Bihari Kabab" }
      ]
    },
    {
      category: "Burger",
      image: categoryBannerImages.burger,
      items: [
        { name: "HND Special Burger", price: 450, image: getMenuItemImage("HND Special Burger"), alt: "HND Special Burger" },
        { name: "Zinger Burger", price: 350, image: getMenuItemImage("Zinger Burger"), alt: "HND Zinger Burger" },
        { name: "Chicken Burger", price: 300, image: getMenuItemImage("Chicken Burger"), alt: "HND Chicken Burger" },
        { name: "Beef Burger", price: 350, image: getMenuItemImage("Beef Burger"), alt: "HND Beef Burger" },
        { name: "Cheese Burger", price: 400, image: getMenuItemImage("Cheese Burger"), alt: "HND Cheese Burger" }
      ]
    },
    {
      category: "Pizza",
      image: categoryBannerImages.pizza,
      items: [
        { name: "HND Special Pizza", large: 1800, medium: 1200, small: 800, image: getMenuItemImage("HND Special Pizza"), alt: "HND Special Pizza" },
        { name: "Chicken Tikka Pizza", large: 1600, medium: 1000, small: 700, image: getMenuItemImage("Chicken Tikka Pizza"), alt: "HND Chicken Tikka Pizza" },
        { name: "Chicken Fajita Pizza", large: 1600, medium: 1000, small: 700, image: getMenuItemImage("Chicken Fajita Pizza"), alt: "HND Chicken Fajita Pizza" },
        { name: "Beef Pizza", large: 1700, medium: 1100, small: 750, image: getMenuItemImage("Beef Pizza"), alt: "HND Beef Pizza" },
        { name: "Vegetable Pizza", large: 1400, medium: 900, small: 600, image: getMenuItemImage("Vegetable Pizza"), alt: "HND Vegetable Pizza" },
        { name: "Cheese Pizza", large: 1500, medium: 950, small: 650, image: getMenuItemImage("Cheese Pizza"), alt: "HND Cheese Pizza" }
      ]
    }
  ]
};

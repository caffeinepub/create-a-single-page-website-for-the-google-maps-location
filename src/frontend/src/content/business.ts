// Centralized business content configuration
// Edit these values to update the website content

// Menu item image mapping - Updated with HND branding
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
        { name: "Tandoori Roti", full: 20, image: "/assets/generated/menu-item-tandoori-roti.dim_256x256.jpg", alt: "Tandoori Roti" },
        { name: "Khamiri Roti", full: 30, image: "/assets/generated/menu-item-khamiri-roti.dim_256x256.jpg", alt: "Khamiri Roti" },
        { name: "Tandoor Paratha", full: 50, image: "/assets/generated/menu-item-tandoor-paratha.dim_256x256.jpg", alt: "Tandoor Paratha" },
        { name: "Plain Nan", full: 30, image: "/assets/generated/menu-item-plain-nan.dim_256x256.jpg", alt: "Plain Nan" },
        { name: "Butter Nan", full: 40, image: "/assets/generated/menu-item-butter-nan.dim_256x256.jpg", alt: "Butter Nan" },
        { name: "Roghni Nan", full: 70, image: "/assets/generated/menu-item-roghni-nan.dim_256x256.jpg", alt: "Roghni Nan" },
        { name: "Garlic Nan", full: 80, image: "/assets/generated/menu-item-garlic-nan.dim_256x256.jpg", alt: "Garlic Nan" },
        { name: "Kalwanji Nan", full: 80, image: "/assets/generated/menu-item-kalwanji-nan.dim_256x256.jpg", alt: "Kalwanji Nan" },
        { name: "Ginger Nan", full: 80, image: "/assets/generated/menu-item-ginger-nan.dim_256x256.jpg", alt: "Ginger Nan" },
        { name: "Zera Nan", full: 80, image: "/assets/generated/menu-item-zera-nan.dim_256x256.jpg", alt: "Zera Nan" },
        { name: "Afghani Nan", full: 200, image: "/assets/generated/menu-item-afghani-nan.dim_256x256.jpg", alt: "Afghani Nan" },
        { name: "Kashmiri Nan", full: 250, image: "/assets/generated/menu-item-kashmiri-nan.dim_256x256.jpg", alt: "Kashmiri Nan" },
        { name: "Cheese Nan", full: 300, image: "/assets/generated/menu-item-cheese-nan.dim_256x256.jpg", alt: "Cheese Nan" },
        { name: "Chicken Cheese Nan", full: 400, image: "/assets/generated/menu-item-chicken-cheese-nan.dim_256x256.jpg", alt: "Chicken Cheese Nan" },
        { name: "Beef Qeema Nan", full: 350, image: "/assets/generated/menu-item-beef-qeema-nan.dim_256x256.jpg", alt: "Beef Qeema Nan" },
        { name: "Mutton Qeema Nan", full: 350, image: "/assets/generated/menu-item-mutton-qeema-nan.dim_256x256.jpg", alt: "Mutton Qeema Nan" }
      ]
    },
    {
      category: "Handi Special",
      image: menuImages.handi,
      items: [
        { name: "HND Special Chicken Handi", full: 1790, half: 890, image: "/assets/generated/menu-item-hnd-special-chicken-handi.dim_256x256.jpg", alt: "HND Special Chicken Handi" },
        { name: "Chicken Makhni Handi", full: 1750, half: 850, image: "/assets/generated/menu-item-chicken-makhni-handi.dim_256x256.jpg", alt: "Chicken Makhni Handi" },
        { name: "Chicken Achari Handi", full: 1690, half: 830, image: "/assets/generated/menu-item-chicken-achari-handi.dim_256x256.jpg", alt: "Chicken Achari Handi" },
        { name: "Chicken Boneless Handi", full: 1590, half: 790, image: "/assets/generated/menu-item-chicken-boneless-handi.dim_256x256.jpg", alt: "Chicken Boneless Handi" },
        { name: "Chicken Hara Masala Handi", full: 1750, half: 850, image: "/assets/generated/menu-item-chicken-hara-masala-handi.dim_256x256.jpg", alt: "Chicken Hara Masala Handi" },
        { name: "Chicken Ginger", full: 1750, half: 850, image: "/assets/generated/menu-item-chicken-ginger.dim_256x256.jpg", alt: "Chicken Ginger" },
        { name: "Chicken Jalfrezi", full: 1750, half: 850, image: "/assets/generated/menu-item-chicken-jalfrezi.dim_256x256.jpg", alt: "Chicken Jalfrezi" }
      ]
    },
    {
      category: "Chinese Rice",
      image: menuImages.chinese,
      items: [
        { name: "HND Special Rice", full: 990, half: 490, image: "/assets/generated/menu-item-hnd-special-rice.dim_256x256.jpg", alt: "HND Special Rice" },
        { name: "Chicken Fried Rice", full: 790, half: 390, image: "/assets/generated/menu-item-chicken-fried-rice.dim_256x256.jpg", alt: "Chicken Fried Rice" },
        { name: "Chicken Masala Rice", full: 850, half: 450, image: "/assets/generated/menu-item-chicken-masala-rice.dim_256x256.jpg", alt: "Chicken Masala Rice" },
        { name: "Egg Fried Rice", full: 590, half: 290, image: "/assets/generated/menu-item-egg-fried-rice.dim_256x256.jpg", alt: "Egg Fried Rice" },
        { name: "Vegetable Rice", full: 590, half: 290, image: "/assets/generated/menu-item-vegetable-rice.dim_256x256.jpg", alt: "Vegetable Rice" },
        { name: "Nanglee Pulao", full: 590, half: 290, image: "/assets/generated/menu-item-nanglee-pulao.dim_256x256.jpg", alt: "Nanglee Pulao" },
        { name: "Beef Pulao", full: 850, half: 450, image: "/assets/generated/menu-item-beef-pulao.dim_256x256.jpg", alt: "Beef Pulao" },
        { name: "Chicken Biryani", full: 790, half: 390, image: "/assets/generated/menu-item-chicken-biryani.dim_256x256.jpg", alt: "Chicken Biryani" }
      ]
    },
    {
      category: "Desi Food - Chicken",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Chicken Karahi", full: 1800, half: 900, image: "/assets/generated/menu-item-hnd-special-chicken-karahi.dim_256x256.jpg", alt: "HND Special Chicken Karahi" },
        { name: "Chicken Karahi", full: 1600, half: 800, image: "/assets/generated/menu-item-chicken-karahi.dim_256x256.jpg", alt: "Chicken Karahi" },
        { name: "Chicken White Karahi", full: 1700, half: 850, image: "/assets/generated/menu-item-chicken-white-karahi.dim_256x256.jpg", alt: "Chicken White Karahi" },
        { name: "Chicken Makhni Karahi", full: 1700, half: 850, image: "/assets/generated/menu-item-chicken-makhni-karahi.dim_256x256.jpg", alt: "Chicken Makhni Karahi" },
        { name: "Chicken Achari Karahi", full: 1700, half: 850, image: "/assets/generated/menu-item-chicken-achari-karahi.dim_256x256.jpg", alt: "Chicken Achari Karahi" },
        { name: "Chicken Murgh Makhan Karahi", full: 1800, half: 850, image: "/assets/generated/menu-item-chicken-murgh-makhan-karahi.dim_256x256.jpg", alt: "Chicken Murgh Makhan Karahi" }
      ]
    },
    {
      category: "Chinese Gravy",
      image: menuImages.chinese,
      items: [
        { name: "Chicken Manchurian with Rice", full: 690, image: "/assets/generated/menu-item-chicken-manchurian-with-rice.dim_256x256.jpg", alt: "Chicken Manchurian with Rice" },
        { name: "Chicken Shashlik with Rice", full: 690, image: "/assets/generated/menu-item-chicken-shashlik-with-rice.dim_256x256.jpg", alt: "Chicken Shashlik with Rice" },
        { name: "Chicken with Black Paper Sauce", full: 890, image: "/assets/generated/menu-item-chicken-with-black-paper-sauce.dim_256x256.jpg", alt: "Chicken with Black Paper Sauce" },
        { name: "Chicken with Almond Sauce", full: 690, image: "/assets/generated/menu-item-chicken-with-almond-sauce.dim_256x256.jpg", alt: "Chicken with Almond Sauce" },
        { name: "Chicken with Garlic Sauce", full: 590, image: "/assets/generated/menu-item-chicken-with-garlic-sauce.dim_256x256.jpg", alt: "Chicken with Garlic Sauce" },
        { name: "Sichon Chicken Sauce", full: 650, image: "/assets/generated/menu-item-sichon-chicken-sauce.dim_256x256.jpg", alt: "Sichon Chicken Sauce" },
        { name: "Chicken Pacheda Sauce", full: 650, image: "/assets/generated/menu-item-chicken-pacheda-sauce.dim_256x256.jpg", alt: "Chicken Pacheda Sauce" },
        { name: "Chicken with Pineapple Sauce", full: 650, image: "/assets/generated/menu-item-chicken-with-pineapple-sauce.dim_256x256.jpg", alt: "Chicken with Pineapple Sauce" },
        { name: "Chicken Chilli Sauce", full: 650, image: "/assets/generated/menu-item-chicken-chilli-sauce.dim_256x256.jpg", alt: "Chicken Chilli Sauce" },
        { name: "Beef Chilli Dry Sauce", full: 690, image: "/assets/generated/menu-item-beef-chilli-dry-sauce.dim_256x256.jpg", alt: "Beef Chilli Dry Sauce" }
      ]
    },
    {
      category: "Desi Food - Beef",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Beef Karahi", full: 1990, half: 990, image: "/assets/generated/menu-item-hnd-special-beef-karahi.dim_256x256.jpg", alt: "HND Special Beef Karahi" },
        { name: "Beef Karahi", full: 1790, half: 890, image: "/assets/generated/menu-item-beef-karahi.dim_256x256.jpg", alt: "Beef Karahi" },
        { name: "Beef Achari Karahi", full: 1890, half: 950, image: "/assets/generated/menu-item-beef-achari-karahi.dim_256x256.jpg", alt: "Beef Achari Karahi" },
        { name: "Beef White Karahi", full: 1890, half: 950, image: "/assets/generated/menu-item-beef-white-karahi.dim_256x256.jpg", alt: "Beef White Karahi" },
        { name: "Beef Makhni Karahi", full: 1890, half: 950, image: "/assets/generated/menu-item-beef-makhni-karahi.dim_256x256.jpg", alt: "Beef Makhni Karahi" },
        { name: "Namkeen Beef Karahi", full: 1890, half: 950, image: "/assets/generated/menu-item-namkeen-beef-karahi.dim_256x256.jpg", alt: "Namkeen Beef Karahi" },
        { name: "Beef Boneless Handi", full: 2600, half: 1300, image: "/assets/generated/menu-item-beef-boneless-handi.dim_256x256.jpg", alt: "Beef Boneless Handi" }
      ]
    },
    {
      category: "Steaks",
      image: menuImages.bbq,
      items: [
        { name: "HND Special Steak", beef: 1950, chicken: 1950, note: "Beef and Chicken is mainly composed of tender meat and moist-marinated fillet, present in an environmentally friendly manner.", image: "/assets/generated/menu-item-hnd-special-steak.dim_256x256.jpg", alt: "HND Special Steak" },
        { name: "Black Pepper Steak", beef: 1050, chicken: 1200, note: "Tender beef and chicken cooked with black peppers, onion, capsicum, and soy sauce.", image: "/assets/generated/menu-item-black-pepper-steak.dim_256x256.jpg", alt: "Black Pepper Steak" },
        { name: "Mushroom Steak", beef: 1150, chicken: 1050, note: "Tender grilled chicken breast infused with mushroom and capsicum sauce.", image: "/assets/generated/menu-item-mushroom-steak.dim_256x256.jpg", alt: "Mushroom Steak" },
        { name: "BBQ Steak", beef: 1150, chicken: 1050, note: "Tender Grilled beef served with soothed vegetable & tomato red sauce.", image: "/assets/generated/menu-item-bbq-steak.dim_256x256.jpg", alt: "BBQ Steak" }
      ]
    },
    {
      category: "Desi Food - Mutton",
      image: menuImages.karahi,
      items: [
        { name: "HND Special Mutton", full: 3500, half: 1800, single: 500, image: "/assets/generated/menu-item-hnd-special-mutton.dim_256x256.jpg", alt: "HND Special Mutton" },
        { name: "Mutton Karahi", full: 3300, half: 1650, image: "/assets/generated/menu-item-mutton-karahi.dim_256x256.jpg", alt: "Mutton Karahi" },
        { name: "Mutton White Karahi", full: 3400, half: 1700, image: "/assets/generated/menu-item-mutton-white-karahi.dim_256x256.jpg", alt: "Mutton White Karahi" },
        { name: "Mutton Achari Karahi", full: 3400, half: 1700, image: "/assets/generated/menu-item-mutton-achari-karahi.dim_256x256.jpg", alt: "Mutton Achari Karahi" },
        { name: "Ramkeen Mutton Karahi", full: 3400, half: 1700, image: "/assets/generated/menu-item-ramkeen-mutton-karahi.dim_256x256.jpg", alt: "Ramkeen Mutton Karahi" },
        { name: "Mutton Boneless Handi", full: 4600, half: 2300, image: "/assets/generated/menu-item-mutton-boneless-handi.dim_256x256.jpg", alt: "Mutton Boneless Handi" }
      ]
    },
    {
      category: "Lawazmat (Salads)",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Green Salad", full: 200, image: "/assets/generated/menu-item-hnd-special-green-salad.dim_256x256.jpg", alt: "HND Special Green Salad" },
        { name: "Mint Raita", full: 100, image: "/assets/generated/menu-item-mint-raita.dim_256x256.jpg", alt: "Mint Raita" },
        { name: "Special Raita", full: 120, image: "/assets/generated/menu-item-special-raita.dim_256x256.jpg", alt: "Special Raita" },
        { name: "Fresh Salad", full: 150, image: "/assets/generated/menu-item-fresh-salad.dim_256x256.jpg", alt: "Fresh Salad" },
        { name: "Kachumer Salad", full: 250, image: "/assets/generated/menu-item-kachumer-salad.dim_256x256.jpg", alt: "Kachumer Salad" }
      ]
    },
    {
      category: "Hot & Cold Bar",
      image: menuImages.drinks,
      items: [
        { name: "Pinacolada", price: 490, image: "/assets/generated/menu-item-pinacolada.dim_256x256.jpg", alt: "Pinacolada" },
        { name: "Mint Margarita", price: 256, image: "/assets/generated/menu-item-mint-margarita.dim_256x256.jpg", alt: "Mint Margarita" },
        { name: "Pink Lady", price: 450, image: "/assets/generated/menu-item-pink-lady.dim_256x256.jpg", alt: "Pink Lady" },
        { name: "Fresh Lime", price: 200, image: "/assets/generated/menu-item-fresh-lime.dim_256x256.jpg", alt: "Fresh Lime" },
        { name: "Cold Coffee", price: 450, image: "/assets/generated/menu-item-cold-coffee.dim_256x256.jpg", alt: "Cold Coffee" },
        { name: "Hot Coffee", price: 350, image: "/assets/generated/menu-item-hot-coffee.dim_256x256.jpg", alt: "Hot Coffee" },
        { name: "Cappuccino", price: 400, image: "/assets/generated/menu-item-cappuccino.dim_256x256.jpg", alt: "Cappuccino" },
        { name: "Dodh Patti", price: 100, image: "/assets/generated/menu-item-dodh-patti.dim_256x256.jpg", alt: "Dodh Patti" },
        { name: "Karak Chay", price: 120, image: "/assets/generated/menu-item-karak-chay.dim_256x256.jpg", alt: "Karak Chay" },
        { name: "Elaichi Chay", price: 130, image: "/assets/generated/menu-item-elaichi-chay.dim_256x256.jpg", alt: "Elaichi Chay" },
        { name: "Oreo Shake", price: 390, image: "/assets/generated/menu-item-oreo-shake.dim_256x256.jpg", alt: "Oreo Shake" },
        { name: "Kulfa Shake", price: 290, image: "/assets/generated/menu-item-kulfa-shake.dim_256x256.jpg", alt: "Kulfa Shake" },
        { name: "Mango Shake", price: 280, image: "/assets/generated/menu-item-mango-shake.dim_256x256.jpg", alt: "Mango Shake" },
        { name: "Pineapple Shake", price: 290, image: "/assets/generated/menu-item-pineapple-shake.dim_256x256.jpg", alt: "Pineapple Shake" }
      ]
    },
    {
      category: "Desserts",
      image: menuImages.drinks,
      items: [
        { name: "Special Kheer", price: null, image: "/assets/generated/menu-item-special-kheer.dim_256x256.jpg", alt: "Special Kheer" },
        { name: "Gulab Jaman", price: null, image: "/assets/generated/menu-item-gulab-jaman.dim_256x256.jpg", alt: "Gulab Jaman" },
        { name: "Gajar Halwa", price: null, image: "/assets/generated/menu-item-gajar-halwa.dim_256x256.jpg", alt: "Gajar Halwa" },
        { name: "Ice Cream", price: null, image: "/assets/generated/menu-item-ice-cream.dim_256x256.jpg", alt: "Ice Cream" }
      ]
    },
    {
      category: "Fresh Juice Seasonal",
      image: menuImages.drinks,
      items: [
        { name: "Apple Juice", price: 290, image: "/assets/generated/menu-item-apple-juice.dim_256x256.jpg", alt: "Apple Juice" },
        { name: "Musammi Juice", price: 190, image: "/assets/generated/menu-item-musammi-juice.dim_256x256.jpg", alt: "Musammi Juice" },
        { name: "Grav Fruit Juice", price: 190, image: "/assets/generated/menu-item-grav-fruit-juice.dim_256x256.jpg", alt: "Grav Fruit Juice" },
        { name: "Orange Juice", price: 190, image: "/assets/generated/menu-item-orange-juice.dim_256x256.jpg", alt: "Orange Juice" },
        { name: "Pineapple Juice", price: 290, image: "/assets/generated/menu-item-pineapple-juice.dim_256x256.jpg", alt: "Pineapple Juice" }
      ]
    },
    {
      category: "Salad",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Salad", large: 1400, medium: 900, small: 500, image: "/assets/generated/menu-item-hnd-special-salad.dim_256x256.jpg", alt: "HND Special Salad" },
        { name: "Russian Salad", large: 1300, medium: 600, small: 400, image: "/assets/generated/menu-item-russian-salad.dim_256x256.jpg", alt: "Russian Salad" },
        { name: "Pine Apple Salad", large: 1200, medium: 600, small: 400, image: "/assets/generated/menu-item-pine-apple-salad.dim_256x256.jpg", alt: "Pine Apple Salad" },
        { name: "Chicken Pineapple Salad", large: 1300, medium: 650, small: 450, image: "/assets/generated/menu-item-chicken-pineapple-salad.dim_256x256.jpg", alt: "Chicken Pineapple Salad" },
        { name: "Mix Fruit Salad", large: 1100, medium: 650, small: 450, image: "/assets/generated/menu-item-mix-fruit-salad.dim_256x256.jpg", alt: "Mix Fruit Salad" },
        { name: "Birgudh Salad", large: 1800, medium: 650, small: 450, image: "/assets/generated/menu-item-birgudh-salad.dim_256x256.jpg", alt: "Birgudh Salad" }
      ]
    },
    {
      category: "Soup",
      image: menuImages.drinks,
      items: [
        { name: "HND Special Soup", family: 1200, single: 400, image: "/assets/generated/menu-item-hnd-special-soup.dim_256x256.jpg", alt: "HND Special Soup" },
        { name: "Lyal Soup", family: 1100, single: 390, image: "/assets/generated/menu-item-lyal-soup.dim_256x256.jpg", alt: "Lyal Soup" },
        { name: "Mulligatawny Soup", family: 900, single: 250, image: "/assets/generated/menu-item-mulligatawny-soup.dim_256x256.jpg", alt: "Mulligatawny Soup" },
        { name: "Chicken Corn Soup", family: 900, single: 250, image: "/assets/generated/menu-item-chicken-corn-soup.dim_256x256.jpg", alt: "Chicken Corn Soup" },
        { name: "Hot & Sour Soup", family: 900, single: 250, image: "/assets/generated/menu-item-hot-sour-soup.dim_256x256.jpg", alt: "Hot & Sour Soup" },
        { name: "Manchow Soup", family: 900, single: 250, image: "/assets/generated/menu-item-manchow-soup.dim_256x256.jpg", alt: "Manchow Soup" }
      ]
    },
    {
      category: "BBQ",
      image: menuImages.bbq,
      items: [
        { name: "Chicken Tikka", full: 1200, half: 600, image: "/assets/generated/menu-item-chicken-tikka.dim_256x256.jpg", alt: "Chicken Tikka" },
        { name: "Chicken Malai Boti", full: 1200, half: 600, image: "/assets/generated/menu-item-chicken-malai-boti.dim_256x256.jpg", alt: "Chicken Malai Boti" },
        { name: "Chicken Reshmi Kabab", full: 1200, half: 600, image: "/assets/generated/menu-item-chicken-reshmi-kabab.dim_256x256.jpg", alt: "Chicken Reshmi Kabab" },
        { name: "Chicken Seekh Kabab", full: 1200, half: 600, image: "/assets/generated/menu-item-chicken-seekh-kabab.dim_256x256.jpg", alt: "Chicken Seekh Kabab" },
        { name: "Beef Seekh Kabab", full: 1300, half: 650, image: "/assets/generated/menu-item-beef-seekh-kabab.dim_256x256.jpg", alt: "Beef Seekh Kabab" },
        { name: "Mutton Seekh Kabab", full: 1800, half: 900, image: "/assets/generated/menu-item-mutton-seekh-kabab.dim_256x256.jpg", alt: "Mutton Seekh Kabab" },
        { name: "Chicken Bihari Boti", full: 1200, half: 600, image: "/assets/generated/menu-item-chicken-bihari-boti.dim_256x256.jpg", alt: "Chicken Bihari Boti" },
        { name: "Beef Bihari Boti", full: 1300, half: 650, image: "/assets/generated/menu-item-beef-bihari-boti.dim_256x256.jpg", alt: "Beef Bihari Boti" },
        { name: "Mutton Chops", full: 2500, half: 1250, image: "/assets/generated/menu-item-mutton-chops.dim_256x256.jpg", alt: "Mutton Chops" },
        { name: "Fish Tikka", full: 1500, half: 750, image: "/assets/generated/menu-item-fish-tikka.dim_256x256.jpg", alt: "Fish Tikka" }
      ]
    },
    {
      category: "Fast Food",
      image: menuImages.fastfood,
      items: [
        { name: "Chicken Burger", price: 350, image: "/assets/generated/menu-item-chicken-burger.dim_256x256.jpg", alt: "Chicken Burger" },
        { name: "Beef Burger", price: 400, image: "/assets/generated/menu-item-beef-burger.dim_256x256.jpg", alt: "Beef Burger" },
        { name: "Zinger Burger", price: 450, image: "/assets/generated/menu-item-zinger-burger.dim_256x256.jpg", alt: "Zinger Burger" },
        { name: "Club Sandwich", price: 500, image: "/assets/generated/menu-item-club-sandwich.dim_256x256.jpg", alt: "Club Sandwich" },
        { name: "Chicken Sandwich", price: 350, image: "/assets/generated/menu-item-chicken-sandwich.dim_256x256.jpg", alt: "Chicken Sandwich" },
        { name: "French Fries", price: 250, image: "/assets/generated/menu-item-french-fries.dim_256x256.jpg", alt: "French Fries" },
        { name: "Chicken Nuggets", price: 400, image: "/assets/generated/menu-item-chicken-nuggets.dim_256x256.jpg", alt: "Chicken Nuggets" },
        { name: "Chicken Wings", price: 500, image: "/assets/generated/menu-item-chicken-wings.dim_256x256.jpg", alt: "Chicken Wings" },
        { name: "Pizza (Small)", price: 800, image: "/assets/generated/menu-item-pizza-small.dim_256x256.jpg", alt: "Pizza (Small)" },
        { name: "Pizza (Medium)", price: 1200, image: "/assets/generated/menu-item-pizza-medium.dim_256x256.jpg", alt: "Pizza (Medium)" },
        { name: "Pizza (Large)", price: 1600, image: "/assets/generated/menu-item-pizza-large.dim_256x256.jpg", alt: "Pizza (Large)" }
      ]
    },
    {
      category: "Deals",
      image: menuImages.deals,
      items: [
        { name: "Family Deal 1", price: 3500, description: "1 Full Chicken Karahi + 8 Roti + 1.5L Drink + Raita", image: "/assets/generated/menu-item-family-deal-1.dim_256x256.jpg", alt: "Family Deal 1" },
        { name: "Family Deal 2", price: 4500, description: "1 Full Beef Karahi + 8 Roti + 1.5L Drink + Raita + Salad", image: "/assets/generated/menu-item-family-deal-2.dim_256x256.jpg", alt: "Family Deal 2" },
        { name: "BBQ Deal", price: 2500, description: "Chicken Tikka + Seekh Kabab + 4 Roti + Raita", image: "/assets/generated/menu-item-bbq-deal.dim_256x256.jpg", alt: "BBQ Deal" },
        { name: "Fast Food Deal", price: 1200, description: "2 Zinger Burgers + French Fries + 1L Drink", image: "/assets/generated/menu-item-fast-food-deal.dim_256x256.jpg", alt: "Fast Food Deal" },
        { name: "Chinese Deal", price: 1800, description: "Chicken Fried Rice + Chicken Manchurian + Spring Rolls", image: "/assets/generated/menu-item-chinese-deal.dim_256x256.jpg", alt: "Chinese Deal" }
      ]
    },
    {
      category: "Drinks",
      image: menuImages.drinks,
      items: [
        { name: "Coca Cola", price: 120, image: "/assets/generated/menu-item-coca-cola.dim_256x256.jpg", alt: "Coca Cola" },
        { name: "Pepsi", price: 120, image: "/assets/generated/menu-item-pepsi.dim_256x256.jpg", alt: "Pepsi" },
        { name: "Sprite", price: 120, image: "/assets/generated/menu-item-sprite.dim_256x256.jpg", alt: "Sprite" },
        { name: "Fanta", price: 120, image: "/assets/generated/menu-item-fanta.dim_256x256.jpg", alt: "Fanta" },
        { name: "7UP", price: 120, image: "/assets/generated/menu-item-7up.dim_256x256.jpg", alt: "7UP" },
        { name: "Mineral Water", price: 80, image: "/assets/generated/menu-item-mineral-water.dim_256x256.jpg", alt: "Mineral Water" },
        { name: "Lassi (Sweet)", price: 200, image: "/assets/generated/menu-item-lassi-sweet.dim_256x256.jpg", alt: "Lassi (Sweet)" },
        { name: "Lassi (Salty)", price: 200, image: "/assets/generated/menu-item-lassi-salty.dim_256x256.jpg", alt: "Lassi (Salty)" }
      ]
    }
  ]
};

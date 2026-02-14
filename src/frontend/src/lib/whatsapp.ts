import { businessContent } from '@/content/business';

interface MenuItem {
  name: string;
  price?: number | null;
  full?: number;
  half?: number;
  single?: number;
  large?: number;
  medium?: number;
  small?: number;
  family?: number;
  beef?: number;
  chicken?: number;
  [key: string]: any;
}

/**
 * Builds a WhatsApp deep link with a pre-filled message for ordering a menu item
 * @param item - The menu item to order
 * @returns WhatsApp URL with encoded message, or null if WhatsApp is not configured
 */
export function buildWhatsAppOrderLink(item: MenuItem): string | null {
  const { whatsapp } = businessContent;
  
  // Check if WhatsApp is configured
  if (!whatsapp?.phoneNumber) {
    return null;
  }

  // Build price string from available price fields
  const priceDetails: string[] = [];
  
  if (item.price !== undefined && item.price !== null) {
    priceDetails.push(`Rs. ${item.price}`);
  }
  if (item.full) {
    priceDetails.push(`Full: Rs. ${item.full}`);
  }
  if (item.half) {
    priceDetails.push(`Half: Rs. ${item.half}`);
  }
  if (item.single) {
    priceDetails.push(`Single: Rs. ${item.single}`);
  }
  if (item.large) {
    priceDetails.push(`Large: Rs. ${item.large}`);
  }
  if (item.medium) {
    priceDetails.push(`Medium: Rs. ${item.medium}`);
  }
  if (item.small) {
    priceDetails.push(`Small: Rs. ${item.small}`);
  }
  if (item.family) {
    priceDetails.push(`Family: Rs. ${item.family}`);
  }
  if (item.beef) {
    priceDetails.push(`Beef: Rs. ${item.beef}`);
  }
  if (item.chicken) {
    priceDetails.push(`Chicken: Rs. ${item.chicken}`);
  }

  const priceString = priceDetails.length > 0 ? priceDetails.join(', ') : 'Price on request';

  // Build the message using the template or default format
  const message = whatsapp.messageTemplate
    ? whatsapp.messageTemplate
        .replace('{itemName}', item.name)
        .replace('{price}', priceString)
    : `Hello! I would like to order: ${item.name} - ${priceString}`;

  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  // Build WhatsApp deep link (works on both mobile and web)
  return `https://wa.me/${whatsapp.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

/**
 * Checks if WhatsApp ordering is configured
 * @returns true if WhatsApp phone number is configured
 */
export function isWhatsAppConfigured(): boolean {
  return !!businessContent.whatsapp?.phoneNumber;
}

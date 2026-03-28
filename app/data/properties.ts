export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status: 'buy' | 'rent' | 'sell';
  type: 'apartment' | 'house' | 'land';
}

// Empty array - properties are posted by users via /post form
export const properties: Property[] = [];
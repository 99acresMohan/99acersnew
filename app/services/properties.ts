export type Property = {
  _id?: string;
  title: string;
  location: string;
  price: string;
  image?: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  status?: 'buy' | 'rent' | 'sell';
  type?: 'apartment' | 'house' | 'land';
};

export async function fetchProperties(query?: { status?: string; type?: string }): Promise<Property[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';
  const url = new URL(`${apiBase}/api/properties`);
  if (query?.status) url.searchParams.set('status', query.status);
  if (query?.type) url.searchParams.set('type', query.type);

  const res = await fetch(url.toString(), { cache: 'no-store' });
  if (!res.ok) {
    const text = await res.text();
    console.error('Failed to fetch properties', res.status, text);
    return [];
  }

  const data = await res.json();
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.properties)) return data.properties;

  console.error('Unexpected properties format', data);
  return [];
}

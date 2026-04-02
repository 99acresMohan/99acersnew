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
  const url = '/api/properties';
  const params = new URLSearchParams();
  if (query?.status) params.append('status', query.status);
  if (query?.type) params.append('type', query.type);
  const baseUrl = typeof window === 'undefined' ? 'http://localhost:8080' : '';
  const fullUrl = baseUrl + url + (params.toString() ? `?${params.toString()}` : '');
  const res = await fetch(fullUrl, { cache: 'no-store' });
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

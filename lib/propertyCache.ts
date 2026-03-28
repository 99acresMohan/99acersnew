// Simple in-memory cache for properties when DB is unavailable
// This is a development helper; in production use proper DB failover

let postedProperties: any[] = [];

export function addPostedProperty(property: any) {
  postedProperties.push({ ...property, _id: Date.now().toString() });
}

export function getPostedProperties() {
  return postedProperties;
}

export function clearPostedProperties() {
  postedProperties = [];
}

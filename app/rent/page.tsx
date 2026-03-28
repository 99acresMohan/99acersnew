import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../services/properties';

export default async function RentPage() {
  const properties = await fetchProperties({ status: 'rent' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Rent Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id ?? property.title} property={{
              id: Number(property._id ? property._id.toString().slice(-6) : '0'),
              title: property.title,
              location: property.location,
              price: property.price,
              image: property.image ?? '/next.svg',
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              area: property.area
            }} />
          ))}
          {properties.length === 0 && (<p className="text-gray-600">No rent properties found.</p>)}
        </div>
      </main>
    </div>
  );
}

import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-blue-600 mb-2">{property.price}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.area}</span>
        </div>
      </div>
    </div>
  );
}
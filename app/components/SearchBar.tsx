export default function SearchBar() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Find Your Dream Property</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Types</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Land</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              99Acers
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/buy" className="text-gray-700 hover:text-blue-600">Buy</Link>
            <Link href="/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
            <Link href="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>
            <Link href="/post" className="text-gray-700 hover:text-blue-600">Post Property</Link>
            <Link href="/agents" className="text-gray-700 hover:text-blue-600">Agents</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
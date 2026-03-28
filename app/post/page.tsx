import Header from '../components/Header';
import PropertyForm from '../components/PropertyForm';

export default function PostPropertyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyForm />
      </main>
    </div>
  );
}

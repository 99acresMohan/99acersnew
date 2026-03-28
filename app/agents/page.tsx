import Header from '../components/Header';

const agents = [
  { name: 'Vikram Singh', city: 'New York' },
  { name: 'Neha Patel', city: 'California' },
  { name: 'Rohit Sharma', city: 'Texas' }
];

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Real Estate Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-gray-600">{agent.city}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

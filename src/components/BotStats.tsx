export default function BotStats() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-md mt-4">
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Contracts lost</p>
        <p className="text-2xl font-semibold">0</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Contracts won</p>
        <p className="text-2xl font-semibold">0</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Total profit/loss</p>
        <p className="text-2xl font-semibold">0.00 AUD</p>
      </div>
    </div>
  );
}

export default function BotStatus({ isRunning = false }: { isRunning?: boolean }) {
  return (
    <div className="flex items-center justify-end p-2 bg-gray-100 text-sm border-b border-gray-200">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-500' : 'bg-red-500'}`} />
        <span>Bot is {isRunning ? 'running' : 'not running'}</span>
      </div>
    </div>
  );
}

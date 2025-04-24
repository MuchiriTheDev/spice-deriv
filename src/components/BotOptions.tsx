import { Computer, ChartBar, RedoDot, Cog } from 'lucide-react';

const options = [
  {
    id: 'my-computer',
    name: 'My computer',
    icon: <Computer className="w-20 h-20" />
  },
  {
    id: 'sv5-bot',
    name: 'SV 5 BOT',
    icon: <RedoDot className="w-20 h-20" />
  },
  {
    id: 'bot-builder',
    name: 'Bot Builder',
    icon: <Cog className="w-20 h-20" />
  },
  {
    id: 'quick-strategy',
    name: 'Quick strategy',
    icon: <ChartBar className="w-20 h-20" />
  }
];

export default function BotOptions() {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto my-8">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex flex-col items-center hover:opacity-80 cursor-pointer transition-opacity"
        >
          {option.icon}
          <span className="mt-4 text-center">{option.name}</span>
        </div>
      ))}
    </div>
  );
}

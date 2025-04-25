import { link } from 'fs';
import { Computer, ChartBar, RedoDot, Cog } from 'lucide-react';

const options = [
  {
    id: 'my-computer',
    name: 'My computer',
    icon: <Computer className="w-16 h-16 md:w-20 md:h-20 p-3 rounded-lg" />
  },
  {
    id: 'bot-builder',
    name: 'Bot Builder',
    icon: <Cog className="w-16 h-16 md:w-20 md:h-20 p-3 rounded-lg" />,
    link: '/bot'
  },
  {
    id: 'quick-strategy',
    name: 'Quick strategy',
    icon: <ChartBar className="w-16 h-16 md:w-20 md:h-20 p-2 rounded-lg" />
  }
];

export default function BotOptions() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto my-8">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex flex-col items-center hover:opacity-80 cursor-pointer transition-opacity"
        >
          <span className='bg-primary text-white rounded-lg'>{option.icon}</span>
          <span className="mt-4 text-center">{option.name}</span>
        </div>
      ))}
    </div>
  );
}

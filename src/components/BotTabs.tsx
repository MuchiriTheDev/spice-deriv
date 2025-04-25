"use client";

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const tabs = [
  { name: 'Summary', href: '/bot' },
  { name: 'Transactions', href: '/bot/transactions' },
  { name: 'Journal', href: '/bot/journal' }
];

export default function BotTabs({ activeTab = 'Summary' }: { activeTab?: string }) {
  return (
    <div className="flex flex-wrap border-b border-gray-200">
      <div className="flex flex-wrap">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`px-4 py-2 sm:px-8 sm:py-4 ${isActive ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
      <div className="ml-auto p-2 sm:p-4">
        <Link
          href="/guide"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <BookOpen size={20} />
          <span className="hidden sm:inline">User Guide</span>
        </Link>
      </div>
    </div>
  );
}

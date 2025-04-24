"use client";

import Link from 'next/link';

const tabs = [
  { name: 'Summary', href: '/bot' },
  { name: 'Transactions', href: '/bot/transactions' },
  { name: 'Journal', href: '/bot/journal' }
];

export default function BotTabs({ activeTab = 'Summary' }: { activeTab?: string }) {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`px-8 py-4 ${isActive ? 'tab-active' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tab.name}
          </Link>
        );
      })}
      <div className="ml-auto p-4">
        <Link
          href="/guide"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          User Guide
        </Link>
      </div>
    </div>
  );
}

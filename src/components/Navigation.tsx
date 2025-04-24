"use client";

import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Bot Builder', href: '/bot' },
  { name: 'Analysis Tools', href: '/manual' },
  { name: 'Free Bots', href: '/strategy' },
  { name: 'Copy Trading', href: '/chart' },
  { name: 'Tutorials', href: '/sv5' },
];

export default function Navigation({ activeTab = 'dashboard' }: { activeTab?: string }) {
  return (
    <nav className="navigation flex w-fit overflow-x-auto">
      {navItems.map((item) => {
        const isActive = activeTab === item.name.toLowerCase();
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`py-4 w-56 text-nowrap px-6 hover:opacity-80 transition-opacity ${
              isActive ? 'bg-[#2E1219]' : ''
            }`}
          >
            {item.name}
          </Link>
        );
      })}
      <div className="ml-auto flex items-center">
        <button className="run-button px-6 py-2 mx-4 rounded flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5.14v14l11-7-11-7z"
              fill="currentColor"
            />
          </svg>
          Run
        </button>
      </div>
    </nav>
  );
}

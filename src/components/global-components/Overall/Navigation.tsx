"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Play } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Bot Builder", href: "/bot" },
  { name: "Analysis Tools", href: "/analysis-tool" },
  { name: "Free Bots", href: "/free-bots" },
  { name: "Copy Trading", href: "/copy-trading" },
  { name: "Tutorials", href: "/tutorials" },
];

export default function Navigation({ activeTab = "dashboard" }: { activeTab?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation flex items-center justify-between w-full p-4 bg-gray-800 text-white relative">
      {/* Hamburger Menu */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md bg-accent hover:bg-accent/30 transition"
        onClick={toggleMenu}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-wrap gap-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.name.toLowerCase();
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`py-2 px-4 rounded-md text-sm md:text-base hover:bg-gray-700 transition ${
                isActive ? "bg-[#2E1219]" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Run Button */}
      <div className="flex items-center justify-center md:justify-end">
        <button className="run-button px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-2 transition">
          <Play className="w-4 h-4" />
          Run
        </button>
      </div>

      {/* Side Menu (Mobile) */}
      {isMenuOpen && (
        <div className="absolute top-0 -left-5 w-72 h-full bg-primary shadow-lg z-50 flex flex-col p-4">
          <button
            className="self-end p-2 rounded-md bg-accent hover:bg-accent/20 transition"
            onClick={toggleMenu}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center gap-4 my-4 w-full bg-primary">
            {navItems.map((item) => {
              const isActive = activeTab === item.name.toLowerCase();
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-5 px-4 rounded-md w-full text-center text-sm hover:bg-gray-700 transition ${
                    isActive ? "bg-[#2E1219]" : ""
                  }`}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

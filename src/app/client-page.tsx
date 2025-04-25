"use client";

import Header from '@/components/global-components/Overall/Header';
import Navigation from '@/components/global-components/Overall/Navigation';
import BotStatus from '@/components/global-components/Bots/BotStatus';
import BotTabs from '@/components/global-components/Bots/BotTabs';
import BotOptions from '@/components/global-components/Bots/BotOptions';
import TourModal from '@/components/global-components/Tours/TourModal';
import RiskDisclaimer from '@/components/global-components/Overall/RiskDisclaimer';
import BotStats from '@/components/global-components/Bots/BotStats';
import RunStats from '@/components/global-components/Overall/RunStats';

export default function ClientPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Navigation activeTab="dashboard" />
      <BotStatus />

      <div className="container mx-auto p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-center my-6 sm:my-8">
          Load or build your bot
        </h1>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto">
          Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy.
        </p>

        <div className="max-w-full sm:max-w-4xl w-full md:mx-auto">
          <div className="bg-white rounded-lg shadow">
            <BotTabs />

            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-2 items-center">
                  <button className="text-[#4e1522] font-medium hover:opacity-80">
                    Hit Run
                  </button>
                  <span className="text-gray-400 text-sm sm:text-base">
                    to use your bot&apos;s functionality.
                  </span>
                </div>
              </div>

              <BotOptions />

              <div className="max-w-full sm:max-w-md mx-auto">
                <RunStats />
                <BotStats />
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 sm:mt-8">
                <button className="px-4 sm:px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 sm:px-6 py-2 bg-[#4e1522] text-white rounded hover:opacity-90">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TourModal />
      <RiskDisclaimer />
    </main>
  );
}

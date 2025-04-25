"use client";

import Header from '@/components/global-components/Overall/Header';
import Navigation from '@/components/global-components/Overall/Navigation';
import BotStatus from '@/components/global-components/Bots/BotStatus';
import RiskDisclaimer from '@/components/global-components/Overall/RiskDisclaimer';

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Navigation activeTab="dashboard" />
      <BotStatus />

      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold my-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Recent Bot Activity</h2>
            <div className="text-gray-500 text-center py-8">
              <p>No recent activity</p>
              <p className="mt-2 text-sm">Create or run a bot to see activity here</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Account Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Account balance</span>
                <span className="font-medium">0.00 AUD</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Active bots</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-600">Total trades</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Profit/Loss</span>
                <span className="font-medium">0.00 AUD</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 text-[#4e1522]"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">Create Bot</span>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 text-[#4e1522]"
                >
                  <path
                    d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">View Strategies</span>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 text-[#4e1522]"
                >
                  <path
                    d="M12 17V17.01M12 4L19 9V17.5C19 17.8978 18.842 18.2794 18.5607 18.5607C18.2794 18.842 17.8978 19 17.5 19H6.5C6.10218 19 5.72064 18.842 5.43934 18.5607C5.15804 18.2794 5 17.8978 5 17.5V9L12 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">Risk Management</span>
              </button>

              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 text-[#4e1522]"
                >
                  <path
                    d="M7.5 4.5H16.5M7.5 19.5H16.5M7 4.5H17C19.4853 4.5 21.5 6.51472 21.5 9V15C21.5 17.4853 19.4853 19.5 17 19.5H7C4.51472 19.5 2.5 17.4853 2.5 15V9C2.5 6.51472 4.51472 4.5 7 4.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm">Deposit/Withdraw</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <RiskDisclaimer />
    </main>
  );
}

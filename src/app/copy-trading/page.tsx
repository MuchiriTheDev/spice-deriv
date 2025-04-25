"use client";

import StartTrading from "@/components/copy-trading-components/trade";
import Header from "@/components/global-components/Overall/Header";
import Navigation from "@/components/global-components/Overall/Navigation";
import React, { useState } from "react";

export default function CopyTradingPage() {
    const [ activePart, setActivePart ] = useState(1);
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Navigation activeTab="copy trading" />
            <div className="container mx-auto p-6">
                <div className="my-3 flex  items-center justify-center">
                    <div className="flex w-fit bg-gray-200 rounded-lg  gap-3 p-2 justify-center items-center my-3">
                        <div className={`text-base cursor-pointer font-medium text-primary-foreground p-3 rounded-md px-6 ${activePart === 1 ? "bg-white" : ""}`} onClick={() => setActivePart(1)}>
                            Copy
                        </div>
                        <div className={`text-base cursor-pointer font-medium text-primary-foreground p-3  rounded-md px-6 ${activePart === 2 ? "bg-white" : ""}`} onClick={() => setActivePart(2)}>
                            Trade
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {activePart === 1 ? (
                        <div className="text-2xl font-bold">Copy Trading</div>
                    ) : (
                        <StartTrading />
                    )}
                </div>
            </div>
        </main>
    );
}
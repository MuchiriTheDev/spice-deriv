"use client";

import React, { useState } from "react";
import { BookOpen, HelpCircle } from "lucide-react";
import Header from "@/components/global-components/Overall/Header";
import Navigation from "@/components/global-components/Overall/Navigation";
import FAQComponent from "@/components/tutorial-components/faq";
import Guidance from "@/components/tutorial-components/guide";

export default function TutorialsPage() {
    const [activeSection, setActiveSection] = useState<"guides" | "faqs">("guides");

    const sections = [
        { name: "Guides", value: "guides", icon: <BookOpen className="w-5 h-5 mr-2" /> },
        { name: "FAQs", value: "faqs", icon: <HelpCircle className="w-5 h-5 mr-2" /> },
    ];

    return (
        <main className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <Navigation activeTab="tutorials" />
            <div className="flex flex-col lg:flex-row w-full my-3 lg:my-6 px-4 lg:px-8 h-[calc(100vh-10rem)]">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-4 h-auto lg:h-full mb-4 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Sections</h2>
                    <ul className="space-y-2">
                        {sections.map((section) => (
                            <li key={section.value}>
                                <button
                                    onClick={() => setActiveSection(section.value)}
                                    className={`flex items-center w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                        activeSection === section.value
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {section.icon}
                                    {section.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <section className="w-full bg-white rounded-lg shadow p-4 overflow-y-auto h-full">
                    {activeSection === "guides" && <Guidance />}
                    {activeSection === "faqs" && <FAQComponent />}
                </section>
            </div>
        </main>
    );
}

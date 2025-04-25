import Header from "@/components/global-components/Overall/Header";
import Navigation from "@/components/global-components/Overall/Navigation";

export default function CopyTradingPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Navigation activeTab="copy trading" />
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-semibold text-center my-8">Copy Trading</h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Use this tool to copy trading strategies from other traders.
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-6">
                        {/* Copy Trading Tool Content Goes Here */}
                        <p>Copy trading tool content will be implemented here.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
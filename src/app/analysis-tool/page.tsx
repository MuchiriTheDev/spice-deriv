import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function AnalysisToolPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Navigation activeTab="analysis tools" />
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-semibold text-center my-8">Analysis Tool</h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Use this tool to analyze your trading strategies and make informed decisions.
                </p>
        
                <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    {/* Analysis Tool Content Goes Here */}
                    <p>Analysis tool content will be implemented here.</p>
                </div>
                </div>
            </div>
        </main>
    );
}
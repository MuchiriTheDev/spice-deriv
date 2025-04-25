import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function FreeBotsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Navigation activeTab="free bots" />
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-semibold text-center my-8">Free Bots</h1>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Explore our collection of free bots to enhance your trading experience.
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-6">
                        {/* Free Bots Content Goes Here */}
                        <p>Free bots content will be implemented here.</p>
                    </div>
                </div>
            </div>  
        </main>
    );
}
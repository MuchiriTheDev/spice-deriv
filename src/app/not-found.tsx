import { AlertTriangle } from "lucide-react";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary-foreground via-gray-800 to-primary text-foreground">
            <div className="flex flex-col items-center p-8 ">
                <AlertTriangle className="w-20 h-20 text-red-500 mb-6 animate-pulse" />
                <h1 className="text-5xl font-extrabold text-white tracking-wider">
                    404 
                </h1>
                <h2 className="text-2xl font-semibold text-gray-200 mt-2">Page Not Found</h2>
                <p className="mt-4 text-lg text-gray-400 text-center">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <p className="mt-2 text-sm text-gray-500 text-center">
                    If you think this is a mistake, please contact support.
                </p>
                <a
                    href="/"
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-600 transition-transform transform hover:scale-105"
                >
                    Go Back Home
                </a>
                <div className="mt-6 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
"use client";
import { useEffect, useState } from "react";

export default function VerifyPage() {
  const [countDown, setCountDown] = useState(180);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown((prevCountDown) => {
//         if (prevCountDown === 0) {
//           window.location.href = "/";
//           return prevCountDown;
//         }

//         return prevCountDown - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center ">
      <div className="bg-white/70 p-12 max-w-2xl mx-auto rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-primary-foreground">
            SpiceDeriv.com
          </h1>
        </div>
        <p className="text-md text-center text-gray-700 mt-4">
          You have been verified as a <span className="text-primary font-extrabold">SpiceDeriv</span>{" "}
          user! You have access to all the features of the platform and lastly you have connected your deriv account to the SpiceDeriv platform.
        </p>
        <p className="text-base text-center text-gray-600 mt-5">
          Redirecting to the homepage in <strong>{countDown}</strong> seconds.{" "}
        </p>
        <div className="flex items-center justify-center mt-6 w-full">
          <button
            className="text-white px-6 py-3 bg-primary-foreground rounded-lg shadow-lg font-bold hover:underline"
            onClick={handleGoHome}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

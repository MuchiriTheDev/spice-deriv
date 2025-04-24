"use client";

import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

export default function RiskDisclaimer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button className="risk-disclaimer cursor-pointer fixed bottom-0 w-full" onClick={() => setIsOpen(true)}>
      <AlertCircle className="w-6 h-6" />
      Risk Disclaimer
    </button>

    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full z-10 p-4 bg-black/50 flex justify-center items-center" id="risk-disclaimer-popup">
        <div className=" bg-white max-w-2xl rounded-lg p-4 shadow-lg ">
         <div className="flex justify-between items-center p-3 border-b-2 border-gray-500">
            <h1 className="text-lg font-bold">
              Risk Disclaimer
            </h1>
            <button className="" onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
         </div>

          <div className="mt-3 text-lg font-medium">
            <p className="">Deriv offers complex derivatives, such as options and contracts for difference (“CFDs”).</p>
            <p className="mt-2">These products may not be suitable for all clients, and trading them puts you at risk.</p>
            <p className="mt-2">
              Please make sure that you understand the following risks before trading Deriv products:
            </p>
            <ul className="list-disc pl-8 mt-2">
              <li className="mb-1">You may lose some or all of the money you invest in the trade.</li>
              <li className="mb-1">If your trade involves currency conversion, exchange rates will affect your profit and loss.</li>
              <li className="mb-1">You should never trade with borrowed money or with money that you cannot afford to lose.</li>
            </ul>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

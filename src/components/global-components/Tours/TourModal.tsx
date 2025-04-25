"use client";

import { useState } from 'react';

export default function TourModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      closeModal();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleStart = () => {
    handleNext();
  };

  const handleSkip = () => {
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Get started on Mkorean WWN</h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          {step === 1 ? (
            <>
              <p className="text-center mb-4">Hi! Hit <strong>Start</strong> for a quick tour.</p>
            </>
          ) : (
            <>
              <div className="text-center mb-4">
                <p className="text-lg font-medium">{step}/{totalSteps}</p>
                <h4 className="font-semibold text-lg mt-2">Use these shortcuts</h4>
              </div>
              <p className="text-center mb-4">
                You can also import or build your bot using any of these shortcuts.
              </p>
            </>
          )}
        </div>

        <div className="flex justify-between">
          {step === 1 ? (
            <>
              <button
                onClick={handleSkip}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Skip
              </button>
              <button
                onClick={handleStart}
                className="px-6 py-2 bg-[#4e1522] text-white rounded hover:opacity-90"
              >
                Start
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handlePrevious}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-[#4e1522] text-white rounded hover:opacity-90"
              >
                {step === totalSteps ? 'Finish' : 'Next'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

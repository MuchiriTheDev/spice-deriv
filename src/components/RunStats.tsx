export default function RunStats() {
  return (
    <div className="flex justify-between items-center mt-8 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">What's this?</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 17H12.01M10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5V14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm text-gray-600">No. of runs</p>
        <p className="text-2xl font-semibold text-center">0</p>
      </div>
    </div>
  );
}

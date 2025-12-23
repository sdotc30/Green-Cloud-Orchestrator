import { Globe } from "lucide-react";

// In a real app, these could be derived from the region data,
// but hardcoding common zones is fine for this phase.
const zones = [
  { value: "Europe", label: "Europe" },
  { value: "North America", label: "North America" },
  // Add other zones as needed based on regionData.js
];

function AvailabilityZoneSelector({ value, onChange, disabled }) {
  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Availability Zone
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-brand-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-gray-700 font-medium appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select Zone</option>
          {zones.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Globe className="w-5 h-5 text-brand-600" />
        </div>
      </div>
    </div>
  );
}

export default AvailabilityZoneSelector;

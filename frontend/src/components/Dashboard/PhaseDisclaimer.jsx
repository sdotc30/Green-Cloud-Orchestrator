import { AlertTriangle } from "lucide-react";

function PhaseDisclaimer() {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-300 animate-fade-in">
      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
      <p className="text-sm text-gray-900">
        <span className="font-semibold">Phase-1</span> uses real-time dynamic data and real-time carbon metrics. Real-time ingestion and live routing are planned for{" "}
        <span className="font-semibold">Phase-2</span>.
      </p>
    </div>
  );
}

export default PhaseDisclaimer;

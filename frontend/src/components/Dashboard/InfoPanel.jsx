import { Info, Calculator, Leaf, Activity, Percent } from "lucide-react";

function InfoPanel() {
  return (
    <div
      className="rounded-xl border bg-white shadow-card animate-slide-up"
      style={{ animationDelay: "300ms" }}
    >
      <details className="group">
        {/* Accordion Trigger */}
        <summary className="flex items-center gap-3 px-6 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
          <div className="p-2 rounded-lg bg-green-100">
            <Info className="w-5 h-5 text-green-600" />
          </div>
          <span className="font-bold text-xl text-gray-900">
            How is the Green Score calculated?
          </span>
        </summary>

        {/* Accordion Content */}
        <div className="px-6 pb-6">
          <div className="space-y-6 mt-4">
            {/* Formula */}
            <div className="p-6 rounded-xl bg-green-50 border border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg text-gray-900">Formula</span>
              </div>
              <code className="block p-4 rounded-lg bg-white text-lg font-mono font-medium text-gray-800 shadow-sm border border-gray-100">
                Green Score = Carbon Intensity × PUE
              </code>
            </div>

            {/* Explanation items */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <Leaf className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-gray-900 mb-1">Carbon Intensity</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    gCO₂ emitted per kWh of electricity in the region's grid
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <Activity className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-gray-900 mb-1">
                    PUE (Power Usage Effectiveness)
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ratio of total facility energy to IT equipment energy
                    (lower is better)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <Percent className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-gray-900 mb-1">Renewable Percentage</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Shown for context only; not included in Green Score
                    calculation
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <Calculator className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-base text-gray-900 mb-1">Workload Normalization</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    All calculations normalized to 1 unit of workload
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base text-gray-700 border-l-4 border-green-500 pl-4 py-1">
              <strong className="text-green-800">Note:</strong> Routing is simulated in Phase-1. Lower Green
              Score indicates a more sustainable cloud region choice.
            </p>
          </div>
        </div>
      </details>
    </div>
  );
}

export default InfoPanel;

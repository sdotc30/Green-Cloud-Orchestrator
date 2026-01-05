import { Zap, Globe, Cloud, TreeDeciduous } from "lucide-react";

const ImpactStats = () => {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-green-100/80 to-green-50 border border-green-200 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl px-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <Globe className="w-6 h-6 text-green-700" />
            Why Green Cloud Matters?
          </h2>
          <p className="text-gray-700 leading-relaxed text-base font-medium">
            Data centers currently consume about <span className="font-bold text-green-800 bg-green-200/50 px-1 rounded">3% of global electricity</span>,
            contributing heavily to carbon emissions. By routing tasks to eco-friendly zones, we can significantly reduce this digital footprint.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 w-full md:w-auto">
          <div className="p-5 bg-white rounded-xl border border-green-200 shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <Cloud className="w-8 h-8 text-blue-500 mb-3" />
            <span className="text-3xl font-extrabold text-gray-900">1%</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Global CO₂ Output</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-green-200 shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <TreeDeciduous className="w-8 h-8 text-green-600 mb-3" />
            <span className="text-3xl font-extrabold text-gray-900">~20%</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Potential Savings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

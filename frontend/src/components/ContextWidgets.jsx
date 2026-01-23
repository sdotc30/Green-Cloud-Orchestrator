import { Factory, Globe, Users, CloudCog, Zap, TrendingDown } from "lucide-react";

const ContextWidgets = () => {
    return (
        <section className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Widget 1: Why Green Cloud? */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300 border border-gray-100 group">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4 group-hover:text-green-700 transition-colors">
                        <Factory className="w-6 h-6 text-red-500" />
                        The Climate Crisis
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        In Dublin, data centers consume <span className="font-bold text-gray-900 bg-red-50 px-1 rounded">~18% of all electricity</span>, putting massive strain on the grid.
                        Globally, the cloud's carbon footprint roughly matches the aviation industry.
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-6 border-t border-gray-100">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">Urgent Action Needed</span>
                </div>
            </div>

            {/* Widget 2: Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 border border-gray-100 group">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4 group-hover:text-blue-700 transition-colors">
                        <Users className="w-6 h-6 text-blue-500" />
                        Who is this for?
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Designed for <span className="font-bold text-gray-900 bg-blue-50 px-1 rounded">Cloud Service Providers (CSPs)</span> managing hybrid and public clouds.
                        We help you dynamically route workloads to the cleanest energy zones available.
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-6 border-t border-gray-100">
                    <CloudCog className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">For Sustainable Operations</span>
                </div>
            </div>

            {/* Widget 3: Simulator Link */}
            <div
                onClick={() => window.location.href = '/simulator'}
                className="md:col-span-2 bg-gradient-to-r from-white to-green-50/50 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-300 border border-green-100 group cursor-pointer relative overflow-hidden"
            >
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-3 group-hover:text-green-700 transition-colors">
                            <Zap className="w-6 h-6 text-green-500 fill-green-100" />
                            Simulate Impact
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            Visualize how shifting workloads to renewable-heavy regions can drastically reduce carbon emissions.
                            The interactive simulator uses real-time carbon intensity data.
                        </p>
                    </div>

                    <div className="mt-auto md:mt-0 shadow-lg shadow-green-200/50 rounded-xl">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all transform group-hover:scale-105 active:scale-95">
                            <TrendingDown className="w-5 h-5" />
                            Estimate Savings
                        </button>
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/20 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-green-100/40" />
            </div>
        </section>
    );
};

export default ContextWidgets;

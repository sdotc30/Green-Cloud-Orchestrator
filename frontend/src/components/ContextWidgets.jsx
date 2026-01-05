import { Factory, Globe, Users, CloudCog } from "lucide-react";

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
        </section>
    );
};

export default ContextWidgets;

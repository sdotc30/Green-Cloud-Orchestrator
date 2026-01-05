import { Check } from "lucide-react";

const Pricing = () => {
    const tiers = [
        {
            name: "Free / Demo",
            price: "₹0",
            description: "Best for: Students, demos, reviewers",
            features: [
                "Single cloud provider",
                "Limited regions (e.g., up to 3)",
                "Static carbon & latency data",
                "Basic green score calculation",
                "Region recommendation (simulated)",
                "No history or export",
            ],
            purpose: "Let users understand the concept and trust the logic.",
            cta: "Current Plan",
            active: true,
        },
        {
            name: "Starter / Individual",
            price: "₹499",
            period: "/month",
            description: "Best for: Developers, small teams",
            features: [
                "Single cloud provider",
                "Up to 5–8 regions",
                "Multiple workload types",
                "Carbon + latency comparison",
                "Carbon savings visualization",
                "Decision explanation panel",
                "Limited monthly requests (e.g., 500–1,000)",
            ],
            value: "Personal or small-scale carbon-aware routing decisions.",
            cta: "Get Starter",
            active: false,
        },
        {
            name: "Pro / Team",
            price: "₹1,999",
            period: "/month",
            description: "Best for: Startups, SaaS teams",
            features: [
                "Multiple cloud providers",
                "Unlimited regions (user-defined)",
                "Advanced workload profiles",
                "Custom green vs speed weighting",
                "Decision history & analytics",
                "Monthly carbon impact reports",
                "API access (rate-limited)",
            ],
            value: "Operational sustainability + measurable impact.",
            cta: "Get Pro",
            active: false,
        },
        {
            name: "Enterprise",
            price: "₹4,499",
            period: "/month",
            description: "Best for: Large organizations",
            features: [
                "Multi-cloud support",
                "Real-time carbon data integration",
                "Custom latency models",
                "Compliance-aware region filtering",
                "API & webhook integration",
                "SLA-backed availability",
                "Dedicated support & onboarding",
                "Custom reporting & dashboards",
            ],
            value: "Production-grade carbon-aware decision support.",
            cta: "Contact Us",
            active: false,
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-100/50 rounded-full blur-3xl -z-10" />

            <div className="text-center mb-16">
                <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Flexible Plans</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Simple Pricing</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Choose the right plan to optimize your cloud carbon footprint.
                </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={`flex flex-col p-8 rounded-3xl transition-all duration-300 relative group ${tier.active
                            ? "bg-white shadow-2xl shadow-green-200 ring-4 ring-green-50 scale-105 z-10"
                            : "bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:border-green-200 hover:-translate-y-1"
                            }`}
                    >
                        {tier.active && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                                POPULAR
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{tier.description}</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{tier.price}</span>
                            {tier.period && (
                                <span className="text-sm text-gray-500 font-medium">{tier.period}</span>
                            )}
                        </div>

                        <button
                            className={`w-full py-4 rounded-xl font-bold text-sm mb-8 transition-all duration-300 shadow-sm ${tier.active
                                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-200 hover:scale-[1.02]"
                                : "bg-gray-50 text-gray-900 hover:bg-green-50 hover:text-green-700"
                                }`}
                        >
                            {tier.cta}
                        </button>

                        <div className="flex-1 space-y-4 mb-8">
                            {tier.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                                    <div className={`p-1 rounded-full flex-shrink-0 mt-0.5 ${tier.active ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500 transition-colors'}`}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="leading-snug">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {(tier.purpose || tier.value) && (
                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <p className="text-xs text-gray-500 italic text-center">
                                    "{tier.purpose || tier.value}"
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;

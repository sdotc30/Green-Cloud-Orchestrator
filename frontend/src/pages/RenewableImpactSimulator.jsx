import { useEffect, useState } from "react";
import { Leaf, Info } from "lucide-react";
import { AWS_REGIONS } from "../../constants/regions";
import { fetchCarbonIntensity } from "../services/api";

export default function RenewableImpactSimulator() {
    const [provider, setProvider] = useState("AWS");
    // Sort regions by name for better UX
    const sortedRegions = [...AWS_REGIONS].sort((a, b) => a.name.localeCompare(b.name));
    const [dataCenters, setDataCenters] = useState(sortedRegions);
    const [selectedDC, setSelectedDC] = useState(sortedRegions[0]);

    const [carbonIntensity, setCarbonIntensity] = useState(null);
    const [renewablePercentage, setRenewablePercentage] = useState(0);
    const [loading, setLoading] = useState(false);

    /* ===============================
       FETCH REAL-TIME DATA
       =============================== */
    useEffect(() => {
        async function fetchCarbonData() {
            if (!selectedDC) return;

            try {
                setLoading(true);
                // Usage of shared API service
                const results = await fetchCarbonIntensity([selectedDC.id]);

                if (results && results.length > 0) {
                    const data = results[0];
                    setCarbonIntensity(data.carbonIntensity);
                    // regionData.js uses lowercase 'renewablepercent', checking consistency
                    setRenewablePercentage(data.renewablepercent || 0);
                }
            } catch (e) {
                console.error("API error", e);
            } finally {
                setLoading(false);
            }
        }

        fetchCarbonData();
    }, [selectedDC]);

    /* ===============================
       CALCULATIONS
       =============================== */

    const originalEmission =
        carbonIntensity !== null
            ? carbonIntensity * selectedDC.pue
            : 0;

    const adjustedEmission =
        carbonIntensity !== null
            ? carbonIntensity *
            (1 - renewablePercentage / 100) *
            selectedDC.pue
            : 0;

    const reduction =
        originalEmission > 0
            ? ((originalEmission - adjustedEmission) / originalEmission) * 100
            : 0;

    /* ===============================
       HELPER: COLOR SCHEME
       =============================== */
    const getColorScheme = (pct) => {
        if (pct <= 20) return "red";
        if (pct <= 60) return "yellow";
        return "green";
    };

    const currentScheme = getColorScheme(renewablePercentage);

    const getFillColor = (scheme) => {
        switch (scheme) {
            case "red": return "linear-gradient(135deg, #ef4444, #991b1b)"; // red-500 to red-800
            case "yellow": return "linear-gradient(135deg, #eab308, #854d0e)"; // yellow-500 to yellow-800
            case "green": return "linear-gradient(135deg, #22c55e, #14532d)"; // green-500 to green-900
            default: return "linear-gradient(135deg, #22c55e, #14532d)";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

                {/* HEADER */}
                <header className="text-center space-y-3">
                    <div className="flex justify-center items-center gap-3">
                        <div className="p-3 bg-green-500 rounded-xl">
                            <Leaf className="text-white w-7 h-7" />
                        </div>
                        <h1 className="text-3xl font-bold text-green-700">
                            Renewable Impact Simulator
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        Simulate carbon reduction by increasing renewable energy usage
                    </p>
                </header>

                {/* CONFIGURATION */}
                <div className="bg-white p-6 rounded-xl shadow border space-y-6">

                    {/* CSP DROPDOWN */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Cloud Service Provider
                        </label>
                        <select
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="AWS">AWS</option>
                            {/* Add others when available in constants */}
                        </select>
                    </div>

                    {/* DATA CENTER DROPDOWN */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Data Center Region
                        </label>
                        <select
                            value={selectedDC.id}
                            onChange={(e) =>
                                setSelectedDC(
                                    dataCenters.find((dc) => dc.id === e.target.value)
                                )
                            }
                            className="w-full p-3 border rounded-lg"
                        >
                            {dataCenters.map((dc) => (
                                <option key={dc.id} value={dc.id}>
                                    {dc.name} (PUE {dc.pue})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                                Renewable Energy Percentage
                            </span>
                            <span className={`font-bold transition-colors duration-300
                                ${currentScheme === "red" ? "text-red-600" :
                                    currentScheme === "yellow" ? "text-yellow-600" :
                                        "text-green-600"
                                }`}>
                                {renewablePercentage}%
                            </span>
                        </div>
                        <style>{`
                            input[type=range]::-webkit-slider-thumb {
                                -webkit-appearance: none;
                                height: 16px;
                                width: 16px;
                                border-radius: 50%;
                                background: var(--thumb-color);
                                cursor: pointer;
                                margin-top: -4px;
                                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                            }
                            input[type=range]::-moz-range-thumb {
                                height: 16px;
                                width: 16px;
                                border-radius: 50%;
                                background: var(--thumb-color);
                                cursor: pointer;
                                border: none;
                                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                            }
                            input[type=range]::-webkit-slider-runnable-track {
                                width: 100%;
                                height: 8px;
                                cursor: pointer;
                                background: transparent; 
                                border-radius: 8px;
                            }
                        `}</style>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={renewablePercentage}
                            onChange={(e) =>
                                setRenewablePercentage(Number(e.target.value))
                            }
                            className="w-full appearance-none rounded-lg cursor-pointer focus:outline-none"
                            style={{
                                height: '8px',
                                "--thumb-color": getFillColor(currentScheme),
                                background: `
                                    linear-gradient(to right, transparent ${renewablePercentage}%, #e5e7eb ${renewablePercentage}%),
                                    linear-gradient(to right, 
                                        #ef4444 0%, 
                                        #ef4444 15%, 
                                        #eab308 25%, 
                                        #eab308 50%, 
                                        #22c55e 65%, 
                                        #16a34a 100%)
                                `
                            }}
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Adjust this slider to simulate adding more renewable energy sources to this region.
                        </p>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Result title="Original Emission" value={originalEmission} />
                    <Result title="Adjusted Emission" value={adjustedEmission} colorScheme={currentScheme} />
                    <Result title="Reduction" value={`${reduction.toFixed(1)}%`} />
                </div>

                {loading && <p className="text-center text-gray-500 animate-pulse">Fetching live carbon data...</p>}

                {/* EXPLANATION */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-3">
                    <Info className="text-blue-600 w-5 h-5 mt-1" />
                    <p className="text-sm text-blue-800">
                        Carbon intensity and renewable share are fetched in real time from
                        Electricity Maps via our backend. The slider simulates increased renewable adoption
                        assuming near-zero operational emissions.
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ===============================
   RESULT CARD
   =============================== */

function Result({ title, value, colorScheme = "default" }) {
    const styles = {
        default: "bg-white border-gray-200",
        green: "bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-green-800",
        yellow: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-800",
        red: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 text-red-800",
    };

    return (
        <div
            className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${styles[colorScheme] || styles.default}`}
        >
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-3xl font-bold">
                {typeof value === "number" ? value.toFixed(2) : value}
            </p>
        </div>
    );
}
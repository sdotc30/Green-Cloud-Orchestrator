import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BarChart3 } from "lucide-react";

function GreenScoreChart({ regions, selectedRegionId }) {
  const chartData = regions
    .map((r) => ({
      name: `${r.provider} ${r.regionName.split(" ")[0]}`,
      fullName: `${r.provider} - ${r.regionName}`,
      greenScore: r.greenScore,
      id: r.id,
    }))
    .sort((a, b) => a.greenScore - b.greenScore);

  return (
    <div
      className="rounded-xl border bg-white shadow-card animate-slide-up"
      style={{ animationDelay: "200ms" }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <BarChart3 className="w-5 h-5 text-brand-600" />
          Green Score Comparison
        </h3>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 13, fill: "#374151", fontWeight: "bold" }}
              angle={-45}
              textAnchor="end"
              height={60}
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 14, fill: "#374151", fontWeight: "bold" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Green Score",
                angle: -90,
                position: "insideLeft",
                style: {
                  fontSize: 14,
                  fill: "#374151",
                  fontWeight: "bold",
                },
              }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white border rounded-lg shadow-lg p-3">
                      <p className="font-medium text-sm">{data.fullName}</p>
                      <p className="text-brand-600 font-bold">
                        Green Score: {data.greenScore.toFixed(1)}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="greenScore" radius={[6, 6, 0, 0]}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.id}
                  fill={
                    entry.id === selectedRegionId
                      ? "#10b981" // brand-500
                      : "rgba(107,114,128,0.3)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <p className="text-sm font-bold text-gray-600 text-center mt-2">
          Lower Green Score = Lower Carbon Footprint
        </p>
      </div>
    </div>
  );
}

export default GreenScoreChart;

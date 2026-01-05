import { REGION_LOOKUP } from "/constants/regions";

export function generateCloudRegions(apiData) {
  if (!apiData || !Array.isArray(apiData)) return [];

  return apiData.map((dataItem) => {

    const meta = REGION_LOOKUP[dataItem.regionCode] || {
      name: dataItem.regionCode,
      zone: "Unknown",
      pue: 1.2,
    };

    const intensity = dataItem.carbonIntensity;
    const pue = meta.pue || 1.2;
    const greenScore = intensity * pue;
    const estimatedRenewable = dataItem.renewablepercent || 0;

    return {
      id: dataItem.regionCode,

      provider: "AWS",

      regionName: meta.name || dataItem.regionCode,

      zone: meta.zone || "Unknown",
      carbonIntensity: intensity,
      pue: pue,
      greenScore: parseFloat(greenScore.toFixed(1)),
      renewablePercentage: Math.round(estimatedRenewable),

      estimatedLatency: dataItem.estimatedLatency || 0,
    };
  });
}

export const taskTypeOptions = [
  { value: "green", label: "Green Optimized", description: "Prioritize low carbon footprint", icon: "🌱" },
  { value: "balanced", label: "Balanced", description: "Balance sustainability and performance", icon: "⚖️" },
  { value: "performance", label: "Performance Optimized", description: "Prioritize low latency", icon: "🚀" },
];

// ------------------------------------------------------------------
// 2. THE LOGIC: Smart Sorting
// ------------------------------------------------------------------
export function selectOptimalRegion(regions, taskType) {
  if (!regions || regions.length === 0) return null;

  const getSortableLatency = (latency) => {
    return (!latency || latency <= 0) ? 999999 : latency;
  };

  const sortedRegions = [...regions].sort((a, b) => {
    switch (taskType) {
      case "green":
        return a.greenScore - b.greenScore;
      case "performance": {
        const latA = getSortableLatency(a.estimatedLatency);
        const latB = getSortableLatency(b.estimatedLatency);
        return latA - latB;
      }

      case "balanced": {
        const validLatencies = regions
          .map(r => r.estimatedLatency)
          .filter(l => l > 0);

        const maxGreen = Math.max(...regions.map((r) => r.greenScore)) || 1;
        const maxLatency = Math.max(...validLatencies, 1);

        const getScore = (region) => {
          const lat = getSortableLatency(region.estimatedLatency);

          if (lat >= 999999) return 1000;

          return ((region.greenScore / maxGreen) * 0.5) +
            ((lat / maxLatency) * 0.5);
        };

        return getScore(a) - getScore(b);
      }

      default:
        return a.greenScore - b.greenScore;
    }
  });

  return sortedRegions[0];
}

export function calculateCarbonSavings(selectedRegion, regions) {
  if (!selectedRegion || !regions || regions.length === 0) return 0;

  const maxGreenScore = Math.max(...regions.map((r) => r.greenScore));
  if (maxGreenScore === 0) return 0;

  const savings = ((maxGreenScore - selectedRegion.greenScore) / maxGreenScore) * 100;
  return Math.round(savings);
}
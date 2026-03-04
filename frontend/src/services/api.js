const API_BASE = import.meta.env.VITE_API_BASE;
import axios from "axios";

/* ===============================
   EXISTING FUNCTION (UNCHANGED)
   =============================== */
export async function fetchCarbonIntensity(selectedZones, provider = "AWS") {
  try {
    const regions = Array.isArray(selectedZones)
      ? selectedZones
      : [selectedZones];

    const apiCalls = regions.map(async (regionValue) => {
      const response = await axios.post(`${API_BASE}/api/carbon-footprint`, {
        regionValue,
        provider,
      });
      return response.data;
    });

    return await Promise.all(apiCalls);
  } catch (error) {
    console.error("API Error:", error.message);
    return [];
  }
}

/* ===============================
   NEW: ML EMISSION PREDICTION
   =============================== */
export async function predictEmissionML({
  carbonIntensity,
  renewablePercentage,
  pue,
  workload = 1,
}) {
  try {
    const response = await axios.post(`${API_BASE}/api/ml/predict-emission`, {
      carbon_intensity: carbonIntensity,
      renewable_percentage: renewablePercentage,
      pue,
      workload,
    });

    return response.data.predictedEmission;
  } catch (error) {
    console.error("ML Prediction Error:", error.message);
    return null;
  }
}

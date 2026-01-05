/**
 * Measures the Round Trip Time (RTT) to a target URL.
 * Uses a 'no-cors' HEAD request to avoid blocking errors.
 * * @param {string} url - The endpoint to ping
 * @returns {Promise<number>} - Latency in milliseconds (or 0 if unreachable)
 */
export const measureLatency = async (url) => {
  if (!url) return 0;
  const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  try {
    await fetch(cleanUrl, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
    const start = performance.now();

    await fetch(cleanUrl, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });

    const end = performance.now();
    return Math.round(end - start);

  } catch (error) {
    return 0;
  }
};
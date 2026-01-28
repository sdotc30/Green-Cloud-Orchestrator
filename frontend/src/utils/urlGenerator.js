export const getPingUrl = (regionCode, provider = "AWS") => {
    if (!regionCode) return null;

    // Provider-specific ping URLs
    if (provider === "GCP") {
        // GCP regional endpoints for latency testing
        // Using Cloud Run API which has regional endpoints
        return `https://${regionCode}-run.googleapis.com/apis/run.googleapis.com/v1`;
    }

    // Default: AWS DynamoDB endpoint
    const regionUrl = `https://dynamodb.${regionCode}.amazonaws.com`;
    return regionUrl;
}
const { URL } = require("url");

function analyzeURL(inputUrl) {
    let result = {
        isValid: true,
        usesHTTPS: false,
        suspicious: false,
        reasons: []
    };

    try {
        const parsed = new URL(inputUrl);

        // HTTPS check
        if (parsed.protocol === "https:") {
            result.usesHTTPS = true;
        } else {
            result.suspicious = true;
            result.reasons.push("Not using HTTPS");
        }

        // Suspicious words
        const words = ["login", "verify", "account", "secure", "update"];
        words.forEach(word => {
            if (parsed.href.includes(word)) {
                result.suspicious = true;
                result.reasons.push(`Contains: ${word}`);
            }
        });

        // IP address check
        const ipPattern = /(\d{1,3}\.){3}\d{1,3}/;
        if (ipPattern.test(parsed.hostname)) {
            result.suspicious = true;
            result.reasons.push("Using IP instead of domain");
        }

    } catch {
        result.isValid = false;
        result.suspicious = true;
        result.reasons.push("Invalid URL");
    }

    return result;
}

module.exports = { analyzeURL };
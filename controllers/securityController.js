const { analyzeURL } = require("../utils/urlAnalyzer");

exports.checkURL = (req, res) => {
    const { url } = req.body;

    const result = analyzeURL(url);

    res.json({
        success: true,
        data: result
    });
};
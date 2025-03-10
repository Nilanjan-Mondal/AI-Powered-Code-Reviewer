const {generateContent} = require("../services/ai.service");

const getReview = async (req, res) => { 

    const code = req.body.code;
    
    if(!code) {
        return res.status(400).json({ 
            message: "Prompt is required" 
        });
    }
    try {
        const response = await generateContent(code);
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            message: error.message || "An unexpected error occurred",
            success: false,
            data:{},
            error: error
        });
        
    }
}

module.exports = {
    getReview
}
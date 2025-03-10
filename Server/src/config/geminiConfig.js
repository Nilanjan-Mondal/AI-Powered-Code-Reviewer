const dotenv = require('dotenv');
dotenv.config();

// Here we are exporting all the env variables that the project uses
module.exports = {
    GOOGLE_GEMINI_API: process.env.GOOGLE_GEMINI_API,
}
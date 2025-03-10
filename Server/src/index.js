const express = require('express');
const cors = require('cors')
const aiRoutes = require('./routes/ai.routes');

const ServerConfig = require('./config/serverConfig');
// const connectDB = require('./config/dbConfig');

const app = express();

app.use(cors());app.use(cors({
    origin: "*", // Replace with your client's origin for production
    // origin: "http://localhost:5174", // Replace with your client's origin for localhost
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the methods you need
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.json({message: "Hello World!"});
})

app.use('/ai', aiRoutes);


app.listen(ServerConfig.PORT, async () => {
    // await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
});
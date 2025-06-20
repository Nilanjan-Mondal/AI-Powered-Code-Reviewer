const express = require('express');
const cors = require('cors')
const aiRoutes = require('./routes/ai.routes');

const ServerConfig = require('./config/serverConfig');

const app = express();

app.use(cors());app.use(cors({
    origin: "*", // Replace with your client's origin for production
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
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
});
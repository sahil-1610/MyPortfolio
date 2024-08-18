const express = require("express");
const app = express();
require("dotenv").config();
const {dbConnect} = require("./config/database");
const routes = require("./routes/user");
const cors = require("cors");


const PORT = process.env.port || 4000;

app.use(cors());
app.use(express.json());


// database connect
dbConnect();

// mounting routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your  PORTFOLIO server is up and running ...",
    });
});

// listening 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
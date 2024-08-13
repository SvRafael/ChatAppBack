const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Routes/userRoute")

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)

app.get("/", (req,res) => {
    res.send("Welcome our chat api!")
});

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log("Server running!");
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(() => {
    console.log("DB Connected...")
}).catch((erros) => {
    console.log("DB Connection failed: ", erros.message)
})


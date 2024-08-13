const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

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


const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv");
const pageRouter = require("./routes/page-route");
dotenv.config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/", pageRouter)

app.listen(PORT, () => {
    console.log(`Server is run in http://localhost:${PORT}/`)
})
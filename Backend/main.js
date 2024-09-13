const express = require("express");
const cors = require("cors");
const User = require("./Database/UserSchema");
require("./Database/db");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req,res) => {
    try {
        const user = new User(req.body);
        const userResult = await user.save();
        res.send(userResult);
    } catch (error) {
        console.error("Error saving User Details", error);
        res.status(500).send(error.message);
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Pace is running on", PORT)
})

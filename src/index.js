const express = require("express");
const peoplesRoutes = require("./routes/people.route");
const levelsRoutes = require("./routes/level.route");

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/peoples', peoplesRoutes)
app.use('/levels', levelsRoutes)

const port = 3000;

app.get("/hello", (req, res) => res.status(200).send({message: "Hello World!"}))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


module.exports = {app}
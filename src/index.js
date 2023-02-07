const express = require("express");
const peoplesRoutes = require("./routes/people.route");
const levelsRoutes = require("./routes/level.route");
const classRoutes = require("./routes/classes.route");

let cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/peoples', peoplesRoutes);
app.use('/levels', levelsRoutes);
app.use('/classes', classRoutes);

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


module.exports = {app};
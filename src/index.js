const express = require("express");
const route = require("./routes/people.route");

const app = express();

app.use(express.json());
app.use('/people', route)

const port = 3000;

app.get("/hello", (req, res) => res.status(200).send({message: "Hello World!"}))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


module.exports = {app}
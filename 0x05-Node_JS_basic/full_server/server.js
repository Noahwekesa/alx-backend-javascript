const express = require("express");
const routes = require("./routes");

const port = 1234;

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

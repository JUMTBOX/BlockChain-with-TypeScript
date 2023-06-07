const express = require("express");

const app = express();
const PORT = 4000;

const normalRouter = require("./route");

app.use("/home", normalRouter);

app.listen(PORT, () => {
  console.log(`Server is open at PORT${PORT}`);
});

import express from "express";
const PORT = 5000;
const app = express();

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});

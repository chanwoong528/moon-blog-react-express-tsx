import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("build"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["HEAD", "POST", "PUT", "GET", "PATCH", "DELETE"],
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/posts", async (req, res) => {
  console.log("touched: /post from Client");
  const posts = [
    { id: 1, title: "post1", body: "post1" },
    { id: 2, title: "post2", body: "post2" },
    { id: 3, title: "post3", body: "post3" },
    { id: 4, title: "post4", body: "post4" },
    { id: 5, title: "post5", body: "post5" },
  ];

  return res.status(200).send({ posts });
});

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});

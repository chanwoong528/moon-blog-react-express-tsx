import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/post", async (req, res) => {
  const posts = [
    { id: 1, title: "post1", body: "post1" },
    { id: 2, title: "post2", body: "post2" },
    { id: 3, title: "post3", body: "post3" },
    { id: 4, title: "post4", body: "post4" },
  ];

  return res.status(200).send({ posts });
});

app.listen(PORT, () => {
  console.log(`Server Running on: ${PORT}`);
});

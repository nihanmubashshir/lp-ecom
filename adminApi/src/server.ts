import express from "express";
const app = express();
const PORT = 3333;

app.post("/graphql", (req, res) => {
  res.send("Hello world!");
});

app.all("*", (req, res) => {
  res.send("Not found! 404");
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

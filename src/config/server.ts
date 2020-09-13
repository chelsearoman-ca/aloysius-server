import express from "express";
const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello 🌍</h1>");
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));

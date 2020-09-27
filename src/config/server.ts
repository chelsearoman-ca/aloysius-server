import express from "express";
const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World 🤘🏽 🌎" });
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));

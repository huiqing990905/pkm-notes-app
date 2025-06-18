import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hello from PKM backend!");
});

console.log("hello~~");

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
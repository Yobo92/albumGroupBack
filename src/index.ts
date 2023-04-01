import express from "express";
const app = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send("test")
})

app.listen(port, () => {
    console.log("Test")
});
import bodyParser from "body-parser";
import { json } from 'body-parser';
import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import { signupUserRouter } from './routes/signupUser';
const app = express();
app.use(json());
const port = 4000;

let db = "mongodb+srv://admin:admin1234@albumproject.d3sfxpm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err: Error) => {
    console.log(err)
})

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req: Request, res: Response) => {
    res.send("test")
})

app.use(signupUserRouter);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});
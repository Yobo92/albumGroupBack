import { json } from 'body-parser';
import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import { signupRouter } from './routes/signupUser';
import { errorHandler } from "./middlewares/error-handler";
import { signinRouter } from "./routes/signinUser";
import { currentUserRouter } from "./routes/current-user";

const app = express();
app.use(json());
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req: Request, res: Response) => {
    res.send("test")
})

app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);

app.all('*', () => {
    throw new Error();
})

app.use(errorHandler);

export { app };
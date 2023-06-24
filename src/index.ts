
import { app } from './app'
import mongoose from 'mongoose';
import { DataBaseConnectionError } from '@ticketinggroupyo/groupprojectcommon';

const port = 4000;
let db = "mongodb+srv://admin:admin1234@albumproject.d3sfxpm.mongodb.net/?retryWrites=true&w=majority";

const start =  async () => {

    console.log("Starting up the Auth Server")

    try {
        console.log("Connecting to Mongo(hpt!) Auth")
        await mongoose.connect(db);
        console.log("Connected to Mongo(hpt!) DB ")
    } catch (err) {

        console.log(err);
        throw new DataBaseConnectionError();

    }


app.listen(port, () => {
    console.log(`server running on port ${port}`)
});

}

start();
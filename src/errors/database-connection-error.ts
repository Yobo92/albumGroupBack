import { CustomError } from "./custom-error";

export class DataBaseConnectionError extends CustomError {
    reason= "Error connecting to DB";
    statusCode= 500;

    constructor() {
        super('Error connecting to DB')
        Object.setPrototypeOf(this, DataBaseConnectionError.prototype)
    }


serializeErrors()
 {
    return [{message: this.reason}];
}
}
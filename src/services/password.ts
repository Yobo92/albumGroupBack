import bcrypt from 'bcrypt';

export class Password {
    static hash(pass: string) {
        return bcrypt.hash(pass, 10)
    }

    static compare(storedPass: string, suppliedPass: string) {
        return bcrypt.compare(suppliedPass, storedPass)
    }
}

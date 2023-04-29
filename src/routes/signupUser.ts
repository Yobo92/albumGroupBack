import express, {Request, Response} from 'express';
import { body, validationResult} from 'express-validator';
import {User} from '../models/Users'


const router = express.Router();

//Create a new user
router.post('/users',
[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim()
    .isLength({min: 4, max: 20})
    .withMessage('Password must be between 4 and 20 characters')
],


async (req: Request, res: Response) => {

   const errors = validationResult(req)

   if(errors) {
    console.log(errors);
   }

const { email, password } = req.body;

const existingUser = await User.findOne({email})

if (existingUser) {
    throw new Error("Email in User")
}

const user = User.build({email, password});
await user.save();

res.status(201).send(user);

});

export { router as signupUserRouter };
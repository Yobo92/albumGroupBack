import express, {Request, Response} from 'express';
import { body, validationResult} from 'express-validator';
import {User} from '../models/Users'
import { validateRequest } from '@ticketinggroupyo/groupprojectcommon';
import { BadRequestError } from '@ticketinggroupyo/groupprojectcommon';

const router = express.Router();

//Create a new user
router.post('/api/users/signup',
[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim()
    .isLength({min: 4, max: 20})
    .withMessage('Password must be between 4 and 20 characters')
], validateRequest,


async (req: Request, res: Response) => {

   const errors = validationResult(req)

const { email, password } = req.body;

const existingUser = await User.findOne({email})

if (existingUser) {
    throw new BadRequestError('Email in use')
}

const user = User.build({email, password});
await user.save();

res.status(201).send(user);

});

export { router as signupRouter };
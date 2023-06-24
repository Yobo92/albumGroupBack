import express, { Request, Response } from 'express';
import { validateRequest } from '@ticketinggroupyo/groupprojectcommon';
import { User } from '../models/Users';
import {body} from 'express-validator';
import { BadRequestError } from '@ticketinggroupyo/groupprojectcommon';
import { Password } from '../services/password';

const router = express.Router();

router.post('/api/users/signin',
 [
    body('email').isEmail().withMessage('Email must be valid'),
body('password')
.trim()
.notEmpty()
.withMessage('You must supply a password')
], 
 validateRequest, async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        throw new BadRequestError("Invalid credentials")
    }

    const passwordMatch = await Password.compare(password, existingUser.password)

    if(!passwordMatch) {
        throw new BadRequestError('Invalid credentials');
    }

    res.status(200).send(existingUser);

});

export { router as signinRouter}
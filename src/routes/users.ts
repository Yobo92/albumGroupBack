// import express, {Request, Response} from 'express';
// import bcrypt from 'bcrypt';

// let router = express.Router();

// import User from '../models/Users'

// router.get('/', async (req, res) => {
//     let users = await User.find();
//     res.send(users);
// });

// router.post('/', (req: Request, res: Response) => {
//     let {userName, password} = req.body;


//     bcrypt.hash(password, 10, async function(err, hash) {
//         let user = new User({userName, password: hash});
//         let savedUser = await user.save()
//         res.send(savedUser)
//     })
  
// });

// export const users = router;
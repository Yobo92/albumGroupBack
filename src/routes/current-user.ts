

import express from 'express';

const router = express.Router();

router.get('/api/users/currentUser', (req, res) => {
    res.sendStatus(200);
    //res.send({ currentUser: req.currentUser || null })
});

export { router as currentUserRouter}
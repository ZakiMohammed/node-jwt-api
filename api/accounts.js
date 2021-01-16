const express = require('express')
const jwt = require('jsonwebtoken')
const jsonUsers = require('../data/users.json')

const router = express.Router();

// POST: api/accounts/login
router.post('/login', (req, res) => {
    // get the valuse from request
    const userName = req.body.userName;
    const password = req.body.password;

    // validate from db
    const user = jsonUsers.find(i => i.username === userName && i.password === password);

    if (user) {
        const secretKey = 'farhan123';
        const payload = {
            id: user.id,
            username: user.username
        };
        const options = {
            expiresIn: 3600
        };

        jwt.sign(payload, secretKey, options, (err, token) => {
            if (err) {
                res.status(500).json(err);
            }
            res.json({ token, user });
        });
    } else {
        res.status(401).json();
    }
});

// POST: api/accounts/authorized
router.post('/authorized', (req, res) => {
    res.json({
        authorized: true
    });
});

module.exports = router;
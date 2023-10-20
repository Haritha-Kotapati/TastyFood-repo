const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post(
    "/createuser", 
    [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        try {
            //Hash the password
           // const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const user = new User({
                name: req.body.name,
                password: await bcrypt.hash(req.body.password, 10), //store the hashed password
                email: req.body.email,
                location: req.body.location
            });

            await user.save(); //Save the user to the database
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error: 'An error occured while creating the user' });
        }
    });


module.exports = router;
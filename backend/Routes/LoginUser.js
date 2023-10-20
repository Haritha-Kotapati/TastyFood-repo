const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post(
    "/loginuser",
    [
        body('email').isEmail(),
        body('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {

        console.log("Received request at /loginuser");
        console.log("Request Data:", req.body);

        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = await User.findOne({ email: email });
            console.log(user);
            if (!user) {
                console.log("User not found");
                return res.status(400).json({ success: false, errors: "Try logging in with correct credentials-one" });
            }

            //Compare the provided password with th hashed password
            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(passwordMatch);

            if (passwordMatch) {
                console.log('User logged in successfully')
                return res.json({ success: true });
            } else {
                return res.status(400).json({ success: false, errors: "Try logging in with correct credentials" });
            }


        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({ success: false, error: "An error occurred while logging in" });
        }
    });

module.exports = router;
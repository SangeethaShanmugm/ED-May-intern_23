const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/userModel");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  //encrypt password
  let hashPassword = bcrypt.hashSync(req.body.password, 8);
  //   console.log(hashPassword);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
      role: req.body.role ? req.body.role : "User",
    },
    (err, data) => {
      if (err) return res.send("Error while registering user:", err.message);
      res.send("Registration Successful!");
    }
  );
});

module.exports = router;

// password@123  + random String(salting) => 65836785
// password@123 + random String(salting) => 5437657655

const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/userModel");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var _ = require("lodash");
const config = require("../config");
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

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, token: "Error while logging" });
    if (!user) return res.send({ auth: false, token: "Invalid credentials" });
    else {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        return res.send({ auth: false, token: "Invalid credentials" });
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, //24 hours -> in sec
      });
      res.send({auth: true, token: token});
    }
  });
});

module.exports = router;

// password@123  + random String(salting) => 65836785
// password@123 + random String(salting) => 5437657655

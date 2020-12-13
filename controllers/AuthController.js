const User = require("../models/UserModel");
const bcrypt = require('bcryptjs')
exports.authRegister = (req, res) => {
  //TODO: Register func.

  const { firstName, lastName, email, password } = req.body;


  //----crpyt password----//
  const salt = await bcrypt.genSalt(10);
  //> console.log('~ salt', salt)
  const newPassword = await bcrypt.hash(password, salt);
  //> console.log('~ newPasword', newPassword)


  //--save the user to DB--/
  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword, //> crypted password
  });

  await user.save();

  res.send("Register Completed.");
};

exports.authLogin = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};

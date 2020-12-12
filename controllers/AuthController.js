exports.authRegister = (req, res) => {
  //TODO: Register func.

  const { firstName, lastName, email, password } = req.body;
  console.log(
    'Fields:',
    firstName,
    lastName,
    email,
    password
  );



  res.send("Register Completed.");
};

exports.authLogin = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};

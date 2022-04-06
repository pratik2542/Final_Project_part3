const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.Jwt_Confidential, {
    expiresIn: "15d",
  });
};

module.exports = generateToken;

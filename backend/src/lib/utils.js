import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
  httpOnly: true,
  secure: true,              // ✅ because production will be on HTTPS
  sameSite: "strict",        // ✅ tighter security
  maxAge: 7 * 24 * 60 * 60 * 1000
});




  return token;
};
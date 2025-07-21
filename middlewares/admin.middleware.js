import jwt from 'jsonwebtoken';

const adminMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided"
    })
  };

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    req.adminId = decoded.adminId;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid or expired token"
    })
  }
}
export { adminMiddleware };
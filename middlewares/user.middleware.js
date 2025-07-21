import jwt from 'jsonwebtoken';

const userMiddleware = async (req, res, next) =>
  {
    const authHeader = req.headers.authorization;

    if (!authHeader) 
      {
        return res.status(401).json(
          {
            message: "No token found"
          })
      }

    const token = authHeader.split(" ")[1];

    if (!token) 
      {
        return res.status(401).json(
          {
            message: "Token format is invalid"
          });
      }
    try {
      const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
      req.userId = decoded.userId;

      next();
    } catch (err) 
      {
        return res.status(403).json(
          {
            message: "Invalid or expired token"
          })
      }
  }

export { userMiddleware }
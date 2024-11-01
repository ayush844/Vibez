import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || "supers3cr3t"; // Use environment variable in production



const authMiddleware = (req, res, next) => {

    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }


    const token = authHeader.split(" ")[1];  // Extract token after "Bearer"

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;  // Attach user ID to request
        
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};

export default authMiddleware;
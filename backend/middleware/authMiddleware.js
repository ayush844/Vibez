import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || "supers3cr3t"; // Use environment variable in production



const authMiddleware = (req, res, next) => {
    const token = req.header("x-auth-token");

    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.userId; // Attach user ID to request
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}


export default authMiddleware;
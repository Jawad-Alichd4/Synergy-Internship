const jwt = require("jsonwebtoken")
const User = require('../models/User');


module.exports = async function protect(req, res, next) {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: "Not authorized, no token"});
    
    try {
        const decoded = jwt.verify(token, process.env.jwt_secrete);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        return res.status(401).json({message: "Not authorized, token failed"});
    }
}
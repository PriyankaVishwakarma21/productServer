import jwt from 'jsonwebtoken';
import Users from '../models/users.js';

export const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {});
}

export const verifyUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(403).json({ status: false, message: 'Invalid Token' });
        req.user = await Users.findOne({ _id: user.id })
        next();
    })
}

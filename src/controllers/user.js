import { generateToken } from "../utils/functions.js";
import UserServices from "../services/user.js";
import bcrypt from 'bcrypt';

export default class UserController {
    static create = async (req, res) => {
        try {
            const { name, email, mobileno, password } = req.body;
            const alreadyExist = await UserServices.getUserByEmail(email);
            if (alreadyExist) return res.status(200).json({ status: 200, message: 'User already exist with this email' });
            const salt = await bcrypt.genSalt();
            req.body.password = await bcrypt.hash(password, salt);
            const data = await UserServices.create(req.body);
            if (data) {
                res.status(200).json({ status: 200, message: 'User Registered Successfully' });
            }
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Something went wrong', error });
        }
    }
    
    static login = async (req, res) => {
        try {
            let { email, password } = req.body;

            const user = await UserServices.getUserByEmail(email);

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const token = await generateToken(user);

            // Successful login
            res.status(200).json({ status: 200, message: 'Login successful', user, token });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Something went wrong', error });
        }
    }
}
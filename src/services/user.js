import Users from "../models/users.js";

export default class UserServices {
    static create = async (user) => {
        try {
            const userData = new Users(user);
            const data = await userData.save();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    static getUserByEmail = async (email) => {
        return await Users.findOne({ email });
    }

    static getUserByEmailAndPassword = async (email, password) => {
        return await Users.findOne({ email, password });
    }

}
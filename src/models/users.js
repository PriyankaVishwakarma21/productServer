import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobileno: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer'
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
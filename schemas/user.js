import mongoose from "mongoose";
//import user from "../services/user";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const userSchema = mongoose.model('User', UserSchema);


export default userSchema
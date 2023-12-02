import mongoose from "mongoose";

const TherapistSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const therapistSchema = mongoose.model('Therapist', TherapistSchema);


export default therapistSchema
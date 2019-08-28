import mongoose from "mongoose";

const employee = new mongoose.Schema({
    name: String,
    phone: Number,
    username: String,
    password: String,
    address: {
        lat: String,
        lng: String
    },
});

const Employee = mongoose.model("Employee", employee);
export default Employee;
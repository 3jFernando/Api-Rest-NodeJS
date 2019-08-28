import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    phone: Number
});

const Employee = mongoose.model("Employee", schema);
export default Employee;
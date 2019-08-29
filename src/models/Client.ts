import mongoose from 'mongoose';

const client = new mongoose.Schema({
    name: String,
    identification: Number,
    phone: Number,
    email: String,
    address: {
        lat: String,
        lng: String
    }
});

const Client = mongoose.model("Client", client);
export default Client;
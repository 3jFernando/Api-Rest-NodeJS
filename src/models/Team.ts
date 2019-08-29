import mongoose from 'mongoose';

const team = new mongoose.Schema({
    id_client: Number,
    name: String,
    number: Number,
    address: {
        lat: String,
        lng: String
    }
});

const Team = mongoose.model("Team", team);
export default Team;
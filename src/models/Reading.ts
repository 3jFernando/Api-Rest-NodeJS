import mongoose from 'mongoose';

const reading = new mongoose.Schema({
    id_employee: Number,
    id_team: Number,
    readed: String,
    state: {
        type: String,
        default: "Realizada"
    },
    date: Date
});

const Reading = mongoose.model("Reading", reading);
export default Reading;
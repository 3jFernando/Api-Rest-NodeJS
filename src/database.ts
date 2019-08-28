import mongoose from 'mongoose';

class DBConnect {

    public async conection() {
        const uri = "mongodb+srv://app:BRgecuG3rhshbbxM@cluster0-7sj4r.mongodb.net/test?retryWrites=true&w=majority";
        mongoose.connect(uri, { useNewUrlParser: true });
        await mongoose.connection.on("error", err => {
            console.log(`no se puede conectar ${err}`);
        });

        console.log(`conectado :D`);
    }

}

const db = new DBConnect();
export default db;
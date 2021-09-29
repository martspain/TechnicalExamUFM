const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: Number,
    name: String,
    phone: String,
    email: String,
});

const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    id: Number,
    name: String,
    phone: String,
    email: String,
});

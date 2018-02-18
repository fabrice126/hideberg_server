import mongoose from 'mongoose';
const tableName = "annonce";

var schema = new mongoose.Schema({
    [`${tableName}_description`]: {
        type: String,
        minlength: [1, "The field 'description' is too short"],
        maxlength: [255, "The field 'description' is too long"],
    }
}, {
        collection: tableName,
        minimize: false,
        timestamps: true
    });

export default mongoose.model('Annonce', schema)
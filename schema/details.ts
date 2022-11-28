import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schemaTyps = new Schema({
    name: String,
    age: Number,
    role: String,
    number: String,
    dob: String
})

export const userDetilsSchema = mongoose.model('user',schemaTyps);

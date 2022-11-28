import mongoose from "mongoose";
import { userDetilsSchema } from "./details";

const Schema = new mongoose.Schema({
    usersId: {
        type: mongoose.Types.ObjectId,
        ref: userDetilsSchema
    }
})

export const ReferenceSchema = mongoose.model('reference', Schema);
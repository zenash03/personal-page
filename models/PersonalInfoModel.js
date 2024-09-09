import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email: String,
    phone: String,
    linkedIn: String,
    github: String
})

const personalInfoSchema = new mongoose.Schema({
    name: String,
    title: String,
    summary: String,
    contactInfo: contactSchema,
    location: {
        type: String,
    },
    profileImage: String
})

const modelName = "personalInfo";
const PersonalInfoModel = mongoose.models[modelName] || mongoose.model(modelName, personalInfoSchema);

export default PersonalInfoModel;
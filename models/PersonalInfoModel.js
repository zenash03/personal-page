import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email: String,
    phone: String,
    linkedIn: String,
    github: String
})
const badgeSchema = new mongoose.Schema({
    src: String,
    alt: String
})

const personalInfoSchema = new mongoose.Schema({
    name: String,
    title: String,
    summary: String,
    contactInfo: [contactSchema],
    location: {
        type: String,
    },
    profileImage: String,
    roles: [String],
    about: String,
    image: String,
    skillBadges: [badgeSchema]
})

const modelName = "personalInfo";
const PersonalInfoModel = mongoose.models[modelName] || mongoose.model(modelName, personalInfoSchema);

export default PersonalInfoModel;
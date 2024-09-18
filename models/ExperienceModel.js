import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    companyName: {
        type: String,
    }, 
    position: {
        type: String,
        required: false
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    responsibilities: {
        type: [String]
    },
    category: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    }
})

const modelName = "experience";
const ExperienceModel = mongoose.models[modelName] || mongoose.model(modelName, experienceSchema);

export default ExperienceModel;
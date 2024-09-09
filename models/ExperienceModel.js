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
        type: String
    }
})

const modelName = "experiences";
const ExperienceModel = mongoose.models[modelName] || mongoose.model(modelName, experienceSchema);

export default ExperienceModel;
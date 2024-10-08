import mongoose from "mongoose";
import { experienceSchema } from "./ExperienceModel";

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    expectedDate: {
        type: String,
        required: false
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    },
    logoLink: {
        type: String,
    },
    relatedExperiences: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: "experience"
            }
        ]
    }
});

const modelName = "educations";
const EducationModel = mongoose.models[modelName] || mongoose.model(modelName, educationSchema);

export default EducationModel;
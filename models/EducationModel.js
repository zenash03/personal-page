import mongoose from "mongoose";

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
    relatedExperience: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Experience'
            }
        ]
    }
})

const modelName = "Education";
const EducationModel = mongoose.models[modelName] || mongoose.model(modelName, educationSchema);

export default EducationModel;
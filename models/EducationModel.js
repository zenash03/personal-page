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
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    },
    relatedExperience: {
        type: [Object]
    }
})

const modelName = "Education";
const EducationModel = mongoose.models.Education || mongoose.model(modelName, educationSchema);

export default EducationModel;
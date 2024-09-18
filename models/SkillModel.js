import mongoose, { mongo } from "mongoose";

const skillListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true,
        default: "Less than 1 years"
    }
})

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    skillList: [skillListSchema]
})

const modelName = "skill";
const SkillModel = mongoose.models[modelName] || mongoose.model(modelName, skillSchema);

export default SkillModel;
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    role: {
        type: [String],   
    },
    category: {
        type: String,
        required: true,
        default: "Developer"
    }
})

const modelName = "Project";
const ProjectModel = mongoose.models.modelName || mongoose.model(modelName, ProjectSchema);

export default ProjectModel;
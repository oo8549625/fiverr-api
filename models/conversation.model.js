import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    selletId: {
        type: String,
        require: true,
    },
    buyerId: {
        type: String,
        require: true,
    },
    readBySeller: {
        type: Boolean,
        require: true,
    },
    readByBuyer: {
        type: Boolean,
        require: true,
    },
    lastMessage: {
        type: String,
        require: false,
    },
    buyerId: {
        type: String,
        require: true,
    },

}, {
    timestamps: true
});

export default mongoose.model("Conversation", ConversationSchema)
import mongoose from 'mongoose';

const opinionSchema = new mongoose.Schema({
    dishId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
});

const Opinion = mongoose.model('Opinion', opinionSchema);

export default Opinion;

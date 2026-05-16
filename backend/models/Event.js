import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
    {
        organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        venue: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true, default: 0 },
        banner: { type: String, required: true },
        capacity: { type: Number, required: true, default: 100 },
        popularity: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true }
    },
    { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);
export default Event;

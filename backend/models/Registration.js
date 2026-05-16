import mongoose from 'mongoose';

const registrationSchema = mongoose.Schema(
    {
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        status: { type: String, enum: ['Registered', 'Cancelled'], default: 'Registered' },
        ticketId: { type: String, required: true, unique: true }
    },
    { timestamps: true }
);

const Registration = mongoose.model('Registration', registrationSchema);
export default Registration;

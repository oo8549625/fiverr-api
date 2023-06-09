import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import gigRoute from './routes/gig.route.js';
import conversationRoute from './routes/conversation.route.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8800;
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connected to mongoDB!");
    } catch (error) {
        console.log(error);
    }
}
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/review', reviewRoute);
app.use('/api/order', orderRoute);
app.use('/api/message', messageRoute);
app.use('/api/gig', gigRoute);
app.use('/api/conversation', conversationRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is running! listen ${port}`)
})  

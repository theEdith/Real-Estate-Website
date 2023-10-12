import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();
 
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
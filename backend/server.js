import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import postRoute from './routes/post.js';


const app = express();

dotenv.config();

app.use(express.json());


connectDB();

app.get('/', (req, res) => {
    res.send("HELLO JI");
})


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})
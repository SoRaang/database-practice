import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/userRoutes.js';

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use('/user', route);

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(() => {
        console.log('DB 연결 완료');

        app.listen(PORT, () => {
            console.log(`서버 연결 완료: http://localhost:${ PORT }`);
        });
    })
    .catch((error) => console.error(error));

/** 여기까지 서버 설정 및 구동 */
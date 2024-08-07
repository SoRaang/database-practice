import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

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

/** 여기까지 서버 구동 */

const userSchema = new mongoose.Schema({ // 데이터 스키마 설정
    name: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema); // users 테이블을 위의 userSchema로 해석

app.get('/users', async (req, res) => { // 지정된 API 주소로 데이터를 불러오기
    const userData = await userModel.find();

    res.json(userData);
});
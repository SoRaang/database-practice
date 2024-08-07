import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({ // 데이터 스키마 설정
    name: String,
    email: String,
    address: String
});

export default mongoose.model('users', userSchema);
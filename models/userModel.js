const userSchema = new mongoose.Schema({ // 데이터 스키마 설정
    name: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema); // users 테이블을 위의 userSchema로 해석

app.get('/users', async (req, res) => { // 지정된 API 주소로 데이터 불러오기
    const userData = await userModel.find();

    res.json(userData);
});
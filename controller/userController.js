import User from '../models/userModel.js';

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });
        }

        const saveUser = await userData.save();

        res.status(200).json(saveUser);
    } catch(error) {
        res.status(500).json({ error: '연결 오류' });
    }
}
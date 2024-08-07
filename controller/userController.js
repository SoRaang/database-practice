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

export const read = async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(404).json({ message: '조건에 해당하는 사용자를 찾을 수 없습니다.' });
        }

        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ error: '연결 오류' });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id });

        if (!userExist) {
            return res.status(404).json({ message: '조건에 맞는 사용자를 찾을 수 없습니다.' });
        }

        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });

        res.status(200).json(updateUser);
    } catch(error) {
        res.status(500).json({ error: '연결 오류' });
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id });

        if (!userExist) {
            return res.status(404).json({ message: '조건에 맞는 사용자를 찾을 수 없습니다.' });
        }

        const deleteUser = await User.findByIdAndDelete(id);

        res.status(200).json(deleteUser);
    } catch(error) {
        res.status(500).json({ error: '연결 오류' });
    }
}
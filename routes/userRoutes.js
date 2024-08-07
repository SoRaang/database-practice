import express from 'express';
import { create, read, update, remove } from '../controller/userController.js';

const route = express.Router();

route.post('/create', create);
route.get('/getUsers', read);
route.put('/update/:id', update);
route.delete('/remove/:id', remove);

export default route;
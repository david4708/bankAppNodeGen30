import express from 'express';
import userController from './users.controller.js';

export const router = express.Router();

router.route('/signUp').post(userController.createUserSignUp);

router.route('/login').post(userController.createUserLogin);

router.route('/:id/history').get(userController.findOneUser);

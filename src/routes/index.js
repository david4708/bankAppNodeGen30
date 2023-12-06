import express from 'express';
import { router as transfersRoute } from '../modules/transfers/transfers.route.js';
import { router as usersRoute } from '../modules/users/users.route.js';

export const router = express.Router();
router.use('/users', usersRoute);
router.use('/transfers', transfersRoute);

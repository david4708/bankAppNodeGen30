import express from 'express';

import CreateTransfer from './transfers.controller.js';

export const router = express.Router();

router.post('/', CreateTransfer);

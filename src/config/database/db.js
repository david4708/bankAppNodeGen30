import { Sequelize } from 'sequelize';
import { envs } from '../enviroment/enviroment.js';

export const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log('connection success 😃 ');
  } catch (error) {
    console.error(error);
  }
};

export const syncUp = async () => {
  try {
    await sequelize.sync();
    console.log('synced success ✔');
  } catch (error) {
    console.error(error);
  }
};

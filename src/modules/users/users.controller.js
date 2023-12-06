import UserServices from './users.services.js';

const createUserSignUp = async (req, res) => {
  try {
    const { name, password } = req.body;
    const accountNumber = Math.floor(Math.random() * 900000) + 100000;

    const user = await UserServices.SignUp({
      name,
      password,
      accountNumber,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong! 🤦‍♀️',
    });
  }
};
const createUserLogin = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;
    const user = await UserServices.Login({
      accountNumber,
      password,
    });
    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: `accountNumber: ${accountNumber} or password: ${password} is no valid`,
      });
    }
    return res.status(200).json({
      message: 'you are logged',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong! 🤦‍♀️',
    });
  }
};

const findOneUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong! 🤦‍♀️',
    });
  }
};

export default { createUserSignUp, createUserLogin, findOneUser };

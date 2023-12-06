import User from './users.model.js';

class UserServices {
  static async SignUp(data) {
    return await User.create(data);
  }

  //login fake
  static async Login(data) {
    return await User.findOne({
      where: {
        status: 'active',
        accountNumber: data.accountNumber,
        password: data.password,
      },
    });
  }

  static async findAccount(accountNumber) {
    try {
      const user = await User.findOne({
        where: {
          status: 'active',
          accountNumber,
        },
      });

      return user;
    } catch (error) {
      return res.status(400).json({
        status: error,
        message: 'accountNumber not found',
      });
    }
  }

  static async updateAmount(user, amount) {
    return await user.update({ amount });
  }
}

export default UserServices;

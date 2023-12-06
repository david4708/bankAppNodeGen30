import UserServices from '../users/users.services.js';
import TranferServices from './transfers.services.js';

const CreateTransfer = async (req, res) => {
  const { amount, accountNumberReceiver, accountNumberSender } = req.body;

  const receiverPromise = UserServices.findAccount(accountNumberReceiver);
  const senderPromise = UserServices.findAccount(accountNumberSender);

  const [receiver, sender] = await Promise.all([
    receiverPromise,
    senderPromise,
  ]);

  if (!receiver) {
    return res.status(404).json({
      status: 'error',
      message: `user with accountNumberReceiver:${accountNumberReceiver} does not exist on db `,
    });
  }
  if (!sender) {
    return res.status(400).json({
      status: 'error',
      message: `user with accountNumberSender:${accountNumberSender} does not exist on db `,
    });
  }

  if (sender.amount < amount) {
    return res.status(400).json({
      status: 'error',
      message: 'inssufcient balance',
    });
  }

  const newReceiverBalance = amount + receiver.amount;
  const newSenderBalance = sender.amount - amount;

  const updateReceiverPromise = UserServices.updateAmount(
    receiver,
    newReceiverBalance
  );
  const updateSenderPromise = UserServices.updateAmount(
    sender,
    newSenderBalance
  );
  const transferPromise = TranferServices.createRecordTransfer({
    amount,
    senderUserId: sender.id,
    receiverUserId: receiver.id,
  });

  await Promise.all([
    updateReceiverPromise,
    updateSenderPromise,
    transferPromise,
  ]);

  return res.status(201).json({ message: 'transfer ok' });

  /*  try {


  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrongz! 🤦‍♀️',
    });
  }
 */
};

export default CreateTransfer;

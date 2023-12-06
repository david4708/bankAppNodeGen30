import Transfer from './transfers.model.js';

class TransferService {
  static async createRecordTransfer(tranferdata) {
    try {
      return await Transfer.create(tranferdata);
    } catch (error) {
      return res.status(400).json({
        status: error,
        message: 'accountNumber not found',
      });
    }
  }
}

export default TransferService;

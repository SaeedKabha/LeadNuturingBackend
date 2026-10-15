const Communication = require('../models/communication');

const createCommunication = async (communicationData) => {
  const communication = new Communication(communicationData);
  await communication.save();
  return communication;
};

const getCommunicationsByLead = async (leadId) => {
  return Communication.find({ lead: leadId }).sort({ timestamp: -1 });
};

module.exports = {
  createCommunication,
  getCommunicationsByLead,
};

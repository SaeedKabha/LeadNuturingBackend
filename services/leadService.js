const Lead = require('../models/Lead');

const createLead = async (leadData) => {
  const lead = new Lead(leadData);
  await lead.save();
  return lead;
};

const getLeads = async (filter = {}) => {
  return Lead.find(filter).sort({ createdAt: -1 });
};

const updateLead = async (id, updateData) => {
  return Lead.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

const deleteLead = async (id) => {
  return Lead.findByIdAndDelete(id);
};

const searchLeads = async (query) => {
  return Lead.find({ name: { $regex: query, $options: 'i' } });
};

module.exports = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  searchLeads,
};

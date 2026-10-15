const express = require('express');
const router = express.Router();
const leadService = require('../services/leadService');

const createLead = async (req, res) => {
  try {
    const lead = await leadService.createLead(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await leadService.getLeads();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await leadService.updateLead(req.params.id, req.body);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteLead = async (req, res) => {
  try {
    const lead = await leadService.deleteLead(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.post('/', createLead);
router.get('/', getLeads);
router.put('/:id', updateLead);
router.delete('/:id', deleteLead);

module.exports = router;

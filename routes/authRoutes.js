const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../services/authService');

router.post('/login', async (req, res) => {
  try {
    const token = await loginAdmin(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;

const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({ email });
  if (!admin || admin.password !== password) {
    throw new Error('Invalid email or password');
  }
  return jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET || 'dev-secret',
    { expiresIn: '7d' }
  );
};

module.exports = { loginAdmin };

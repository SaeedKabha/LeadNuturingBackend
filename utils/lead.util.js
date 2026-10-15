const { daysBetween } = require('./date.util');

function getLeadStatus(lastContactDate, now = new Date()) {
  const days = daysBetween(lastContactDate, now);
  if (days <= 7) return 'engaged';
  if (days <= 30) return 'dormant';
  return 'unresponsive';
}

module.exports = { getLeadStatus };

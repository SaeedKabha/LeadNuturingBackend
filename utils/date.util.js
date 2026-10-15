function toDate(value) {
  return value instanceof Date ? value : new Date(value);
}

function daysBetween(dateA, dateB) {
  const a = toDate(dateA);
  const b = toDate(dateB);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((b.getTime() - a.getTime()) / msPerDay);
}

module.exports = { daysBetween };

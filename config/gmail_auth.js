function createGmailOAuth2Client() {
  throw new Error('Gmail OAuth is not configured in this mirror');
}

function promptForGmailToken() {
  throw new Error('Gmail OAuth is not configured in this mirror');
}

module.exports = { createGmailOAuth2Client, promptForGmailToken };

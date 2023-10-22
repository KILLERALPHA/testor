const crypto = require('crypto');

// Encrypt a message using AES encryption
function encryptText(text, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt the message
function decryptText(encryptedText, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = (req, res) => {
  const queryData = req.query.data || ''; // Get the 'data' parameter from the URL
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  const encryptedText = encryptText(queryData, secretKey);
  const decryptedText = decryptText(encryptedText, secretKey);

  // Send both encrypted and decrypted text in the response
  res.status(200).send(`Encrypted Text: ${encryptedText}\nDecrypted Text: ${decryptedText}`);
};

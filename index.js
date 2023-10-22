const crypto = require('crypto');

function encryptText(text, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decryptText(encryptedText, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = (req, res) => {
  const queryData = req.query.data || '';
  const secretKey = 'thisismysecretkey';

  const encryptedText = encryptText(queryData, secretKey);
  const decryptedText = decryptText(encryptedText, secretKey);
  res.status(200).send(`Encrypted Text: ${encryptedText}<br><br>Decrypted Text: ${decryptedText}`);

};

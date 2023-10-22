const { inject } = require('@vercel/analytics');
const crypto = require('crypto');

inject();

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
  const secretKey = 'c325ff6d94e1b3a9b67b257301f9e5a7c325ff6d94e1b3a9b67b257301f9e5a7';

  if (queryData === '') {
    res.status(404).json({ message: 'crashed' });
    return;
  }

  const encryptedText = encryptText(queryData, secretKey);
  const decryptedText = decryptText(encryptedText, secretKey);
  const port = process.env.PORT;
  res.status(200).send(`Encrypted Text: ${encryptedText}<br>Decrypted Text: ${decryptedText}<br>Port: ${port}`);
};

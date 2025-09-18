const bcrypt = require('bcrypt');

const comparePassword = async (plain, hash) => {
  return await bcrypt.compare(plain, hash);
};

module.exports = { comparePassword };
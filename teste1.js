const data = require("./fakeData");

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((item) => item.name === name);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};


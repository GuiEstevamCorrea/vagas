var data = require("./fakeData");

module.exports = function (req, res) {
  var id = req.query.id;

  // Verifica permissões antes de atualizar o usuário
  checkPermissions(req, res, () => {
    const user = data.find((d) => d.id === id);
    if (user) {
      user.name = req.body.name;
      user.job = req.body.job;
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  });
};

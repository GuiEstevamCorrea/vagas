var data = require("./fakeData");

module.exports = function (req, res) {
  var name = req.query.name;

  // Verifica permissões antes de deletar o usuário
  checkPermissions(req, res, () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) {
        data.splice(i, 1);
        res.send("success");
        return;
      }
    }

    res.send("User not found");
  });
};

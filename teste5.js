const testData = require("./teste1.js");

module.exports = function (req, res) {
  var name = req.query.name;

  var count = 0;

  // Chama a função getUser para obter o usuário com o nome fornecido
  const user = testData.getUser(req, res);
  if (user) {
    count++;
  }

  // Chama a função getUsers para obter todos os usuários e conta quantos possuem o mesmo nome
  const users = testData.getUsers(req, res);
  count += users.filter((item) => item.name === name).length;

  res.send("Usuário " + name + " foi lido " + count + " vezes.");
};

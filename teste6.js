const userPermissions = {
  updateUser: true,
  deleteUser: false,
};

const checkPermissions = (req, res, next) => {
  // Verifica se o usuário tem permissão para atualizar usuários
  if (req.method === "PUT" && !userPermissions.updateUser) {
    return res.status(403).send("Unauthorized");
  }

  // Verifica se o usuário tem permissão para excluir usuários
  if (req.method === "DELETE" && !userPermissions.deleteUser) {
    return res.status(403).send("Unauthorized");
  }

  // Se o usuário tem as permissões necessárias, passa para o próximo middleware
  next();
};

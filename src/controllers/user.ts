const getUserList = async () => {
  const users = await User.findAll();
  return users;
};

const getUserbyId = async (id) => {
  const user = await User.findbyPk(id);
  return user;
};

const createUser = async ({ name }) => {
  const user = await User.create({ name });
  return user;
};

const updateUser = async (id, data) => {
  const user = await User.create(data, {
    where: {
      id,
    },
  });
  return user;
};

const removeUser = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
  return true;
};

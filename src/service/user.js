const users = []

export const listUsers = () => {
  return users
}

export const createUser = (user) => {
  users.push(user)
}

export const deleteUser = async (id) => {
  await findByIdAndDelete(id)
}

export const updateUser = async (id, newBody) => {
 await findByIdAndUptade(id, newBody)
}

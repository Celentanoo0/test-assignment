const allUsers = [];

export const getUsers = async (usersAmount) => {
  const f = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${usersAmount}`
  )
  const data = await f.json()
  const users = data.users

  for (const elem of users) {
    allUsers.push(elem)
  }

  if (data.total_users - allUsers.length > 100) {
    await getUsers(100)
  } else if (data.total_users - allUsers.length > 0) {
    await getUsers(data.total_users - usersAmount)
  }

  return allUsers;
}

export const getPositions = async () => {
  const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
  const data = await f.json()
  return data.positions
}

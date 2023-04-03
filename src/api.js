const USERS_AMOUNT = 6

export const getUsers = async () => {
  const f = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${USERS_AMOUNT}`
  )
  const data = await f.json()

  return data.users
}

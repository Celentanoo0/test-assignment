const allUsers = []
let apiToken = ''

export const getUsers = async (usersAmount) => {
  try {
    const f = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${usersAmount}`
    )
    const data = await f.json()
    const users = data.users

    for (const elem of users) {
      allUsers.push(elem)
    }

    if (data.total_users - allUsers.length > 0) {
      await getUsers(100)
    }

    return allUsers
  } catch (error) {
    console.error(error.message)
  }
}

export const getPositions = async () => {
  try {
    const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    const data = await f.json()
    return data.positions
  } catch (error) {
    console.error(error.message)
  }
}

const getTokenForRegistration = async () => {
  try {
    const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    const data = await f.json()
    apiToken = data.token
  } catch (error) {
    console.error(error.message)
  }
}

export const registrationRequest = async (name, email, phone, position_id, photo) => {
  try {
    await getTokenForRegistration()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('position_id', position_id)
    formData.append('photo', photo)

    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      headers: {
        Token: apiToken
      },
      body: formData
    })

    const data = response.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

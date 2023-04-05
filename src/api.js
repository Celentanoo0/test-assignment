let apiToken = ''
let usersPage = 1
let totalPages = 1

export const getUsers = async (usersAmount) => {
  try {
    if (usersPage > totalPages) {
      return false
    }
    const f = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${usersPage}&count=${usersAmount}`
    )
    const data = await f.json()
    totalPages = data.total_pages
    usersPage += 1
    return data.users
  } catch (error) {
    console.error(error)
  }
}

export const getPositions = async () => {
  try {
    const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    const data = await f.json()
    return data.positions
  } catch (error) {
    console.error(error)
  }
}

const getTokenForRegistration = async () => {
  try {
    const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    const data = await f.json()
    apiToken = data.token
  } catch (error) {
    console.error(error)
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

    return response.json()
  } catch (error) {
    console.error(error)
  }
}

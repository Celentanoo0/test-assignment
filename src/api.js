let usersLeft = 100;
const usersPerRequest = 6;
let page = 1;

export const getUsers = async () => {
  if(usersLeft <= 0){
    return
  }
  const requestQuantity = usersLeft > usersPerRequest ? usersPerRequest : usersLeft
  const f = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${requestQuantity}`
  )
  const data = await f.json()

  usersLeft -= usersPerRequest;
  page += 1;

  return data.users
}

export const getPositions = async () => {
  const f = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
  const data = await f.json();
  return data.positions
}

export async function login (user, password) {
  try {
    const userId = await fetch(`http://localhost:3000/user/${user}/${password}`);
    if (!userId.ok) throw('Invalid user/password');
    const data = await userId.json();
    return data;

  } catch (error) {
    console.log(error);
    return new Error(error);
  }
}

export async function getData (id) {
  try {
    const response = await fetch(`http://localhost:3000/data/${id}`);
    if (!response.ok) throw(response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
}
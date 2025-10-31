export async function login (user, password) {
  try {
    const userId = await fetch(`http://localhost:3000/user/${user}/${password}`);
    if (!userId.ok) throw('Invalid user/password');
    console.log(userId);
    const data = await userId.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
    return new Error(error);
  }
}

// export async function getData (id) {

// }
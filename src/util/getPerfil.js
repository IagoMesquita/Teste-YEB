const getPerfil = async (user) => {
  const URL = `https://api.github.com/users/${user}`;
  
  const objectPerfil = await (await fetch(URL)).json();
  console.log(objectPerfil);
  return objectPerfil; 
}

export default getPerfil;
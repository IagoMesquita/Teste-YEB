const getRepos = async (user) => {
  const URL = `https://api.github.com/users/${user}/repos`;
  
  const arrayRepos = await (await fetch(URL)).json();
  return arrayRepos;
}

export default getRepos;
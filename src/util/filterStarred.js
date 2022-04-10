function filterStarreds(repos) {
  const starred = repos.filter((repo) => (
    repo.stargazers_count > 0
  ));
  console.log('filtro', starred);
  
  return starred;   
}

export default filterStarreds;
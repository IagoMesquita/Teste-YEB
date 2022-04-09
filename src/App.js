import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home.js'
import Repos from './pages/repos/Repo';
function App() {
  return (
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route path="/repos" component={Repos} />
    </Switch>
  );
}

export default App;

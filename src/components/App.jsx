import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';



function App() {
  return (
    <>
    <NavBar />
    <Switch>

      <Route exact path = '/'>

      </Route>
    </Switch>
    </>
  );
}

export default App;

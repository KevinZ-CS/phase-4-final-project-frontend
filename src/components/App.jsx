import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';

const [user, setUser] = useState(null);

useEffect(() => {
  fetch('/user')
  .then((response) => {
    if(response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, [])


function App() {
  return (
    <>
    <NavBar user={user} />
    <Switch>

      <Route exact path = '/'>

      </Route>
    </Switch>
    </>
  );
}

export default App;

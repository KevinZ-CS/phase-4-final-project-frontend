import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import LoginForm from './LoginForm';


function App() {
  const [user, setUser] = useState(null);

useEffect(() => {
  fetch('/users')
  .then((response) => {
    if(response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, [])

  return (
    <>
    <NavBar user={user} />
    <Switch>

      <Route exact path = '/'>
      </Route>

      <Route exact path = '/LoginForm'>
        <LoginForm />
      </Route>

    </Switch>
    </>
  );
}

export default App;

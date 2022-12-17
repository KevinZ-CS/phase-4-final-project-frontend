import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


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
        <LoginForm onLogin={setUser} />
      </Route>

      <Route exact path = '/signup'>
        <SignUpForm onLogin={setUser} />
      </Route>

    </Switch>
    </>
  );
}

export default App;

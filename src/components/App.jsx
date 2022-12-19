import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import GameList from './GameList';
import GamePage from './GamePage';
import ReviewForm from './ReviewForm';
import GameForm from './GameForm';

function App() {
  const [user, setUser] = useState(null);

useEffect(() => {
  fetch('/me')
  .then((response) => {
    if(response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
}, [])

console.log(user)

  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <Switch>

      <Route exact path = '/'>
        <GameList user={user} />
      </Route>

      <Route exact path = '/createGame'>
        <GameForm />
      </Route>

      <Route exact path = '/login'>
        <LoginForm onLogin={setUser} />
      </Route>

      <Route exact path = '/signup'>
        <SignUpForm onLogin={setUser} />
      </Route>

      <Route exact path = '/game/:id'>
       <GamePage user={user} />
      </Route>

      <Route exact path = '/:id/addReview'>
       <ReviewForm user={user} />
      </Route>

    </Switch>
    </>
  );
}

export default App;

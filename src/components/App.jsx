import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import GameList from './GameList';
import GamePage from './GamePage';
import ReviewForm from './ReviewForm';
import GameForm from './GameForm';
import MyAccount from './MyAccount';
import EditReviewForm from './EditReviewForm';

function App() {
  const [user, setUser] = useState(null);
  const [gamesArray, setGamesArray] = useState([]);
  const [userGamesArray, setUserGamesArray] = useState([]);
  const [gameReviews, setGameReviews] = useState([]);

useEffect(() => {
  fetch('/me')
  .then((response) => {
    if(response.ok) {
      response.json().then((user) => {
        setUser(user)
        setUserGamesArray(user.games)
      });
    }
  });
}, [])

useEffect(() => {
  const fetchData = async () => {
      const response = await fetch('/games');
      const data = await response.json();
      if (response.ok) {
        setGamesArray(data)
          } 
  }
  fetchData()
}, [])

function handleAddGame(newGame) {
  setGamesArray([...gameReviews, newGame]);
    }

  function handleAddReview(review) {
  setGamesArray([...gamesArray, review]);
    }

    function handleDeleteReview(id, game_id) {
      const updatedReviews = gameReviews.filter((review) => review.id !== parseInt(id));
      //params will give you a string
      const updatedUserGamesArray = userGamesArray.filter((game) => game.id !== parseInt(game_id));
      setGameReviews(updatedReviews);
      setUserGamesArray(updatedUserGamesArray);
    }

    function handleUpdateReview(updatedReviewObj) {
      const updatedReviews = gameReviews.map((review) => {
        if (review.id === updatedReviewObj.id) {
          return updatedReviewObj;
        } else {
          return review;
        }
      });
      setGameReviews(updatedReviews);
    }


  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <Switch>

      <Route exact path = '/'>
        <GameList user={user} gamesArray={gamesArray} />
      </Route>

      <Route exact path = '/createGame'>
        <GameForm user={user} onLogin={setUser} handleAddGame={handleAddGame}/>
      </Route>

      <Route exact path = '/login'>
        <LoginForm onLogin={setUser} />
      </Route>

      <Route exact path = '/MyAccount'>
        <MyAccount user={user} onLogin={setUser} userGamesArray={userGamesArray} />
      </Route>

      <Route exact path = '/signup'>
        <SignUpForm onLogin={setUser} />
      </Route>

      <Route exact path = '/game/:id'>
       <GamePage user={user} gameReviews={gameReviews} setGameReviews={setGameReviews} />
      </Route>

      <Route exact path = '/:game_id/editReview/:id'>
       <EditReviewForm user={user} onLogin={setUser} handleDeleteReview={handleDeleteReview} handleUpdateReview={handleUpdateReview} />
      </Route>

      <Route exact path = '/:id/addReview'>
       <ReviewForm user={user} onLogin={setUser} handleAddReview={handleAddReview} />
      </Route>

    </Switch>
    </>
  );
}

export default App;

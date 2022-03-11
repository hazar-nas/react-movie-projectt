import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Actor from './pages/Actor'
import SingleActor from './pages/SingleActor'
import Movie from './pages/Movie'
import Movies from "./pages/Movies";
import Error from "./pages/Error";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/actors/:actorId' component={SingleActor} />
          <Route path="/movies" component={Movies} />
          <Route path='/movies/movie/:movieId' component={Movie} />
          <Route path='/actors' component={Actor} />
          <Route exact path='/' component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

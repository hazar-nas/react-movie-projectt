import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Actor from './pages/Actor'
import SingleActor from './pages/SingleActor'
import Movie from './pages/Movie'

import Error from './pages/Error'
import NavBar from './components/NavBar'
import MoviesGenre from './pages/MoviesGenre'
import About from './pages/About'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/actors/:actorId' component={SingleActor} />
          <Route path='/movie/:movieId' component={Movie} />
          <Route path='/moviesgenre/:id' component={MoviesGenre} />
          <Route path='/actor' component={Actor} />
          <Route exact path='/' component={Home} />
          <Route path='/aboutus' component={About}></Route>
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

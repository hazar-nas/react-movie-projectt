import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Actor from "./pages/Actor";
import SingleActor from "./pages/SingleActor";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import MoviesGenre from "./pages/MoviesGenre";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/actors/:actorId" component={SingleActor} />
          <Route path="/movies/movie/:movieId" component={Movie} />
          <Route path="/moviesgenre/:id" component={MoviesGenre} />
          <Route path="/actor" component={Actor} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

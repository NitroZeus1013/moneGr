import Tracker from "../screens/Tracker";
import Home from "../screens/Home";
import Graphs from "../screens/Graphs";
import NotFound from '../screens/NotFound';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// DUMMY DATA
// const transaction = [
//   {
//     item: "cash",
//     amount: 500,
//   },
//   {
//     item: "book",
//     amount: -300,
//   },
//   {
//     item: "coffee",
//     amount: -100,
//   },
// ];

function App() {
  return (
    <div id="main-container">
      <Router>
        <div id="app">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/tracker">Tracker</Link>
            <Link to="/stats">Graphs</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tracker">
              <Tracker />
            </Route>
            <Route path="/stats">
              <Graphs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>

     
    </div>
  );
}

export default App;

import './style.scss';
import Home from './pages/home/Home'
import Daftar from './pages/daftar/Daftar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/daftar">
            <Daftar/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

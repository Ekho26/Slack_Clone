import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path="/">
            Login Page
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

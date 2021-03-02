// Components
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Styles
import "./App.css";
import styled from 'styled-components';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  background: blue;
`
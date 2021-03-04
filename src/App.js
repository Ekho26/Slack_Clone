// Hooks
import { useEffect, useState } from 'react';

// Components
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Firebase
import db from './firebase';

// Styles
import "./App.css";
import styled from 'styled-components';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms={rooms} />
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
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  background: #3f0e40;
  display: grid;
  grid-template-columns: 260px auto;
`;
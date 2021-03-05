// Hooks
import { useEffect, useState } from 'react';

// Components
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Firebase
import db from './firebase';
import { auth, provider } from './firebase';

// Styles
import "./App.css";
import styled from 'styled-components';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={ setUser }/>
          :
          <Container>
            <Header user= { user }
                    signOut={ signOut }/>
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}/>
                </Route>
                <Route path="/">
                  Create or Select a Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

// Container of all
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
// Sidebar (options) + Chat room
const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
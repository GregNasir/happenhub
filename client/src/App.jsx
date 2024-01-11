// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// commenting
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Food from './components/Food';
import Sports from './components/Sports';
import Art from './components/Art';
import Favorites from './components/Favorites';
// import Slider from "./components/slider/Slider";

import EventListMusic from './components/Music/EventList';

import EventList from "./components/Sports/EventList";  // Import the EventList component



// import Footer from './components/Footer';
// import Main from "./components/Main";
// import Signup from './components/Signup';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from '../src/components/Users';
// import Contact from './components/Contact';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [count, setCount] = useState(0)
  const user = localStorage.getItem("token");

  return (
    <>
  <ApolloProvider client={client}>
    <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              {user && <Route path='home' element={<Home/>}  />} 
              {/* {user && <Route path='/' exact element={<Main />} />} */}
              <Route path='about' element={<About/>} />
              <Route path='music' element={<Music/>} />
              <Route path='food' element={<Food/>} />
              <Route path='sports' element={<Sports/>} />
              <Route path='art' element={<Art/>} />
              <Route path='favorites' element={<Favorites/>} />
              <Route path="/music/concerts" element={<EventListMusic />} />
              <Route path='login' element={<Login/>} />
              <Route path='signup' element={<Signup/>} />
              <Route path='/api/users' element={<Users/>} />
              <Route path='sports/:category' element={<EventList />} />
              {/* <Route path='contact' element={<Contact/>} /> */}
            </Route>
          </Routes>
          {/* <Slider /> */}
          {/* <Footer/> */}
          </ApolloProvider>

    </>
  )
}

export default App

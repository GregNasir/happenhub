// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
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
// import Contact from './components/Contact';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='music' element={<Music/>} />
          <Route path='food' element={<Food/>} />
          <Route path='sports' element={<Sports/>} />
          <Route path='art' element={<Art/>} />
          <Route path='favorites' element={<Favorites/>} />
          {/* <Route path='contact' element={<Contact/>} /> */}
        </Route>
      </Routes>


    </>
  )
}

export default App

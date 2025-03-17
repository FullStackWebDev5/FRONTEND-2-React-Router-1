import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
  # React Router:
    - React does not have inbuilt support for routing
    - To integrate router in react application, we can use a third-party package: 'react-router-dom'
    - Components:
      - BrowserRouter: A HOC which has all the functionality for routing. React App component needs to be wrapped around this component
      - Routes: Wrapper component for all routes that need to be declared
      - Route: In this component, we can delcare which component needs to be rendered whenever a specific route is visited
        - path: Specify the route
        - element: Specify the component
      - Link: It is an alternate of 'anchor' tag provided by react-router-dom which will not reload the page
        - to: Like the 'href' attribute of 'a' tag

  # React Router V6: https://reactrouter.com/6.30.0
    - Additional ref doc: https://www.w3schools.com/react/react_router.asp
*/

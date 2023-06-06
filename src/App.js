import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Components/Pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/Pages/About"
import Home from './Components/Pages/Home';
import Category from './Components/Pages/Category';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
// import BlogDetails from './Components/Pages/BlogDetails';
// import Login from './Components/Pages/Login';
// import SignUp from './Components/Pages/SignUp';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="Home" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="About" element={<About/>}/>
    </Routes>
    <Routes>
      <Route path="Category" element={<Category/>}/>
    </Routes>
    <Routes>
      <Route path="Login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="SignUP" element={<SignUp/>}/>
    </Routes>
    <Routes>
      <Route path="About" element={<About/>}/>
    </Routes>
    
    {/* <Routes>
      <Route path="BlogDetails">
          <BlogDetails/>
      </Route>
    </Routes>
    <Routes>
      <Route path="Login">
          <Login/>
      </Route>
    </Routes>
    <Routes>
      <Route path="SignUp">
          <SignUp/>
      </Route>
    </Routes> */}
    
    


   </Router>
   </>
  );
}

export default App;

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Base from "./components/Base";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./page/Home";
import About from "./kausalya/AboutPage";
import Services from "./page/Services";
// import challenge from "./components/productivity/productivity.html";
import ProductivityChallenge from './page/productivity';
import Login from "./page/Login";
import Signup from "./page/Signup";
import { Button } from 'reactstrap';
import Base from './components/base';
import GoalSettingApp from './kausalya/GoalSettingApp';
import MainContent from "./kausalyabookreview/MainContent";
function App() {
  return (
    <BrowserRouter>
     <Routes> 
       <Route path="/Login" element={<Login/>} />
      <Route path="Home" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="About" element={<About/>} />
      <Route path="/Services" element={<Services/>} /> 
      <Route path="/ProductivityChallenge" element={<ProductivityChallenge/>}/>
      <Route path="/GoalSettingApp" element={<GoalSettingApp/>}/>
      <Route path="/MainContent" element={<MainContent/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

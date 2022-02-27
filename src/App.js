import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Logo from './images/logo.png';
import Homepage from './components/Home.js';
import Courses from './components/Courses.js';
import Student from './components/Student.js';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="head">
            <img src={Logo} alt="logo" />
            <div className="right-side">
              <div className="social-media">
                <FacebookIcon id="icon" />
                <WhatsAppIcon id="icon" />
                <LinkedInIcon id="icon" />
                <TwitterIcon id="icon" />
              </div>
              <div className="user"><PersonIcon id="icon" /></div>
              <div className="search">
                <SearchIcon id="icon" />
              </div>
            </div>
          </div>
          <div className="navbarItem">
            <ul className="links">
              <li><Link to='/' id="link">Home</Link></li>
              <li><Link to='/courses' id="link">Courses</Link></li>
              <li>Faculites</li>
              <li>Services</li>
              <li><Link to='/student' id="link">Student</Link></li>
              <li>Admission
                <div className="menu2">
                  <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/courses" element={<Courses />}></Route>
          <Route exact path="/student" element={<Student />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;

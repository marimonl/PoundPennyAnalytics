import logo from './logo.svg';
import PPAlogo from './PPA-logo.png';
import {Link} from 'react-router-dom';
import './App.css';
import WhyPPA from './WhyPPA';
import SignUp from './SignUp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={PPAlogo} className="App-logo" alt="logo" />
        <p>
          <nav>
            <ul>
              <li>LandingPage</li>
            </ul>
          </nav>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function LandingPage(){
  return(
    <nav>
      <ul>
        <li>
          <Link to = "/">WhyPPA</Link>
        </li>
        <li>
          <Link to ="/invest">Invest</Link>
        </li>
        <li>
          <Link to ="/learn"> Learn</Link>
        </li>
        <li>
          <Link to = '/YouMoney'> YouMoney</Link>
        </li>
        <li>
          <Link to = '/login'> LogIn</Link>
        </li>
        <li>
          <Link to = '/SignUp'> SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}


function Button(){
  function Click(){
    console.log('Clicked');
  }
  return(
    <div className ="Button">

    </div>


  );
}

function CourseCard(props){
  return(
    <div className ="CourseCard">
     </div>
  );
}


function Input(){
  return(
    <div className = "Input">

    </div>

  );
}

export default App;


import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import FlightsDetails from './components/FlightDetaills/FlightsDetails';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <Navbar></Navbar>
      </div>
      <div className='mid'>
      {/* <Home></Home> */}
      {/* <FlightsDetails></FlightsDetails> */}
      </div>
      <Login></Login>
      
    </div>
  );
}

export default App;

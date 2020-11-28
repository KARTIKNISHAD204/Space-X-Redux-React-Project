
import './App.css';
import {BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import Navbar from './Components/navbar';
import RouteViews from './Route/route'


function App() {
  return (
    <Router>
    <div className="App">     
        <Navbar/> 
        <RouteViews/>
    </div>
    </Router>
  );
}

export default App;

import Indx from "./Components/Route-page"
import Tutorial1 from "./Components/Tutorial1"
import Tutorial2 from "./Components/Tutorial2"
import Tutorial3 from "./Components/Tutorial3"
import Tutorial4 from "./Components/Tutorial4"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App(){
  return (
    <div className="App">
    <Router>
     <Indx/>
     <Route path="/Tutorial1" component={Tutorial1}/>
     <Route path="/Tutorial2" component={Tutorial2}/>
     <Route path="/Tutorial3" component={Tutorial3}/>
     <Route path="/Tutorial4" component={Tutorial4}/>
     </Router>
    </div>
  );
}

export default App;

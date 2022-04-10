import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Nav,
  Home,
  Destination,
  Crew,
  Technology,

} from "./components"

function App() {
  return (
    <Router>
        <Nav/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />  
          </Route>
           {/* 
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>  
          */}  
        </Switch>
    </Router>
    
  )
}

export default App

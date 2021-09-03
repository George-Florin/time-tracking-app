import './App.css';
import ProjectPage from './components/ProjectPage';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MyContextProvider } from './Context/Context';
import { TimeContextProvider } from './Context/TimeContext';


const App = () => {
  return (
    <MyContextProvider>
      <TimeContextProvider>
        <Router>
          <Navbar />
            <Switch>
               <Route path="/projectpage/:id"  exact component={ProjectPage} />
               <Route path="/" exact component={Main} />
            </Switch>
        </Router>
      </TimeContextProvider>
   </MyContextProvider>
)
}

export default App;
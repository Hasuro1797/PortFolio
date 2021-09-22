import { Route, Switch } from "react-router";
import Navigator from "./components/Navigator";
import { routes } from "./helpers/routes";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import './App.scss';
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <div className={`sidebar ${showMenu ? "nav-toogle": "" }`}>
        <Navigator setShowMenu={setShowMenu}/>
      </div>
      <div 
        className="nav-btn"
        onClick={ () => setShowMenu(!showMenu)}
        >
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path={routes.home} component={HomePage}/>
          <div className="content">
            <Route exact path={routes.about} component={AboutPage}/>
            <Route exact path={routes.projects} component={ProjectPage}/>
            <Route exact path={routes.contact} component={ContactPage}/>
          </div>
          <Route to="*" component={ErrorPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router";
import Navigator from "./components/Navigator";
import { routes } from "./helpers/routes";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navigator/>
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

import { Header } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./ui/Theme";
const style = {
  marginTop: "6em",
  border: "1px solid black",
};
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div style={style}>home</div>} />
          <Route path="/services" exact component={() => <div style={style}>Services</div>} />
          <Route
            path="/customsoftware"
            exact
            component={() => <div style={style}>customSoftware</div>}
          />
          <Route path="/mobileapps" component={() => <div style={style}>mobileApps</div>} />
          <Route path="/websites" component={() => <div style={style}>websites</div>} />
          <Route path="/revolution" component={() => <div style={style}>revolution</div>} />
          <Route path="/about" component={() => <div style={style}>About</div>} />
          <Route path="/contact" component={() => <div style={style}>Contact</div>} />
          <Route path="/estimate" component={() => <div style={style}>estimate</div>} />
          <Route path="/*" component={() => <div style={style}>404 - Not found !</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

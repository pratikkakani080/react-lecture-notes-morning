import logo from "./logo.svg";
import "./App.css";
import Button from "./common/components/button";
import Dashboard from "./common/modules/dashboard";
import Login from "./common/modules/login";
import Routing from "./common/Routes";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

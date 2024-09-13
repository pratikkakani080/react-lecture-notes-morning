import "./App.css";
import Routing from "./common/Routes";
import MyContextProvider from "./common/lib/context/Providers/MyContextProvider";

function App() {
  console.log("***", process.env.REACT_APP_TOKEN);

  return (
    <div className="App">
      <MyContextProvider>
        <Routing />
      </MyContextProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import "./assets/css/App.css";
import "./assets/css/media.css";
import { useEffect, useReducer } from "react";
import { AppContextProvider } from "./context/App";
import AppReducer from "./context/Reducer";
import AppInitialState from "./context/InitialState";
import { attachDownloadFunction } from "./utils/file"

const App = () => {
  const [appState, dispatch] = useReducer(AppReducer, AppInitialState);

  useEffect(() => {
    localStorage.setItem("Builder__AppState", JSON.stringify(appState));
    attachDownloadFunction()
  }, [appState]);

  return (
    <AppContextProvider value={{
      appState,
      dispatch
    }}>
      <Router>
        <Routes />
      </Router>
    </AppContextProvider>
  );
}

export default App;

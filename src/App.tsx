import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StyleSheet, css } from "aphrodite";
import StartTimer from "./components/Start/StartTimer";
import { LevelOne } from "./components/Level/LevelOne";
import { LevelTwo } from "./components/Level/LevelTwo";
import { LevelThree } from "./components/Level/LevelThree";
import EndClassic from "./components/End/EndClassic";
import { PrivateRoutes } from "./PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#282c34",
    textAlign: "center",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
});

const App = () => {
  return (
    <div className={css(styles.app)}>
      <Router>
        <Routes>
          <Route
            path={PrivateRoutes.PARAM_START_TIMER}
            element={<StartTimer />}
          />
          <Route path={PrivateRoutes.PARAM_LEVEL_ONE} element={<LevelOne />} />
          <Route path={PrivateRoutes.PARAM_LEVEL_TWO} element={<LevelTwo />} />
          <Route
            path={PrivateRoutes.PARAM_LEVEL_THREE}
            element={<LevelThree />}
          />
          <Route
            path={PrivateRoutes.PARAM_END_CLASSIC}
            element={<EndClassic />}
          />
        </Routes>
      </Router>

      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "./stories/pages/";
import StartTimer from "./components/Start/StartTimer";
import { LevelOne } from "./components/Level/LevelOne";
import { LevelTwo } from "./components/Level/LevelTwo";
import { LevelThree } from "./components/Level/LevelThree";
import EndClassic from "./components/End/EndClassic";
import { PrivateRoutes } from "./PrivateRoutes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default App;

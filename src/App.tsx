import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "./stories/pages/";
import StartTimer from "./components/Start/StartTimer";
import { LevelOne } from "./components/Level/LevelOne";
import { LevelTwo } from "./components/Level/LevelTwo";
import { LevelThree } from "./components/Level/LevelThree";
import EndClassic from "./components/End/EndClassic";
import { QuizOne } from "./components/Start/QuizOne";
import { QuizTwo } from "./components/Level/QuizTwo";
import { QuizThree } from "./components/Level/QuizThree";
import { QuizFour } from "./components/Level/QuizFour";
import { PageNotFound } from "./stories/pages/";
import TestPage from "./TestPage";
import { PrivateRoutes } from "./PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route
          path={PrivateRoutes.PARAM_START_TIMER}
          element={<StartTimer />}
        />
        <Route path={PrivateRoutes.PARAM_QUIZ_ONE} element={<QuizOne />} />
        <Route path={PrivateRoutes.PARAM_LEVEL_ONE} element={<LevelOne />} />
        <Route path={PrivateRoutes.PARAM_QUIZ_TWO} element={<QuizTwo />} />
        <Route path={PrivateRoutes.PARAM_LEVEL_TWO} element={<LevelTwo />} />
        <Route path={PrivateRoutes.PARAM_QUIZ_THREE} element={<QuizThree />} />
        <Route
          path={PrivateRoutes.PARAM_LEVEL_THREE}
          element={<LevelThree />}
        />
        <Route path={PrivateRoutes.PARAM_QUIZ_FOUR} element={<QuizFour />} />
        <Route
          path={PrivateRoutes.PARAM_END_CLASSIC}
          element={<EndClassic />}
        />
        <Route path={PrivateRoutes.TEST} element={<TestPage />} />
        <Route path={PrivateRoutes.PARAM_404} element={<PageNotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </Container>
  );
};

export default App;

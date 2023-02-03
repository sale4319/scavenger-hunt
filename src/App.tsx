import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "./stories/pages/";
import StartTimer from "./components/Start/StartTimer";
import { LevelOne } from "./components/Stages/Levels/LevelOne";
import { LevelTwo } from "./components/Stages/Levels/LevelTwo";
import { LevelThree } from "./components/Stages/Levels/LevelThree";
import FinishClassic from "./components/Finish/FinishClassic";
import { QuizOne } from "./components/Start/QuizOne";
import { QuizTwo } from "./components/Stages/Quizes/QuizTwo";
import { QuizThree } from "./components/Stages/Quizes/QuizThree";
import { QuizFour } from "./components/Stages/Quizes/QuizFour";
import { PageNotFound } from "./stories/pages/";
import { PrivateRoutes } from "./PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
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
          <Route
            path={PrivateRoutes.PARAM_QUIZ_THREE}
            element={<QuizThree />}
          />
          <Route
            path={PrivateRoutes.PARAM_LEVEL_THREE}
            element={<LevelThree />}
          />
          <Route path={PrivateRoutes.PARAM_QUIZ_FOUR} element={<QuizFour />} />
          <Route
            path={PrivateRoutes.PARAM_END_CLASSIC}
            element={<FinishClassic />}
          />
          <Route path={PrivateRoutes.PARAM_404} element={<PageNotFound />} />
        </Routes>
      </Container>
      <ToastContainer autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default App;

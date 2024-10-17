import SigninPage from "../../pages/SigninPage";
import SharedLayout from "../SharedLayout/SharedLayout";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style}>
      <SharedLayout />
      <SigninPage />
    </div>
  );
};

export default App;

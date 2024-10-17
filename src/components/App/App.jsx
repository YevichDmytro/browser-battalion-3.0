// import SigninPage from "../../pages/SigninPage";
// import SharedLayout from "../SharedLayout/SharedLayout";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style}>
      {/* <SharedLayout /> */}
      {/* <SigninPage /> */}
      <WelcomePage/>
    </div>
  );
};

export default App;

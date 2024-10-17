import SigninPage from '../../pages/SigninPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal.jsx';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style}>
      {/* <SharedLayout />
      <SigninPage /> */}
      <UserLogoutModal />
    </div>
  );
};

export default App;

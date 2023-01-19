import "../styles/AppHeader.css";
import appLogo from '../assets/app-logo.png'

const AppHeader = () => {
  return (
    <header>
      <h1 className="header-title">TaskApp</h1>
      <img src={appLogo} alt='app-icon' className="app-logo" />
    </header>
  );
};

export default AppHeader;

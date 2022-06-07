import { Outlet } from "react-router-dom";
import "./layout.scss";
import logo from "../../assets/images/logo.png";
const Layout = () => {
  return (
    <div>
      <div className="header">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="contact">
          <div className="dubs">¿Tienes alguna duda?</div>
          <div className="number">(01) 411 6001</div>
          <div className="call__number">Llámanos</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;

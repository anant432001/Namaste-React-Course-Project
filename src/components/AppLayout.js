import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";

const AppLayout = () => {
  return (
    <Provider store={appstore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default AppLayout;

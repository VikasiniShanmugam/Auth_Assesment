import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "../styles/common.css";

function Layout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

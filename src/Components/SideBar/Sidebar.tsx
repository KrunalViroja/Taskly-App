import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./sidebar.css";

interface SidebarProps {
  isClosed: boolean;
  onToggle: () => void;
}

const SideBar: FC<SidebarProps> = ({ isClosed, onToggle }) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode === "dark";
  });

  useEffect(() => {
    const auth = localStorage.getItem("login");
    if (!auth) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    localStorage.setItem("mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode((prevState) => !prevState);
  };

  const logout = (): void => {
    // localStorage.removeItem("token");
    localStorage.removeItem("login");
    message.success("Logout from dashboard");
    navigate("/");
  };

  return (
    <div className={`sidebar-container ${isClosed ? "closed" : ""}`}>
      <nav>
        <div className="top">
          <h1 className="sidebar-title-text">Taskly</h1>
          <i
            className="uil uil-bars sidebar-toggle"
            onClick={onToggle} 
          ></i>
        </div>
        <div className="sidebar-title"></div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <Link to="/Dashboard">
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
              </Link>
            </li>
            
          </ul>

          <ul className="logout-mode">
            <li>
              <div className="logout" onClick={logout}>
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </div>
            </li>
            <li>
              <div className="mode-toggle">
                <span>
                  <i className="uil uil-moon"></i>
                  <span className="link-name">Dark Mode</span>
                </span>
                <div className="mode-toggle" onClick={toggleDarkMode}>
                  <span className="switch"></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;

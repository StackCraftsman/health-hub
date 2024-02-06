import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import { Main } from "./dashboard.styled";

const Dashboard = ({ user_type, user_role, job_type }) => {
  return (
    <>
      <HeaderComponent />
      <Main>
        <Sidebar
          user_type={user_type}
          user_role={user_role}
          job_type={job_type}
        />
        <Outlet />
      </Main>
    </>
  );
};

export default Dashboard;

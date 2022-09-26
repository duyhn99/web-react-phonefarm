import React, { lazy } from "react";
import { Route } from "react-router-dom";
import path from "../resources/path";
const Login = lazy(() => import("../pages/login/Login"));
const Devices = lazy(() => import("../pages/list/Devices"));
const GroupDevices = lazy(() => import("../pages/list/GroupDevices"));
const Script = lazy(() => import("../pages/list/Scripts"));
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));

const ClientRoutes = () => {
  return (
    <>
      <Route exact path={path.SCRIPTS} render={() => <Script />} />
      <Route exact path={path.GROUPDEVICES} render={() => <GroupDevices />} />
      <Route exact path={path.DEVICES} render={() => <Devices />} />
    </>
  );
};

export default ClientRoutes;

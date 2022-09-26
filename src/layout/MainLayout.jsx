import React from "react";
import Sidebar from "~/components/Sidebar/Sidebar";
import ClientRoutes from "~/routes/ClientRoutes";

const MainLayout = () => {
  return (
    <>
      <Sidebar>
        <ClientRoutes />
      </Sidebar>
    </>
  );
};

export default MainLayout;

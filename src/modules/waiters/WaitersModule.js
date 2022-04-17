import React from "react";
import { Route, Routes } from "react-router-dom";
import WaiterListPage from "./pages/WaiterListPage";
import WaiterPage from "./pages/WaiterPage";

export default function WaitersModule() {
  return (
    <Routes>
      <Route path="" element={<WaiterListPage />} />
      <Route path="/waiter/:waiterId" element={<WaiterPage />}></Route>
      
    </Routes>
  );
}

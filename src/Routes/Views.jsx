import React from "react";
import { Route, Routes } from "react-router-dom";

// importing pages that need authentication
import DashBoard from "../Components/DashBoardLayout";
import EditNote from "./authRoutes/EditNote";
import Posts from "./authRoutes/Posts";
import Profile from "./authRoutes/Profile";
import CrudLayout from "./authRoutes/Crud/CrudLayout";
import TablesLayout from "./authRoutes/Tables/TablesLayout";
// import pages that don't need authentication
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
function Views() {
  return (
    <Routes className="container">
      <Route path="/" element={<Home />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="dash" element={<DashBoard />}>
        <Route index element={<Posts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="internshipNotebook" element={<EditNote/>}/>
         <Route path="crud" element={<CrudLayout/>}>
          </Route>
         <Route path="tables" element={<TablesLayout/>}>
         </Route>
        
      </Route>
      {/* TODO : ADD NOT FOUND PAGE AND MAKE IT RENDER AFTER 3 SECOND TO THE MAIN  */}
      <Route path="*" element={<h1>Notfound 404</h1>} />
    </Routes>
  );
}

export default Views;

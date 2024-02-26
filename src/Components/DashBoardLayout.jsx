import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function DashBoard() {
  return (
    <main className="dashBoard ">
      <nav>
        <ul className="dashBoard__list">
          <li className="dashBoard__active">
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : null)}
              to="."
              aria-current="page"
              end
            >
              Home
              {/* TODO : WHERE ALL CAN SEE STAJ POSTS */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : null)}
              to="profile"
            >
              Profile
              {/* TODO : WHERE EACH STUDENT||ADMIN HAVE TO ACCESS ITS INFORMATION */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : null)}
              to="crud"
            >
              CRUD
              {/* TODO : WHERE JUST THE SUPER ADMIN CAN SEE THE STUDENTS AND ADMINS AND FACULTIES */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : null)}
              to="tables"
            >
              Tables
              {/* TODO WHERE ADMIN CAN EXTRACT PDFS OF STUDENTS LISTS AND ADMINS LISTS */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : null)}
              to="internshipNotebook"
            >
             
              Write 
              {/* TODO WHERE STUDENT CAN EDIT THEIR INTERNSHIP NOTEBOOK */}
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default DashBoard;

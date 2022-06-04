import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Asaid() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index.html" className="brand-link">
        <img
          src="dist/img/Logo_Agrointerra.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Agrointerra</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/User_prueba.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a href="###" className="nav-link">
              <i class="bi bi-box-arrow-up">  </i>
                <p>Paginas</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="###" className="nav-link">
                <i class="bi bi-bag-dash">  </i>
                <p>Productos</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="###" className="nav-link">
                <i class="bi bi-people">  </i>
                <p>Usuarios</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Asaid;

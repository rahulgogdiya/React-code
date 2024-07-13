import React from "react";

function Sidebar({ selectedTap,setSelectedTap }) {

 
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ height: "80vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>{setSelectedTap("Home")}}>
          <a
            href="#"
            className={`nav-link text-white ${selectedTap === 'Home' && 'active'} `}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li >
        <li  onClick={()=>{setSelectedTap("create post")}}>
          <a href="#" className={`nav-link text-white ${selectedTap === 'create post' && 'active'} `}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            create post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown"></div>
    </div>
  );
}

export default Sidebar;

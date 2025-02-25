import React from "react";

export const Navigation = (props) => {
  return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ backgroundColor: "#312f2f" }}>
          <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
                  <a className="navbar-brand page-scroll" href="#page-top" style={{ color: "white" }} >
            I CONTROLINX
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/*<li>*/}
            {/*  <a href="#features" className="page-scroll">*/}
            {/*    Features*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
                          <a href="#about" className="page-scroll" style={{ color: "white" }}>
                About
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="#services" className="page-scroll">*/}
            {/*    Services*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#portfolio" className="page-scroll">*/}
            {/*    Gallery*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#testimonials" className="page-scroll">*/}
            {/*    Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
                          <a href="#team" className="page-scroll" style={{ color: "white" }}>
                Team
              </a>
            </li>
            <li>
                          <a href="#contact" className="page-scroll" style={{ color: "white" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
